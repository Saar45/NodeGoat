# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "ini" (range: <1.3.6) | via: ini before 1.3.6 vulnerable to Prototype Pollution via ini.parse

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"ini","severity":"high","isDirect":false,"via":[{"source":1093224,"name":"ini","dependency":"ini","title":"ini before 1.3.6 vulnerable to Prototype Pollution via ini.parse","url":"https:\/\/github.com\/advisories\/GHSA-qqgx-2p2h-9c37","severity":"high","cwe":["CWE-1321"],"cvss":{"score":7.3,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:L\/I:L\/A:L"},"range":"<1.3.6"}],"effects":["npm"],"range":"<1.3.6","nodes":["node_modules\/fsevents\/node_modules\/ini","node_modules\/ini","node_modules\/npm\/node_modules\/ini"],"fixAvailable":false}
```
