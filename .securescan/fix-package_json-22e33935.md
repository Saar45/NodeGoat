# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "diff" (range: <=3.5.0) | via: Regular Expression Denial of Service (ReDoS), jsdiff has a Denial of Service vulnerability in parsePatch and applyPatch

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"diff","severity":"high","isDirect":false,"via":[{"source":1102333,"name":"diff","dependency":"diff","title":"Regular Expression Denial of Service (ReDoS)","url":"https:\/\/github.com\/advisories\/GHSA-h6ch-v84p-w6p9","severity":"high","cwe":["CWE-400"],"cvss":{"score":0,"vectorString":null},"range":"<3.5.0"},{"source":1112703,"name":"diff","dependency":"diff","title":"jsdiff has a Denial of Service vulnerability in parsePatch and applyPatch","url":"https:\/\/github.com\/advisories\/GHSA-73rr-hh4g-fpgx","severity":"low","cwe":["CWE-400","CWE-1333"],"cvss":{"score":0,"vectorString":null},"range":"<3.5.1"}],"effects":["mocha","tap-mocha-reporter"],"range":"<=3.5.0","nodes":["node_modules\/diff"],"fixAvailable":{"name":"mocha","version":"11.7.5","isSemVerMajor":true}}
```
