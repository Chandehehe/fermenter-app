config = {
  # shared
  name        = "fermenter"
  environment = "production"
  region      = "ap-southeast-1"

  # database
  database_master_username = "stronghold"
  database_name            = "fermenter_db"

  # networking
  cidr_block = "10.99.0.0/18"
}
