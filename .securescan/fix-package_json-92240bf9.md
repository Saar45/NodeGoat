# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "request" (range: *) | via: Remote Memory Exposure in request, Remote Memory Exposure in request, Server-Side Request Forgery in Request, bl, form-data, hawk, mime, qs, tough-cookie, tough-cookie, tunnel-agent

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"request","severity":"critical","isDirect":false,"via":[{"source":1093762,"name":"request","dependency":"request","title":"Remote Memory Exposure in request","url":"https:\/\/github.com\/advisories\/GHSA-7xfp-9c55-5vqj","severity":"moderate","cwe":["CWE-201"],"cvss":{"score":5.9,"vectorString":"CVSS:3.0\/AV:N\/AC:H\/PR:N\/UI:N\/S:U\/C:H\/I:N\/A:N"},"range":">=2.2.6 <2.47.0"},{"source":1093763,"name":"request","dependency":"request","title":"Remote Memory Exposure in request","url":"https:\/\/github.com\/advisories\/GHSA-7xfp-9c55-5vqj","severity":"moderate","cwe":["CWE-201"],"cvss":{"score":5.9,"vectorString":"CVSS:3.0\/AV:N\/AC:H\/PR:N\/UI:N\/S:U\/C:H\/I:N\/A:N"},"range":">=2.49.0 <2.68.0"},{"source":1096727,"name":"request","dependency":"request","title":"Server-Side Request Forgery in Request","url":"https:\/\/github.com\/advisories\/GHSA-p8p7-x288-28g6","severity":"moderate","cwe":["CWE-918"],"cvss":{"score":6.1,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:R\/S:C\/C:L\/I:L\/A:N"},"range":"<=2.88.2"},"bl","form-data","hawk","mime","qs","tough-cookie","tough-cookie","tunnel-agent"],"effects":["coveralls","cypress","grunt-retire","node-gyp","npm","npm-registry-client","retire","zaproxy"],"range":"*","nodes":["node_modules\/cypress\/node_modules\/request","node_modules\/grunt-retire\/node_modules\/request","node_modules\/npm\/node_modules\/request","node_modules\/request","node_modules\/zaproxy\/node_modules\/request"],"fixAvailable":{"name":"cypress","version":"15.11.0","isSemVerMajor":true}}
```
