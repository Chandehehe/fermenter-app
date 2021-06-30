locals {
  region      = var.config.region
  name        = var.config.name
  environment = var.config.environment
  tags = {
    Owner       = "devops"
    Environment = var.config.environment
  }
}
