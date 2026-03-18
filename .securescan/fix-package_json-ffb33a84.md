# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "xml2js" (range: <0.5.0) | via: xml2js is vulnerable to prototype pollution

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"xml2js","severity":"moderate","isDirect":false,"via":[{"source":1096693,"name":"xml2js","dependency":"xml2js","title":"xml2js is vulnerable to prototype pollution","url":"https:\/\/github.com\/advisories\/GHSA-776f-qx25-q3cc","severity":"moderate","cwe":["CWE-1321"],"cvss":{"score":5.3,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:L\/A:N"},"range":"<0.5.0"}],"effects":[],"range":"<0.5.0","nodes":["node_modules\/xml2js"],"fixAvailable":true}
```
