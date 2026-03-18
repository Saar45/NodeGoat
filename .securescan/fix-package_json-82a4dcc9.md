# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "npm-user-validate" (range: <=1.0.0) | via: Regular Expression Denial of Service in npm-user-validate, Regular expression denial of service in npm-user-validate

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"npm-user-validate","severity":"high","isDirect":false,"via":[{"source":1086466,"name":"npm-user-validate","dependency":"npm-user-validate","title":"Regular Expression Denial of Service in npm-user-validate","url":"https:\/\/github.com\/advisories\/GHSA-xgh6-85xh-479p","severity":"low","cwe":[],"cvss":{"score":0,"vectorString":null},"range":"<=1.0.0"},{"source":1089876,"name":"npm-user-validate","dependency":"npm-user-validate","title":"Regular expression denial of service in npm-user-validate","url":"https:\/\/github.com\/advisories\/GHSA-pw54-mh39-w3hc","severity":"high","cwe":["CWE-400"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<1.0.1"}],"effects":["npm"],"range":"<=1.0.0","nodes":["node_modules\/npm\/node_modules\/npm-user-validate"],"fixAvailable":false}
```
