
---

## RATIONALE.md (1-page)

```markdown
# Design Rationale

## Why Message Queues?
Queues (e.g., RabbitMQ, Kafka, SQS) act as a buffer to absorb unpredictable spikes.  
They decouple incoming requests from the rate-limited API/DB, ensuring we don’t drop traffic.

## Why Worker Services?
Workers let us enforce **rate-limiting** for the third-party API and **connection pooling** for the DB.  
This ensures we never exceed:
- 1000 requests/minute (third-party API)
- 100 DB connections

## Why Autoscaling?
API servers and workers can be autoscaled independently:
- API servers scale on request rate.
- Workers scale on queue depth.

This means we handle bursts without overloading downstream systems.

## Trade-offs
- **Increased latency**: Requests may wait in queue during spikes.
- **Operational overhead**: More infra components (queues, workers, monitoring).
- **Cost**: Autoscaling and queue storage add cloud costs.

## Why This Design is Resilient
- **No dropped requests** – queues absorb bursts.
- **Respects external limits** – controlled worker rate-limiting.
- **Fault tolerance** – retries and monitoring prevent cascading failures.
