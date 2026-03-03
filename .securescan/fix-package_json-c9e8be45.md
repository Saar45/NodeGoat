# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "brace-expansion" (range: <=1.1.11) | via: ReDoS in brace-expansion, brace-expansion Regular Expression Denial of Service vulnerability

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"brace-expansion","severity":"high","isDirect":false,"via":[{"source":1091680,"name":"brace-expansion","dependency":"brace-expansion","title":"ReDoS in brace-expansion","url":"https:\/\/github.com\/advisories\/GHSA-832h-xg76-4gv6","severity":"high","cwe":["CWE-1333"],"cvss":{"score":7.5,"vectorString":"CVSS:3.0\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<1.1.7"},{"source":1105443,"name":"brace-expansion","dependency":"brace-expansion","title":"brace-expansion Regular Expression Denial of Service vulnerability","url":"https:\/\/github.com\/advisories\/GHSA-v6h2-p8h4-qcjw","severity":"low","cwe":["CWE-400"],"cvss":{"score":3.1,"vectorString":"CVSS:3.1\/AV:N\/AC:H\/PR:L\/UI:N\/S:U\/C:N\/I:N\/A:L"},"range":">=1.0.0 <=1.1.11"}],"effects":[],"range":"<=1.1.11","nodes":["node_modules\/brace-expansion","node_modules\/fsevents\/node_modules\/brace-expansion","node_modules\/npm\/node_modules\/fstream-npm\/node_modules\/fstream-ignore\/node_modules\/minimatch\/node_modules\/brace-expansion","node_modules\/npm\/node_modules\/glob\/node_modules\/minimatch\/node_modules\/brace-expansion","node_modules\/npm\/node_modules\/init-package-json\/node_modules\/glob\/node_modules\/minimatch\/node_modules\/brace-expansion","node_modules\/npm\/node_modules\/node-gyp\/node_modules\/minimatch\/node_modules\/brace-expansion","node_modules\/npm\/node_modules\/read-package-json\/node_modules\/glob\/node_modules\/minimatch\/node_modules\/brace-expansion","node_modules\/nyc\/node_modules\/brace-expansion"],"fixAvailable":true}
```
