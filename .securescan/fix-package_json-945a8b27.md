# SecureScan Remediation

**Severity:** LOW
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "cookie" (range: <0.7.0) | via: cookie accepts cookie name, path, and domain with out of bounds characters

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité LOW). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"cookie","severity":"low","isDirect":false,"via":[{"source":1103907,"name":"cookie","dependency":"cookie","title":"cookie accepts cookie name, path, and domain with out of bounds characters","url":"https:\/\/github.com\/advisories\/GHSA-pxg6-pf52-xh8x","severity":"low","cwe":["CWE-74"],"cvss":{"score":0,"vectorString":null},"range":"<0.7.0"}],"effects":["csurf","express","express-session"],"range":"<0.7.0","nodes":["node_modules\/cookie"],"fixAvailable":{"name":"csurf","version":"1.2.2","isSemVerMajor":true}}
```
