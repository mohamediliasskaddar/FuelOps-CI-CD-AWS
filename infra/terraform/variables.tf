variable "region" {
  default = "us-east-1"
}

variable "instance_type" {
  default = "t3.micro"
}

variable "ssh_ip" {
  description = "My IPv4 address in CIDR format allowed to SSH (e.g. 41.92.124.14/32)"
  type        = string
}