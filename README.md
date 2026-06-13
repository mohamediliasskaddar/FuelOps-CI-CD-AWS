## Gestion des Stations-Service (Full CI/CD on AWS)

---

# 🧠 1. Project Overview

This project consists of deploying a **full-stack application** (Spring Boot + Angular + PostgreSQL) using a complete **DevOps pipeline**.

The objective is to simulate a **real production environment** using:

- Infrastructure as Code (Terraform)

- Configuration Management (Ansible)

- Containerization (Docker)

- CI/CD (GitHub Actions)

- Deployment Strategy (Blue/Green)

- Cloud Hosting (AWS EC2 – Free Tier)

## Steps : 

    Step 1: CI → code is correct ✔
    Step 2: Docker → app is portable ✔
    Step 3: Terraform → machine exists
    Step 4: Ansible → machine configured
    Step 5: CD → deploy app
    Step 6: Blue/Green → switch traffic