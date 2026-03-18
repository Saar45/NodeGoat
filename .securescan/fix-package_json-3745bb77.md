# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "decode-uri-component" (range: <0.2.1) | via: decode-uri-component vulnerable to Denial of Service (DoS)

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"decode-uri-component","severity":"high","isDirect":false,"via":[{"source":1094087,"name":"decode-uri-component","dependency":"decode-uri-component","title":"decode-uri-component vulnerable to Denial of Service (DoS)","url":"https:\/\/github.com\/advisories\/GHSA-w573-4hg7-7wgq","severity":"high","cwe":["CWE-20"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<0.2.1"}],"effects":[],"range":"<0.2.1","nodes":["node_modules\/decode-uri-component"],"fixAvailable":true}
```
