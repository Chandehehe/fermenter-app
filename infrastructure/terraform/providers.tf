provider "aws" {
  alias  = "main"
  region = var.config["region"]
}
