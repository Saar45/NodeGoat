# SecureScan Remediation

**Severity:** LOW
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "on-headers" (range: <1.1.0) | via: on-headers is vulnerable to http response header manipulation

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité LOW). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"on-headers","severity":"low","isDirect":false,"via":[{"source":1106812,"name":"on-headers","dependency":"on-headers","title":"on-headers is vulnerable to http response header manipulation","url":"https:\/\/github.com\/advisories\/GHSA-76c9-3jph-rj3q","severity":"low","cwe":["CWE-241"],"cvss":{"score":3.4,"vectorString":"CVSS:3.1\/AV:L\/AC:L\/PR:H\/UI:N\/S:U\/C:L\/I:L\/A:N"},"range":"<1.1.0"}],"effects":["express-session"],"range":"<1.1.0","nodes":["node_modules\/on-headers"],"fixAvailable":true}
```
