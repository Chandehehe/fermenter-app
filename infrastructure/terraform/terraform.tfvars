config = {
  # shared
  org_prefix  = "fermenter"
  environment = "development"
  region      = "ap-southeast-1"

  # database
  database_master_username = "stronghold"
  database_master_password = "w33u3Ng4zmFsJuCR"
  database_name            = "fermenter_db"

  # networking
  availability_zones = "ap-southeast-1a"
  main_cidr_block    = "10.1.0.0/16"
}
