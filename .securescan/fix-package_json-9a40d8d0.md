# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "getobject" (range: 0.1.0) | via: Prototype pollution in getobject

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"getobject","severity":"critical","isDirect":false,"via":[{"source":1093420,"name":"getobject","dependency":"getobject","title":"Prototype pollution in getobject","url":"https:\/\/github.com\/advisories\/GHSA-957j-59c2-j692","severity":"critical","cwe":["CWE-1321"],"cvss":{"score":9.8,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:H\/I:H\/A:H"},"range":"<1.0.0"}],"effects":["grunt-legacy-util"],"range":"0.1.0","nodes":["node_modules\/getobject"],"fixAvailable":true}
```
