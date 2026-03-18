# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "hawk" (range: <=9.0.0) | via: Regular Expression Denial of Service in hawk, Uncontrolled Resource Consumption in Hawk, boom, cryptiles, hoek, sntp

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"hawk","severity":"high","isDirect":false,"via":[{"source":1091678,"name":"hawk","dependency":"hawk","title":"Regular Expression Denial of Service in hawk","url":"https:\/\/github.com\/advisories\/GHSA-jcpv-g9rr-qxrc","severity":"high","cwe":["CWE-1333"],"cvss":{"score":7.5,"vectorString":"CVSS:3.0\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<3.1.3"},{"source":1095062,"name":"hawk","dependency":"hawk","title":"Uncontrolled Resource Consumption in Hawk","url":"https:\/\/github.com\/advisories\/GHSA-44pw-h2cw-w3vq","severity":"high","cwe":["CWE-400","CWE-1333"],"cvss":{"score":7.4,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:R\/S:C\/C:N\/I:N\/A:H"},"range":"<9.0.1"},"boom","cryptiles","hoek","sntp"],"effects":["request"],"range":"<=9.0.0","nodes":["node_modules\/hawk","node_modules\/npm\/node_modules\/request\/node_modules\/hawk","node_modules\/zaproxy\/node_modules\/hawk"],"fixAvailable":{"name":"cypress","version":"15.11.0","isSemVerMajor":true}}
```
