# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "json-schema" (range: <0.4.0) | via: json-schema is vulnerable to Prototype Pollution

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"json-schema","severity":"critical","isDirect":false,"via":[{"source":1101855,"name":"json-schema","dependency":"json-schema","title":"json-schema is vulnerable to Prototype Pollution","url":"https:\/\/github.com\/advisories\/GHSA-896r-f27r-55mw","severity":"critical","cwe":["CWE-915","CWE-1321"],"cvss":{"score":9.8,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:H\/I:H\/A:H"},"range":"<0.4.0"}],"effects":["jsprim"],"range":"<0.4.0","nodes":["node_modules\/json-schema","node_modules\/npm\/node_modules\/request\/node_modules\/http-signature\/node_modules\/jsprim\/node_modules\/json-schema"],"fixAvailable":true}
```
