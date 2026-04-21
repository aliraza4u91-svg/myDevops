# 🚀 DevOps Full Stack Monitoring Project

A production-style DevOps project using Docker, Prometheus, Grafana, Node Exporter, and Nginx deployed on AWS EC2.

---

# 🧠 Overview

This project demonstrates a complete DevOps monitoring and deployment pipeline:

- Backend application (Dockerized)
- System monitoring using Node Exporter
- Metrics collection using Prometheus
- Visualization using Grafana
- Reverse proxy using Nginx
- Deployed on AWS EC2

---

# 🏗 Architecture

---

# 📦 Components

## 🔹 Backend
- REST API application
- Containerized using Docker
- Runs on port 5000

---

## 🔹 Monitoring Stack

### 📊 Prometheus
- Collects system metrics
- Scrapes data from Node Exporter

### 🖥 Node Exporter
- Provides system-level metrics:
  - CPU usage
  - Memory usage
  - Disk usage
  - Network stats

### 📈 Grafana
- Visualization tool
- Real-time dashboards
- Prebuilt system monitoring panels

---

## 🌐 Nginx (Reverse Proxy)

- Acts as a reverse proxy
- Routes traffic to services
- Handles clean URLs and access control

### Example:
- `/` → Backend API
- `/grafana` → Grafana dashboard
- `/prometheus` → Prometheus UI

---

# ⚙️ How to Run

```bash
docker-compose up -d
Replace <EC2-IP> with your server IP:

Backend → http://16.16.254.27:5000
Prometheus → http://16.16.254.27:9090
Grafana → http://16.16.254.27:3000
