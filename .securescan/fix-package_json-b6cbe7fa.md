# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "babel-traverse" (range: *) | via: Babel vulnerable to arbitrary code execution when compiling specifically crafted malicious code

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"babel-traverse","severity":"critical","isDirect":false,"via":[{"source":1096879,"name":"babel-traverse","dependency":"babel-traverse","title":"Babel vulnerable to arbitrary code execution when compiling specifically crafted malicious code","url":"https:\/\/github.com\/advisories\/GHSA-67hx-6x53-jw92","severity":"critical","cwe":["CWE-184","CWE-697"],"cvss":{"score":9.4,"vectorString":"CVSS:3.1\/AV:L\/AC:L\/PR:N\/UI:N\/S:C\/C:H\/I:H\/A:H"},"range":"<7.23.2"}],"effects":["babel-template","babel-types","istanbul-lib-instrument"],"range":"*","nodes":["node_modules\/nyc\/node_modules\/babel-traverse"],"fixAvailable":true}
```
