output "public_ip" {
  description = "EC2 Public IP"
  value       = aws_instance.web.public_ip
}

output "public_dns" {
  description = "EC2 Public DNS"
  value       = aws_instance.web.public_dns
}