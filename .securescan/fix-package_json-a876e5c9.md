# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "hoek" (range: *) | via: hoek subject to prototype pollution via the clone function., Prototype Pollution in hoek

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"hoek","severity":"high","isDirect":false,"via":[{"source":1105092,"name":"hoek","dependency":"hoek","title":"hoek subject to prototype pollution via the clone function.","url":"https:\/\/github.com\/advisories\/GHSA-c429-5p7v-vgjp","severity":"high","cwe":["CWE-1321"],"cvss":{"score":8.1,"vectorString":"CVSS:3.1\/AV:N\/AC:H\/PR:N\/UI:N\/S:U\/C:H\/I:H\/A:H"},"range":"<=6.1.3"},{"source":1105121,"name":"hoek","dependency":"hoek","title":"Prototype Pollution in hoek","url":"https:\/\/github.com\/advisories\/GHSA-jp4x-w63m-7wgm","severity":"high","cwe":["CWE-1321"],"cvss":{"score":8.8,"vectorString":"CVSS:3.0\/AV:N\/AC:L\/PR:L\/UI:N\/S:U\/C:H\/I:H\/A:H"},"range":"<4.2.1"}],"effects":["boom","hawk","sntp"],"range":"*","nodes":["node_modules\/hoek","node_modules\/npm\/node_modules\/request\/node_modules\/hawk\/node_modules\/hoek","node_modules\/zaproxy\/node_modules\/hoek"],"fixAvailable":{"name":"grunt-retire","version":"0.1.0","isSemVerMajor":true}}
```
