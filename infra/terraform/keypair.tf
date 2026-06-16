resource "aws_key_pair" "deployer" {
  key_name = "devops-key"
  # public_key = file("~/.ssh/devops-aws-key.pub")
  public_key = file("/home/imk/.ssh/devops-aws-key.pub")
}