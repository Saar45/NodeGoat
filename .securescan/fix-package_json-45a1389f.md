# SecureScan Remediation

**Severity:** LOW
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "send" (range: <0.19.0) | via: send vulnerable to template injection that can lead to XSS

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité LOW). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"send","severity":"low","isDirect":false,"via":[{"source":1109556,"name":"send","dependency":"send","title":"send vulnerable to template injection that can lead to XSS","url":"https:\/\/github.com\/advisories\/GHSA-m6fv-jmcg-4jfg","severity":"low","cwe":["CWE-79"],"cvss":{"score":5,"vectorString":"CVSS:3.1\/AV:N\/AC:H\/PR:N\/UI:R\/S:U\/C:L\/I:L\/A:L"},"range":"<0.19.0"}],"effects":["express","serve-static"],"range":"<0.19.0","nodes":["node_modules\/send"],"fixAvailable":true}
```
