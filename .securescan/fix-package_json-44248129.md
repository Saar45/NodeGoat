# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "js-yaml" (range: <=3.14.1) | via: Denial of Service in js-yaml, Code Injection in js-yaml, js-yaml has prototype pollution in merge (<<)

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"js-yaml","severity":"high","isDirect":false,"via":[{"source":1085724,"name":"js-yaml","dependency":"js-yaml","title":"Denial of Service in js-yaml","url":"https:\/\/github.com\/advisories\/GHSA-2pr6-76vf-7546","severity":"moderate","cwe":["CWE-400"],"cvss":{"score":5.9,"vectorString":"CVSS:3.1\/AV:N\/AC:H\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<3.13.0"},{"source":1095058,"name":"js-yaml","dependency":"js-yaml","title":"Code Injection in js-yaml","url":"https:\/\/github.com\/advisories\/GHSA-8j8c-7jfh-h6hx","severity":"high","cwe":["CWE-94"],"cvss":{"score":0,"vectorString":null},"range":"<3.13.1"},{"source":1112714,"name":"js-yaml","dependency":"js-yaml","title":"js-yaml has prototype pollution in merge (<<)","url":"https:\/\/github.com\/advisories\/GHSA-mh29-5h37-fv8m","severity":"moderate","cwe":["CWE-1321"],"cvss":{"score":5.3,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:L\/A:N"},"range":"<3.14.2"}],"effects":["coveralls","grunt"],"range":"<=3.14.1","nodes":["node_modules\/coveralls\/node_modules\/js-yaml","node_modules\/js-yaml"],"fixAvailable":true}
```
