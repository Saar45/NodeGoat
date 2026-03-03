# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "mime" (range: <1.4.1) | via: mime Regular Expression Denial of Service when MIME lookup performed on untrusted user input

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"mime","severity":"high","isDirect":false,"via":[{"source":1093780,"name":"mime","dependency":"mime","title":"mime Regular Expression Denial of Service when MIME lookup performed on untrusted user input","url":"https:\/\/github.com\/advisories\/GHSA-wrvr-8mpx-r7pp","severity":"high","cwe":["CWE-400"],"cvss":{"score":7.5,"vectorString":"CVSS:3.0\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<1.4.1"}],"effects":["form-data","request"],"range":"<1.4.1","nodes":["node_modules\/zaproxy\/node_modules\/mime"],"fixAvailable":{"name":"grunt-retire","version":"0.1.0","isSemVerMajor":true}}
```
