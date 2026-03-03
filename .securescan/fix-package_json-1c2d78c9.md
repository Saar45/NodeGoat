# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "swig" (range: *) | via: Arbitrary local file read vulnerability during template rendering , optimist, uglify-js

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"swig","severity":"critical","isDirect":true,"via":[{"source":1091414,"name":"swig","dependency":"swig","title":"Arbitrary local file read vulnerability during template rendering ","url":"https:\/\/github.com\/advisories\/GHSA-2rq5-699j-x7p6","severity":"high","cwe":["CWE-22"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:H\/I:N\/A:N"},"range":"<=1.4.2"},"optimist","uglify-js"],"effects":[],"range":"*","nodes":["node_modules\/swig"],"fixAvailable":false}
```
