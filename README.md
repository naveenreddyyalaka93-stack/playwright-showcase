# Finkraft Showcase Round – API Scaling Design

## Problem Summary
We currently have a stateless API deployed on a single VM.  
Each request must:
- Call a third-party API with strict limits:
  - 1000 requests/minute
  - 50,000 requests/hour
  - 500,000 requests/day
- Query a SQL database with a maximum of 100 connections (cannot be scaled).

Incoming traffic may spike into lakhs of requests.  
We must handle this without failing requests due to API/DB limits.

---

## Solution Overview
The proposed solution uses **load balancing, message queues, worker services, and rate limiting** to ensure stability under traffic spikes.

### Architecture Diagram
![Architecture Diagram](architecture.png)

### Flow
1. **Load Balancer** distributes requests across multiple stateless API servers.
2. **API servers** validate requests and enqueue them into a **message queue** (Kafka/RabbitMQ/SQS).
3. **Workers** consume from the queue and:
   - Call the **third-party API** with a built-in rate limiter (token bucket).
   - Interact with the **database** using a connection pool (≤100 connections).
4. **Autoscaling** ensures both API servers and workers scale out during spikes.
5. **Monitoring & Alerts** track API usage, queue depth, DB utilization.

---

## How to Run
```bash
./ci.sh
