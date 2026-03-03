# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** semgrep
**File:** `artifacts/cert/server.key`
**Line:** 1

## Description

Private Key detected. This is a sensitive credential and should not be hardcoded here. Instead, store this in a separate, private file.

## Proposed Fix

Vulnérabilité détectée (semgrep, sévérité MEDIUM). Examinez le code concerné dans artifacts/cert/server.key et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
requires login
```
