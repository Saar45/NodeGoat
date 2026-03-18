# SecureScan Remediation

**Severity:** LOW
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "serve-static" (range: <=1.16.0) | via: serve-static vulnerable to template injection that can lead to XSS, send

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité LOW). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"serve-static","severity":"low","isDirect":false,"via":[{"source":1100528,"name":"serve-static","dependency":"serve-static","title":"serve-static vulnerable to template injection that can lead to XSS","url":"https:\/\/github.com\/advisories\/GHSA-cm22-4g7w-348p","severity":"low","cwe":["CWE-79"],"cvss":{"score":5,"vectorString":"CVSS:3.1\/AV:N\/AC:H\/PR:N\/UI:R\/S:U\/C:L\/I:L\/A:L"},"range":"<1.16.0"},"send"],"effects":[],"range":"<=1.16.0","nodes":["node_modules\/serve-static"],"fixAvailable":true}
```
