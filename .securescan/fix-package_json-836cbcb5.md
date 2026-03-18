# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "tough-cookie" (range: <=4.1.2) | via: ReDoS via long string of semicolons in tough-cookie, Regular Expression Denial of Service in tough-cookie, tough-cookie Prototype Pollution vulnerability

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"tough-cookie","severity":"high","isDirect":false,"via":[{"source":1091675,"name":"tough-cookie","dependency":"tough-cookie","title":"ReDoS via long string of semicolons in tough-cookie","url":"https:\/\/github.com\/advisories\/GHSA-qhv9-728r-6jqg","severity":"moderate","cwe":["CWE-1333"],"cvss":{"score":5.3,"vectorString":"CVSS:3.0\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:L"},"range":"<2.3.0"},{"source":1095103,"name":"tough-cookie","dependency":"tough-cookie","title":"Regular Expression Denial of Service in tough-cookie","url":"https:\/\/github.com\/advisories\/GHSA-g7q5-pjjr-gqvp","severity":"high","cwe":["CWE-400"],"cvss":{"score":7.5,"vectorString":"CVSS:3.0\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<2.3.3"},{"source":1097682,"name":"tough-cookie","dependency":"tough-cookie","title":"tough-cookie Prototype Pollution vulnerability","url":"https:\/\/github.com\/advisories\/GHSA-72xf-g2v4-qvf3","severity":"moderate","cwe":["CWE-1321"],"cvss":{"score":6.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:L\/I:L\/A:N"},"range":"<4.1.3"}],"effects":["request"],"range":"<=4.1.2","nodes":["node_modules\/cypress\/node_modules\/tough-cookie","node_modules\/grunt-retire\/node_modules\/tough-cookie","node_modules\/npm\/node_modules\/request\/node_modules\/tough-cookie","node_modules\/tough-cookie"],"fixAvailable":{"name":"grunt-retire","version":"0.1.0","isSemVerMajor":true}}
```
