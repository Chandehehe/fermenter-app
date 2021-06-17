provider "aws" {
  alias   = "default"
  region  = var.config["region"]
}