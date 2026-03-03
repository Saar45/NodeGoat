# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "is-my-json-valid" (range: 2.0.0 - 2.20.5) | via: Regular expression deinal of service (ReDoS) in is-my-json-valid, jsonpointer

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"is-my-json-valid","severity":"moderate","isDirect":false,"via":[{"source":1089938,"name":"is-my-json-valid","dependency":"is-my-json-valid","title":"Regular expression deinal of service (ReDoS) in is-my-json-valid","url":"https:\/\/github.com\/advisories\/GHSA-4hpf-3wq7-5rpr","severity":"moderate","cwe":["CWE-400"],"cvss":{"score":5.3,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:L"},"range":">=2.0.0 <2.17.2"},"jsonpointer"],"effects":[],"range":"2.0.0 - 2.20.5","nodes":["node_modules\/is-my-json-valid","node_modules\/npm\/node_modules\/request\/node_modules\/har-validator\/node_modules\/is-my-json-valid"],"fixAvailable":true}
```
