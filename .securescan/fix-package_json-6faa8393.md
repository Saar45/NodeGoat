# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "underscore" (range: 1.3.2 - 1.12.0) | via: Arbitrary Code Execution in underscore

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"underscore","severity":"critical","isDirect":true,"via":[{"source":1109570,"name":"underscore","dependency":"underscore","title":"Arbitrary Code Execution in underscore","url":"https:\/\/github.com\/advisories\/GHSA-cf4h-3jhx-xvhq","severity":"critical","cwe":["CWE-94"],"cvss":{"score":9.8,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:H\/I:H\/A:H"},"range":">=1.3.2 <1.12.1"}],"effects":["retire"],"range":"1.3.2 - 1.12.0","nodes":["node_modules\/retire\/node_modules\/underscore","node_modules\/underscore"],"fixAvailable":{"name":"grunt-retire","version":"0.1.0","isSemVerMajor":true}}
```
