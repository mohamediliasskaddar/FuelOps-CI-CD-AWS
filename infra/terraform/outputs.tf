output "public_ip" {
  description = "The public IP address of the instance"
  value       = aws_instance.web.public_ip
}