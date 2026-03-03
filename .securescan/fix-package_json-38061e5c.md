# SecureScan Remediation

**Severity:** LOW
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "chownr" (range: <1.1.0) | via: Time-of-check Time-of-use (TOCTOU) Race Condition in chownr

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité LOW). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"chownr","severity":"low","isDirect":false,"via":[{"source":1091617,"name":"chownr","dependency":"chownr","title":"Time-of-check Time-of-use (TOCTOU) Race Condition in chownr","url":"https:\/\/github.com\/advisories\/GHSA-c6rq-rjc2-86v2","severity":"low","cwe":["CWE-367"],"cvss":{"score":2.5,"vectorString":"CVSS:3.1\/AV:L\/AC:H\/PR:L\/UI:N\/S:U\/C:N\/I:L\/A:N"},"range":"<1.1.0"}],"effects":["npm"],"range":"<1.1.0","nodes":["node_modules\/npm\/node_modules\/chownr"],"fixAvailable":false}
```
