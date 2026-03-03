# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "randomatic" (range: <3.0.0) | via: Cryptographically Weak PRNG in randomatic

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"randomatic","severity":"moderate","isDirect":false,"via":[{"source":1093550,"name":"randomatic","dependency":"randomatic","title":"Cryptographically Weak PRNG in randomatic","url":"https:\/\/github.com\/advisories\/GHSA-6g33-f262-xjp4","severity":"moderate","cwe":["CWE-330","CWE-338"],"cvss":{"score":5.3,"vectorString":"CVSS:3.0\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:L\/I:N\/A:N"},"range":"<3.0.0"}],"effects":["fill-range"],"range":"<3.0.0","nodes":["node_modules\/nyc\/node_modules\/randomatic"],"fixAvailable":true}
```
