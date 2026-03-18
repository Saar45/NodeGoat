# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "qs" (range: <=6.14.0) | via: Prototype Pollution Protection Bypass in qs, Prototype Pollution Protection Bypass in qs, Denial-of-Service Extended Event Loop Blocking in qs, Denial-of-Service Memory Exhaustion in qs, qs vulnerable to Prototype Pollution, qs vulnerable to Prototype Pollution, qs vulnerable to Prototype Pollution, qs's arrayLimit bypass in its bracket notation allows DoS via memory exhaustion

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"qs","severity":"high","isDirect":false,"via":[{"source":1087525,"name":"qs","dependency":"qs","title":"Prototype Pollution Protection Bypass in qs","url":"https:\/\/github.com\/advisories\/GHSA-gqgv-6jq5-jjj9","severity":"high","cwe":["CWE-20"],"cvss":{"score":7.5,"vectorString":"CVSS:3.0\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":">=6.2.0 <6.2.3"},{"source":1087527,"name":"qs","dependency":"qs","title":"Prototype Pollution Protection Bypass in qs","url":"https:\/\/github.com\/advisories\/GHSA-gqgv-6jq5-jjj9","severity":"high","cwe":["CWE-20"],"cvss":{"score":7.5,"vectorString":"CVSS:3.0\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<6.0.4"},{"source":1090967,"name":"qs","dependency":"qs","title":"Denial-of-Service Extended Event Loop Blocking in qs","url":"https:\/\/github.com\/advisories\/GHSA-f9cm-p3w6-xvr3","severity":"high","cwe":["CWE-400"],"cvss":{"score":0,"vectorString":null},"range":"<1.0.0"},{"source":1091683,"name":"qs","dependency":"qs","title":"Denial-of-Service Memory Exhaustion in qs","url":"https:\/\/github.com\/advisories\/GHSA-jjv7-qpx3-h62q","severity":"high","cwe":["CWE-400"],"cvss":{"score":0,"vectorString":null},"range":"<1.0.0"},{"source":1104115,"name":"qs","dependency":"qs","title":"qs vulnerable to Prototype Pollution","url":"https:\/\/github.com\/advisories\/GHSA-hrpp-h998-j3pp","severity":"high","cwe":["CWE-1321"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<6.2.4"},{"source":1104116,"name":"qs","dependency":"qs","title":"qs vulnerable to Prototype Pollution","url":"https:\/\/github.com\/advisories\/GHSA-hrpp-h998-j3pp","severity":"high","cwe":["CWE-1321"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":">=6.3.0 <6.3.3"},{"source":1104118,"name":"qs","dependency":"qs","title":"qs vulnerable to Prototype Pollution","url":"https:\/\/github.com\/advisories\/GHSA-hrpp-h998-j3pp","severity":"high","cwe":["CWE-1321"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":">=6.5.0 <6.5.3"},{"source":1113719,"name":"qs","dependency":"qs","title":"qs's arrayLimit bypass in its bracket notation allows DoS via memory exhaustion","url":"https:\/\/github.com\/advisories\/GHSA-6rw7-vpxm-498p","severity":"moderate","cwe":["CWE-20"],"cvss":{"score":3.7,"vectorString":"CVSS:3.1\/AV:N\/AC:H\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:L"},"range":"<6.14.1"}],"effects":["body-parser","express","request"],"range":"<=6.14.0","nodes":["node_modules\/grunt-retire\/node_modules\/qs","node_modules\/npm\/node_modules\/request\/node_modules\/qs","node_modules\/qs","node_modules\/request\/node_modules\/qs","node_modules\/zaproxy\/node_modules\/qs"],"fixAvailable":{"name":"grunt-retire","version":"0.1.0","isSemVerMajor":true}}
```
