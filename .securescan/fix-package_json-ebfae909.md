# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "path-parse" (range: <1.0.7) | via: Regular Expression Denial of Service in path-parse

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"path-parse","severity":"moderate","isDirect":false,"via":[{"source":1089681,"name":"path-parse","dependency":"path-parse","title":"Regular Expression Denial of Service in path-parse","url":"https:\/\/github.com\/advisories\/GHSA-hj48-42vr-x3v9","severity":"moderate","cwe":["CWE-400"],"cvss":{"score":5.3,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:L"},"range":"<1.0.7"}],"effects":[],"range":"<1.0.7","nodes":["node_modules\/nyc\/node_modules\/path-parse"],"fixAvailable":true}
```
