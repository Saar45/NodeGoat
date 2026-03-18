# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "dot-prop" (range: <4.2.1) | via: dot-prop Prototype Pollution vulnerability

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"dot-prop","severity":"high","isDirect":false,"via":[{"source":1102328,"name":"dot-prop","dependency":"dot-prop","title":"dot-prop Prototype Pollution vulnerability","url":"https:\/\/github.com\/advisories\/GHSA-ff7x-qrg7-qggm","severity":"high","cwe":["CWE-425","CWE-471","CWE-1321"],"cvss":{"score":7.3,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:L\/I:L\/A:L"},"range":"<4.2.1"}],"effects":[],"range":"<4.2.1","nodes":["node_modules\/dot-prop"],"fixAvailable":true}
```
