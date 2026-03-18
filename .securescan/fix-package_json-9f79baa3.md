# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "tunnel-agent" (range: <0.6.0) | via: Memory Exposure in tunnel-agent

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"tunnel-agent","severity":"moderate","isDirect":false,"via":[{"source":1085744,"name":"tunnel-agent","dependency":"tunnel-agent","title":"Memory Exposure in tunnel-agent","url":"https:\/\/github.com\/advisories\/GHSA-xc7v-wxcw-j472","severity":"moderate","cwe":["CWE-200"],"cvss":{"score":0,"vectorString":null},"range":"<0.6.0"}],"effects":["request"],"range":"<0.6.0","nodes":["node_modules\/npm\/node_modules\/request\/node_modules\/tunnel-agent","node_modules\/tunnel-agent"],"fixAvailable":{"name":"grunt-retire","version":"0.1.0","isSemVerMajor":true}}
```
