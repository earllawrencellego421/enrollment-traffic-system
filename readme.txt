# Enrollment Traffic System

A containerized traffic monitoring and routing system built for an enrollment platform using Nginx, Docker, and Prometheus monitoring.

## Features
* **Reverse Proxy & Routing:** Configured with Nginx supporting SSL (`cert.pem`/`key.pem`).
* **Containerization:** Full microservices management via `docker-compose.yml`.
* **System Monitoring:** Core metric collection utilizing Prometheus and Alertmanager.
* **Notifications:** Slack/Discord automated webhooks integration for real-time monitoring alerts.

## Tech Stack
* **Frontend:** HTML / TypeScript
* **DevOps & Infrastructure:** Docker, Nginx, Prometheus, Alertmanager

---

## Getting Started

### 1. Docker Setup
To spin up the entire system environment, run:
```bash
docker compose start
