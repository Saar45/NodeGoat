# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "sshpk" (range: <1.13.2) | via: Regular Expression Denial of Service in sshpk

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"sshpk","severity":"high","isDirect":false,"via":[{"source":1089418,"name":"sshpk","dependency":"sshpk","title":"Regular Expression Denial of Service in sshpk","url":"https:\/\/github.com\/advisories\/GHSA-2m39-62fm-q8r3","severity":"high","cwe":["CWE-185","CWE-770"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<1.13.2"}],"effects":[],"range":"<1.13.2","nodes":["node_modules\/npm\/node_modules\/request\/node_modules\/http-signature\/node_modules\/sshpk"],"fixAvailable":true}
```
