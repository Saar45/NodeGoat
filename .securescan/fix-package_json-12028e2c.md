# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "extend" (range: 3.0.0 - 3.0.1) | via: Prototype Pollution in extend

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"extend","severity":"moderate","isDirect":false,"via":[{"source":1112515,"name":"extend","dependency":"extend","title":"Prototype Pollution in extend","url":"https:\/\/github.com\/advisories\/GHSA-qrmc-fj45-qfc2","severity":"moderate","cwe":["CWE-400"],"cvss":{"score":0,"vectorString":null},"range":">=3.0.0 <3.0.2"}],"effects":[],"range":"3.0.0 - 3.0.1","nodes":["node_modules\/npm\/node_modules\/request\/node_modules\/extend"],"fixAvailable":true}
```
