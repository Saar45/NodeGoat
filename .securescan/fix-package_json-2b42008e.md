# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "minimist" (range: <=0.2.3 || 1.0.0 - 1.2.5) | via: Prototype Pollution in minimist, Prototype Pollution in minimist, Prototype Pollution in minimist, Prototype Pollution in minimist

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"minimist","severity":"critical","isDirect":false,"via":[{"source":1096465,"name":"minimist","dependency":"minimist","title":"Prototype Pollution in minimist","url":"https:\/\/github.com\/advisories\/GHSA-vh95-rmgr-6w4m","severity":"moderate","cwe":["CWE-1321"],"cvss":{"score":5.6,"vectorString":"CVSS:3.1\/AV:N\/AC:H\/PR:N\/UI:N\/S:U\/C:L\/I:L\/A:L"},"range":">=1.0.0 <1.2.3"},{"source":1096466,"name":"minimist","dependency":"minimist","title":"Prototype Pollution in minimist","url":"https:\/\/github.com\/advisories\/GHSA-vh95-rmgr-6w4m","severity":"moderate","cwe":["CWE-1321"],"cvss":{"score":5.6,"vectorString":"CVSS:3.1\/AV:N\/AC:H\/PR:N\/UI:N\/S:U\/C:L\/I:L\/A:L"},"range":"<0.2.1"},{"source":1097677,"name":"minimist","dependency":"minimist","title":"Prototype Pollution in minimist","url":"https:\/\/github.com\/advisories\/GHSA-xvch-5gv4-984h","severity":"critical","cwe":["CWE-1321"],"cvss":{"score":9.8,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:H\/I:H\/A:H"},"range":"<0.2.4"},{"source":1097678,"name":"minimist","dependency":"minimist","title":"Prototype Pollution in minimist","url":"https:\/\/github.com\/advisories\/GHSA-xvch-5gv4-984h","severity":"critical","cwe":["CWE-1321"],"cvss":{"score":9.8,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:H\/I:H\/A:H"},"range":">=1.0.0 <1.2.6"}],"effects":["coveralls","cypress","mkdirp","optimist"],"range":"<=0.2.3 || 1.0.0 - 1.2.5","nodes":["node_modules\/coveralls\/node_modules\/minimist","node_modules\/cypress\/node_modules\/minimist","node_modules\/fsevents\/node_modules\/minimist","node_modules\/fsevents\/node_modules\/rc\/node_modules\/minimist","node_modules\/meow\/node_modules\/minimist","node_modules\/minimist","node_modules\/mkdirp\/node_modules\/minimist","node_modules\/npm\/node_modules\/mkdirp\/node_modules\/minimist","node_modules\/nyc\/node_modules\/detect-indent\/node_modules\/minimist","node_modules\/nyc\/node_modules\/minimist","node_modules\/prettyjson\/node_modules\/minimist","node_modules\/rc\/node_modules\/minimist"],"fixAvailable":{"name":"forever","version":"4.0.3","isSemVerMajor":true}}
```
