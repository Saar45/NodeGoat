# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "bl" (range: <1.2.3) | via: Remote Memory Exposure in bl

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"bl","severity":"moderate","isDirect":false,"via":[{"source":1090072,"name":"bl","dependency":"bl","title":"Remote Memory Exposure in bl","url":"https:\/\/github.com\/advisories\/GHSA-pp7h-53gx-mx7r","severity":"moderate","cwe":["CWE-125","CWE-126"],"cvss":{"score":6.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:L\/I:N\/A:L"},"range":"<1.2.3"}],"effects":["request"],"range":"<1.2.3","nodes":["node_modules\/bl","node_modules\/npm\/node_modules\/request\/node_modules\/bl"],"fixAvailable":{"name":"cypress","version":"15.11.0","isSemVerMajor":true}}
```
