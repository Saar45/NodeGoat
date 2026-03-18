# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "got" (range: <11.8.5) | via: Got allows a redirect to a UNIX socket

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"got","severity":"moderate","isDirect":false,"via":[{"source":1088948,"name":"got","dependency":"got","title":"Got allows a redirect to a UNIX socket","url":"https:\/\/github.com\/advisories\/GHSA-pfrx-2q88-qq97","severity":"moderate","cwe":[],"cvss":{"score":5.3,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:L\/A:N"},"range":"<11.8.5"}],"effects":["package-json"],"range":"<11.8.5","nodes":["node_modules\/got"],"fixAvailable":{"name":"nodemon","version":"3.1.14","isSemVerMajor":true}}
```
