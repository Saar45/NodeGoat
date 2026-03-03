# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "y18n" (range: <3.2.2) | via: Prototype Pollution in y18n

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"y18n","severity":"high","isDirect":false,"via":[{"source":1095087,"name":"y18n","dependency":"y18n","title":"Prototype Pollution in y18n","url":"https:\/\/github.com\/advisories\/GHSA-c4w7-xm78-47vh","severity":"high","cwe":["CWE-20","CWE-915","CWE-1321"],"cvss":{"score":7.3,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:L\/I:L\/A:L"},"range":"<3.2.2"}],"effects":[],"range":"<3.2.2","nodes":["node_modules\/nyc\/node_modules\/y18n","node_modules\/y18n"],"fixAvailable":true}
```
