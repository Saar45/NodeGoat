# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "fsevents" (range: <=1.2.12) | via: Malware in fsevents, Code injection in fsevents, node-pre-gyp

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"fsevents","severity":"critical","isDirect":false,"via":[{"source":1091853,"name":"fsevents","dependency":"fsevents","title":"Malware in fsevents","url":"https:\/\/github.com\/advisories\/GHSA-xv2f-5jw4-v95m","severity":"critical","cwe":["CWE-506"],"cvss":{"score":0,"vectorString":null},"range":">=1.0.0 <1.2.11"},{"source":1094997,"name":"fsevents","dependency":"fsevents","title":"Code injection in fsevents","url":"https:\/\/github.com\/advisories\/GHSA-8r6j-v8pm-fqw3","severity":"critical","cwe":["CWE-94"],"cvss":{"score":9.8,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:H\/I:H\/A:H"},"range":"<=1.2.10"},"node-pre-gyp"],"effects":[],"range":"<=1.2.12","nodes":["node_modules\/fsevents"],"fixAvailable":true}
```
