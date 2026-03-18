# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** semgrep
**File:** `docker-compose.yml`
**Line:** 13

## Description

Service 'mongo' allows for privilege escalation via setuid or setgid binaries. Add 'no-new-privileges:true' in 'security_opt' to prevent this.

## Proposed Fix

Vulnérabilité détectée (semgrep, sévérité MEDIUM). Examinez le code concerné dans docker-compose.yml et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
requires login
```
