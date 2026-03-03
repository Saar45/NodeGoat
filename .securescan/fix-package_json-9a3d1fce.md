# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "moment" (range: <=2.29.3) | via: Path Traversal: 'dir/../../filename' in moment.locale, Moment.js vulnerable to Inefficient Regular Expression Complexity

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"moment","severity":"high","isDirect":false,"via":[{"source":1109571,"name":"moment","dependency":"moment","title":"Path Traversal: 'dir\/..\/..\/filename' in moment.locale","url":"https:\/\/github.com\/advisories\/GHSA-8hfj-j24r-96c4","severity":"high","cwe":["CWE-22","CWE-27"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:H\/A:N"},"range":"<2.29.2"},{"source":1109572,"name":"moment","dependency":"moment","title":"Moment.js vulnerable to Inefficient Regular Expression Complexity","url":"https:\/\/github.com\/advisories\/GHSA-wc69-rhjr-hc9g","severity":"high","cwe":["CWE-400","CWE-1333"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":">=2.18.0 <2.29.4"}],"effects":["cypress"],"range":"<=2.29.3","nodes":["node_modules\/moment"],"fixAvailable":{"name":"cypress","version":"15.11.0","isSemVerMajor":true}}
```
