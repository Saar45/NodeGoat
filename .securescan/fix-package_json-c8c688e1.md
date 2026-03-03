# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "path-to-regexp" (range: <=0.1.11) | via: path-to-regexp outputs backtracking regular expressions, path-to-regexp contains a ReDoS

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"path-to-regexp","severity":"high","isDirect":false,"via":[{"source":1101850,"name":"path-to-regexp","dependency":"path-to-regexp","title":"path-to-regexp outputs backtracking regular expressions","url":"https:\/\/github.com\/advisories\/GHSA-9wv6-86v2-598j","severity":"high","cwe":["CWE-1333"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<0.1.10"},{"source":1105199,"name":"path-to-regexp","dependency":"path-to-regexp","title":"path-to-regexp contains a ReDoS","url":"https:\/\/github.com\/advisories\/GHSA-rhx6-c78j-4q9w","severity":"high","cwe":["CWE-1333"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<0.1.12"}],"effects":["express"],"range":"<=0.1.11","nodes":["node_modules\/path-to-regexp"],"fixAvailable":true}
```
