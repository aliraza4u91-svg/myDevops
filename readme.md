# 🚀 DevOps Full Stack Monitoring Project

A complete production-style DevOps project built using Docker, Prometheus, Grafana, and Node Exporter, deployed on AWS EC2.

---

# 🧠 Overview

This project demonstrates a full monitoring pipeline:

- Backend application running in Docker
- System metrics collection using Node Exporter
- Metrics storage and querying using Prometheus
- Visualization using Grafana dashboards
- Deployed on AWS EC2 instance
Deploy to Kubernetes cluster
. Expose using Service (NodePort)
. Route traffic using Ingress

---

# 🏗 Architecture

---

# 📦 Components

## 🔹 Backend
- REST API application
- Dockerized deployment
- Exposed via port 5000

## 🔹 Monitoring Stack

### 📊 Prometheus
- Collects and stores metrics
- Scrapes system and container data

### 🖥 Node Exporter
- Exposes system-level metrics:
  - CPU usage
  - Memory usage
  - Disk usage
  - Network stats

### 📈 Grafana
- Visualization platform
- Real-time dashboards
- Prebuilt system monitoring panels

---

# ⚙️ How to Run

```bash
docker-compose up -d
🌐 Access URLs
Backend API → http://16.16.254.27
Prometheus → http://16.16.254.27:9090
Grafana → http://16.16.254.27:3000
