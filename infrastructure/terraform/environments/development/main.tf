provider "aws" {
  region = var.region
}

terraform {
  backend "s3" {
    bucket = "fermenter-terraform-state"
    key    = "fermenter-development.tfstate"
    region = "ap-southeast-1"
  }
}
