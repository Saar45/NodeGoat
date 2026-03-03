# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "form-data" (range: <=2.5.3) | via: form-data uses unsafe random function in form-data for choosing boundary, mime

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"form-data","severity":"critical","isDirect":false,"via":[{"source":1109540,"name":"form-data","dependency":"form-data","title":"form-data uses unsafe random function in form-data for choosing boundary","url":"https:\/\/github.com\/advisories\/GHSA-fjxv-7rqg-78g4","severity":"critical","cwe":["CWE-330"],"cvss":{"score":0,"vectorString":null},"range":"<2.5.4"},"mime"],"effects":["request"],"range":"<=2.5.3","nodes":["node_modules\/cypress\/node_modules\/form-data","node_modules\/form-data","node_modules\/grunt-retire\/node_modules\/form-data","node_modules\/npm\/node_modules\/request\/node_modules\/form-data","node_modules\/zaproxy\/node_modules\/form-data"],"fixAvailable":{"name":"grunt-retire","version":"0.1.0","isSemVerMajor":true}}
```
