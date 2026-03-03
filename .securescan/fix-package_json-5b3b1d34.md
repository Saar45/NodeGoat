# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "ajv" (range: <=6.12.6) | via: Prototype Pollution in Ajv, ajv has ReDoS when using `$data` option

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"ajv","severity":"moderate","isDirect":false,"via":[{"source":1097685,"name":"ajv","dependency":"ajv","title":"Prototype Pollution in Ajv","url":"https:\/\/github.com\/advisories\/GHSA-v88g-cgmw-v5xw","severity":"moderate","cwe":["CWE-915","CWE-1321"],"cvss":{"score":5.6,"vectorString":"CVSS:3.1\/AV:N\/AC:H\/PR:N\/UI:N\/S:U\/C:L\/I:L\/A:L"},"range":"<6.12.3"},{"source":1113714,"name":"ajv","dependency":"ajv","title":"ajv has ReDoS when using `$data` option","url":"https:\/\/github.com\/advisories\/GHSA-2g4f-4pwh-qvx6","severity":"moderate","cwe":["CWE-400","CWE-1333"],"cvss":{"score":0,"vectorString":null},"range":"<6.14.0"}],"effects":[],"range":"<=6.12.6","nodes":["node_modules\/ajv"],"fixAvailable":true}
```
