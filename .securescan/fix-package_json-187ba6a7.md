# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "mongodb" (range: <=3.1.12) | via: Denial of Service in mongodb, mongodb-core

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"mongodb","severity":"critical","isDirect":true,"via":[{"source":1086754,"name":"mongodb","dependency":"mongodb","title":"Denial of Service in mongodb","url":"https:\/\/github.com\/advisories\/GHSA-mh5c-679w-hh4r","severity":"high","cwe":[],"cvss":{"score":0,"vectorString":null},"range":"<3.1.13"},"mongodb-core"],"effects":[],"range":"<=3.1.12","nodes":["node_modules\/mongodb"],"fixAvailable":{"name":"mongodb","version":"7.1.0","isSemVerMajor":true}}
```
