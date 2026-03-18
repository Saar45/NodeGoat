# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "micromatch" (range: <=4.0.7) | via: Regular Expression Denial of Service (ReDoS) in micromatch, braces

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"micromatch","severity":"high","isDirect":false,"via":[{"source":1098681,"name":"micromatch","dependency":"micromatch","title":"Regular Expression Denial of Service (ReDoS) in micromatch","url":"https:\/\/github.com\/advisories\/GHSA-952p-6rrq-rcjv","severity":"moderate","cwe":["CWE-1333"],"cvss":{"score":5.3,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:L"},"range":"<4.0.8"},"braces"],"effects":["anymatch","findup-sync","nyc","readdirp","test-exclude"],"range":"<=4.0.7","nodes":["node_modules\/liftoff\/node_modules\/micromatch","node_modules\/micromatch","node_modules\/nyc\/node_modules\/micromatch"],"fixAvailable":{"name":"nodemon","version":"3.1.14","isSemVerMajor":true}}
```
