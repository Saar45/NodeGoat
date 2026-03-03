# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "lodash" (range: <=4.17.21) | via: Prototype Pollution in lodash, Command Injection in lodash, Prototype Pollution in lodash, Prototype Pollution in lodash, Prototype Pollution in lodash, Regular Expression Denial of Service (ReDoS) in lodash, Regular Expression Denial of Service (ReDoS) in lodash, Lodash has Prototype Pollution Vulnerability in `_.unset` and `_.omit` functions

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"lodash","severity":"critical","isDirect":false,"via":[{"source":1106900,"name":"lodash","dependency":"lodash","title":"Prototype Pollution in lodash","url":"https:\/\/github.com\/advisories\/GHSA-fvqr-27wr-82fm","severity":"moderate","cwe":["CWE-471","CWE-1321"],"cvss":{"score":6.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:L\/UI:N\/S:U\/C:N\/I:H\/A:N"},"range":"<4.17.5"},{"source":1106913,"name":"lodash","dependency":"lodash","title":"Command Injection in lodash","url":"https:\/\/github.com\/advisories\/GHSA-35jh-r3h4-6jhm","severity":"high","cwe":["CWE-77","CWE-94"],"cvss":{"score":7.2,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:H\/UI:N\/S:U\/C:H\/I:H\/A:H"},"range":"<4.17.21"},{"source":1106914,"name":"lodash","dependency":"lodash","title":"Prototype Pollution in lodash","url":"https:\/\/github.com\/advisories\/GHSA-4xc9-xhrj-v574","severity":"high","cwe":["CWE-400"],"cvss":{"score":0,"vectorString":null},"range":"<4.17.11"},{"source":1106918,"name":"lodash","dependency":"lodash","title":"Prototype Pollution in lodash","url":"https:\/\/github.com\/advisories\/GHSA-jf85-cpcp-j695","severity":"critical","cwe":["CWE-20","CWE-1321"],"cvss":{"score":9.1,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:H\/A:H"},"range":"<4.17.12"},{"source":1106920,"name":"lodash","dependency":"lodash","title":"Prototype Pollution in lodash","url":"https:\/\/github.com\/advisories\/GHSA-p6mc-m468-83gw","severity":"high","cwe":["CWE-770","CWE-1321"],"cvss":{"score":7.4,"vectorString":"CVSS:3.1\/AV:N\/AC:H\/PR:N\/UI:N\/S:U\/C:N\/I:H\/A:H"},"range":">=3.7.0 <4.17.19"},{"source":1108258,"name":"lodash","dependency":"lodash","title":"Regular Expression Denial of Service (ReDoS) in lodash","url":"https:\/\/github.com\/advisories\/GHSA-29mw-wpgm-hmr9","severity":"moderate","cwe":["CWE-400","CWE-1333"],"cvss":{"score":5.3,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:L"},"range":">=4.0.0 <4.17.21"},{"source":1108261,"name":"lodash","dependency":"lodash","title":"Regular Expression Denial of Service (ReDoS) in lodash","url":"https:\/\/github.com\/advisories\/GHSA-x5rq-j2xg-h7qm","severity":"moderate","cwe":["CWE-400"],"cvss":{"score":6.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:L\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":">=4.7.0 <4.17.11"},{"source":1112455,"name":"lodash","dependency":"lodash","title":"Lodash has Prototype Pollution Vulnerability in `_.unset` and `_.omit` functions","url":"https:\/\/github.com\/advisories\/GHSA-xxjr-mmjv-4gpg","severity":"moderate","cwe":["CWE-1321"],"cvss":{"score":6.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:L\/A:L"},"range":">=4.0.0 <=4.17.22"}],"effects":["cypress","zaproxy"],"range":"<=4.17.21","nodes":["node_modules\/grunt-contrib-jshint\/node_modules\/lodash","node_modules\/grunt-env\/node_modules\/lodash","node_modules\/jshint\/node_modules\/lodash","node_modules\/lodash","node_modules\/nyc\/node_modules\/lodash","node_modules\/zaproxy\/node_modules\/lodash"],"fixAvailable":{"name":"zaproxy","version":"2.0.0-rc.7","isSemVerMajor":true}}
```
