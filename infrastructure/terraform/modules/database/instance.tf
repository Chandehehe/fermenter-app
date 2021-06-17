resource "aws_rds_cluster" "postgresql" {
  cluster_identifier      = "${var.config["environment"]}-${var.config["org_prefix"]}-cluster"
  engine                  = "aurora-postgresql"
  database_name           = var.config["database_name"]
  master_username         = var.config["database_master_username"]
  master_password         = var.config["database_master_password"]
}