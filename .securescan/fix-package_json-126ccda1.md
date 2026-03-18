# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "stringstream" (range: <0.0.6) | via: Out-of-bounds Read in stringstream

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"stringstream","severity":"moderate","isDirect":false,"via":[{"source":1090117,"name":"stringstream","dependency":"stringstream","title":"Out-of-bounds Read in stringstream","url":"https:\/\/github.com\/advisories\/GHSA-mf6x-7mm4-x2g7","severity":"moderate","cwe":["CWE-125"],"cvss":{"score":0,"vectorString":null},"range":"<0.0.6"}],"effects":[],"range":"<0.0.6","nodes":["node_modules\/npm\/node_modules\/request\/node_modules\/stringstream"],"fixAvailable":true}
```
