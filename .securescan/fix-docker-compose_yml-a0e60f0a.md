# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** semgrep
**File:** `docker-compose.yml`
**Line:** 13

## Description

Service 'mongo' is running with a writable root filesystem. This may allow malicious applications to download and run additional payloads, or modify container files. If an application inside a container has to save something temporarily consider using a tmpfs. Add 'read_only: true' to this service to prevent this.

## Proposed Fix

Vulnérabilité détectée (semgrep, sévérité MEDIUM). Examinez le code concerné dans docker-compose.yml et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
requires login
```
