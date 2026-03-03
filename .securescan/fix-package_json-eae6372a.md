# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "express" (range: <=4.21.0 || 5.0.0-alpha.1 - 5.0.0) | via: express vulnerable to XSS via response.redirect(), Express.js Open Redirect in malformed URLs, body-parser, cookie, path-to-regexp, qs, send, serve-static

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"express","severity":"high","isDirect":true,"via":[{"source":1100530,"name":"express","dependency":"express","title":"express vulnerable to XSS via response.redirect()","url":"https:\/\/github.com\/advisories\/GHSA-qw6h-vgh9-j6wx","severity":"low","cwe":["CWE-79"],"cvss":{"score":5,"vectorString":"CVSS:3.1\/AV:N\/AC:H\/PR:N\/UI:R\/S:U\/C:L\/I:L\/A:L"},"range":"<4.20.0"},{"source":1111636,"name":"express","dependency":"express","title":"Express.js Open Redirect in malformed URLs","url":"https:\/\/github.com\/advisories\/GHSA-rv95-896h-c2vc","severity":"moderate","cwe":["CWE-601","CWE-1286"],"cvss":{"score":6.1,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:R\/S:C\/C:L\/I:L\/A:N"},"range":"<4.19.2"},"body-parser","cookie","path-to-regexp","qs","send","serve-static"],"effects":[],"range":"<=4.21.0 || 5.0.0-alpha.1 - 5.0.0","nodes":["node_modules\/express"],"fixAvailable":true}
```
