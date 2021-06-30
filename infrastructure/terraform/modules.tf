################################################################################
# Supporting Resources
################################################################################

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 3.0"

  name = "${local.name}-${local.environment}-vpc"
  cidr = var.config.cidr_block

  azs              = ["${local.region}a", "${local.region}b", "${local.region}c"]
  public_subnets   = ["10.99.0.0/24", "10.99.1.0/24", "10.99.2.0/24"]
  private_subnets  = ["10.99.3.0/24", "10.99.4.0/24", "10.99.5.0/24"]
  database_subnets = ["10.99.7.0/24", "10.99.8.0/24", "10.99.9.0/24"]

  tags = local.tags
}

# ################################################################################
# # RDS Aurora Module - PostgreSQL
# ################################################################################

module "aurora_postgresql" {
  source  = "terraform-aws-modules/rds-aurora/aws"
  version = "5.2.0"

  name              = "${local.name}-${local.environment}-postgresql"
  engine            = "aurora-postgresql"
  engine_mode       = "serverless"
  storage_encrypted = true

  vpc_id                = module.vpc.vpc_id
  subnets               = module.vpc.database_subnets
  create_security_group = true
  allowed_cidr_blocks   = module.vpc.private_subnets_cidr_blocks

  replica_scale_enabled = false
  replica_count         = 0

  monitoring_interval = 60

  enable_http_endpoint = true

  apply_immediately   = true
  skip_final_snapshot = true

  db_parameter_group_name         = aws_db_parameter_group.example_postgresql.id
  db_cluster_parameter_group_name = aws_rds_cluster_parameter_group.example_postgresql.id

  database_name = var.config.database_name
  username      = var.config.database_master_username

  scaling_configuration = {
    auto_pause               = true
    min_capacity             = 2
    max_capacity             = 4
    seconds_until_auto_pause = 300
    timeout_action           = "ForceApplyCapacityChange"
  }
}

resource "aws_db_parameter_group" "example_postgresql" {
  name        = "${local.name}-${local.environment}-aurora-db-postgres-parameter-group"
  family      = "aurora-postgresql10"
  description = "${local.name}-aurora-db-postgres-parameter-group"
  tags        = local.tags
}

resource "aws_rds_cluster_parameter_group" "example_postgresql" {
  name        = "${local.name}-${local.environment}-aurora-postgres-cluster-parameter-group"
  family      = "aurora-postgresql10"
  description = "${local.name}-aurora-postgres-cluster-parameter-group"
  tags        = local.tags
}
