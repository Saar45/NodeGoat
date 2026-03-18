# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "shelljs" (range: <=0.8.4) | via: Improper Privilege Management in shelljs, Improper Privilege Management in shelljs

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"shelljs","severity":"high","isDirect":false,"via":[{"source":1088208,"name":"shelljs","dependency":"shelljs","title":"Improper Privilege Management in shelljs","url":"https:\/\/github.com\/advisories\/GHSA-64g7-mvw6-v9qj","severity":"moderate","cwe":["CWE-269"],"cvss":{"score":0,"vectorString":null},"range":"<0.8.5"},{"source":1095126,"name":"shelljs","dependency":"shelljs","title":"Improper Privilege Management in shelljs","url":"https:\/\/github.com\/advisories\/GHSA-4rq4-32rv-6wp6","severity":"high","cwe":["CWE-269"],"cvss":{"score":7.1,"vectorString":"CVSS:3.0\/AV:L\/AC:L\/PR:L\/UI:N\/S:U\/C:H\/I:N\/A:H"},"range":"<0.8.5"}],"effects":["jshint"],"range":"<=0.8.4","nodes":["node_modules\/shelljs"],"fixAvailable":false}
```
