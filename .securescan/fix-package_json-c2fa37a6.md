# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "hosted-git-info" (range: <2.8.9) | via: Regular Expression Denial of Service in hosted-git-info

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"hosted-git-info","severity":"moderate","isDirect":false,"via":[{"source":1089809,"name":"hosted-git-info","dependency":"hosted-git-info","title":"Regular Expression Denial of Service in hosted-git-info","url":"https:\/\/github.com\/advisories\/GHSA-43f8-2h32-f4cj","severity":"moderate","cwe":["CWE-400"],"cvss":{"score":5.3,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:L"},"range":"<2.8.9"}],"effects":["npm"],"range":"<2.8.9","nodes":["node_modules\/hosted-git-info","node_modules\/npm\/node_modules\/hosted-git-info","node_modules\/nyc\/node_modules\/hosted-git-info"],"fixAvailable":false}
```
