# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "kind-of" (range: 6.0.0 - 6.0.2) | via: Validation Bypass in kind-of

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"kind-of","severity":"high","isDirect":false,"via":[{"source":1095056,"name":"kind-of","dependency":"kind-of","title":"Validation Bypass in kind-of","url":"https:\/\/github.com\/advisories\/GHSA-6c8f-qphg-qjgp","severity":"high","cwe":["CWE-668"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:H\/A:N"},"range":">=6.0.0 <6.0.3"}],"effects":[],"range":"6.0.0 - 6.0.2","nodes":["node_modules\/base\/node_modules\/kind-of","node_modules\/define-property\/node_modules\/kind-of","node_modules\/extglob\/node_modules\/kind-of","node_modules\/liftoff\/node_modules\/kind-of","node_modules\/make-iterator\/node_modules\/kind-of","node_modules\/micromatch\/node_modules\/kind-of","node_modules\/nanomatch\/node_modules\/kind-of","node_modules\/snapdragon-node\/node_modules\/kind-of"],"fixAvailable":true}
```
