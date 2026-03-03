# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "semver" (range: 2.0.0-alpha - 5.7.1) | via: semver vulnerable to Regular Expression Denial of Service

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"semver","severity":"high","isDirect":false,"via":[{"source":1112918,"name":"semver","dependency":"semver","title":"semver vulnerable to Regular Expression Denial of Service","url":"https:\/\/github.com\/advisories\/GHSA-c2qf-rxjj-qqgw","severity":"high","cwe":["CWE-1333"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":">=2.0.0-alpha <5.7.2"}],"effects":["npm"],"range":"2.0.0-alpha - 5.7.1","nodes":["node_modules\/fsevents\/node_modules\/semver","node_modules\/npm\/node_modules\/semver","node_modules\/nyc\/node_modules\/semver","node_modules\/semver"],"fixAvailable":false}
```
