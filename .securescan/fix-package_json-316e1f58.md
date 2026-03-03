# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "set-value" (range: <=2.0.0) | via: Prototype Pollution in set-value, Prototype Pollution in set-value

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"set-value","severity":"critical","isDirect":false,"via":[{"source":1094511,"name":"set-value","dependency":"set-value","title":"Prototype Pollution in set-value","url":"https:\/\/github.com\/advisories\/GHSA-4jqc-8m5r-9rpr","severity":"high","cwe":["CWE-843","CWE-1321"],"cvss":{"score":7.3,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:L\/I:L\/A:L"},"range":"<2.0.1"},{"source":1095129,"name":"set-value","dependency":"set-value","title":"Prototype Pollution in set-value","url":"https:\/\/github.com\/advisories\/GHSA-4g88-fppr-53pp","severity":"critical","cwe":["CWE-1321"],"cvss":{"score":9.8,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:H\/I:H\/A:H"},"range":"<2.0.1"}],"effects":["union-value"],"range":"<=2.0.0","nodes":["node_modules\/set-value","node_modules\/union-value\/node_modules\/set-value"],"fixAvailable":true}
```
