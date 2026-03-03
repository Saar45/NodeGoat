# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "growl" (range: <1.10.0) | via: Growl before 1.10.0 vulnerable to Command Injection

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"growl","severity":"critical","isDirect":false,"via":[{"source":1088328,"name":"growl","dependency":"growl","title":"Growl before 1.10.0 vulnerable to Command Injection","url":"https:\/\/github.com\/advisories\/GHSA-qh2h-chj9-jffq","severity":"critical","cwe":["CWE-78","CWE-94"],"cvss":{"score":9.8,"vectorString":"CVSS:3.0\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:H\/I:H\/A:H"},"range":"<1.10.0"}],"effects":["mocha"],"range":"<1.10.0","nodes":["node_modules\/growl"],"fixAvailable":{"name":"mocha","version":"11.7.5","isSemVerMajor":true}}
```
