# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "websocket-extensions" (range: <0.1.4) | via: Regular Expression Denial of Service in websocket-extensions (NPM package)

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"websocket-extensions","severity":"high","isDirect":false,"via":[{"source":1087512,"name":"websocket-extensions","dependency":"websocket-extensions","title":"Regular Expression Denial of Service in websocket-extensions (NPM package)","url":"https:\/\/github.com\/advisories\/GHSA-g78m-2chm-r7qv","severity":"high","cwe":["CWE-400"],"cvss":{"score":8.2,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:L\/A:H"},"range":"<0.1.4"}],"effects":[],"range":"<0.1.4","nodes":["node_modules\/websocket-extensions"],"fixAvailable":true}
```
