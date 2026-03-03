# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "marked" (range: <=4.0.9) | via: Marked vulnerable to XSS from data URIs, Sanitization bypass using HTML Entities in marked, Regular Expression Denial of Service in marked, Inefficient Regular Expression Complexity in marked, Inefficient Regular Expression Complexity in marked, Marked allows Regular Expression Denial of Service (ReDoS) attacks

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"marked","severity":"high","isDirect":true,"via":[{"source":1093507,"name":"marked","dependency":"marked","title":"Marked vulnerable to XSS from data URIs","url":"https:\/\/github.com\/advisories\/GHSA-7px7-7xjx-hxm8","severity":"moderate","cwe":["CWE-79"],"cvss":{"score":6.1,"vectorString":"CVSS:3.0\/AV:N\/AC:L\/PR:N\/UI:R\/S:C\/C:L\/I:L\/A:N"},"range":"<0.3.7"},{"source":1093520,"name":"marked","dependency":"marked","title":"Sanitization bypass using HTML Entities in marked","url":"https:\/\/github.com\/advisories\/GHSA-vfvf-mqq8-rwqc","severity":"moderate","cwe":["CWE-79"],"cvss":{"score":6.1,"vectorString":"CVSS:3.0\/AV:N\/AC:L\/PR:N\/UI:R\/S:C\/C:L\/I:L\/A:N"},"range":"<0.3.6"},{"source":1093522,"name":"marked","dependency":"marked","title":"Regular Expression Denial of Service in marked","url":"https:\/\/github.com\/advisories\/GHSA-x5pg-88wf-qq4p","severity":"high","cwe":["CWE-400"],"cvss":{"score":7.5,"vectorString":"CVSS:3.0\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<0.3.9"},{"source":1095051,"name":"marked","dependency":"marked","title":"Inefficient Regular Expression Complexity in marked","url":"https:\/\/github.com\/advisories\/GHSA-rrrm-qjm4-v8hf","severity":"high","cwe":["CWE-400","CWE-1333"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<4.0.10"},{"source":1095052,"name":"marked","dependency":"marked","title":"Inefficient Regular Expression Complexity in marked","url":"https:\/\/github.com\/advisories\/GHSA-5v2h-r2cx-5xgj","severity":"high","cwe":["CWE-1333"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<4.0.10"},{"source":1105067,"name":"marked","dependency":"marked","title":"Marked allows Regular Expression Denial of Service (ReDoS) attacks","url":"https:\/\/github.com\/advisories\/GHSA-p9wx-2529-fp83","severity":"moderate","cwe":["CWE-1333"],"cvss":{"score":0,"vectorString":null},"range":"<0.3.17"}],"effects":[],"range":"<=4.0.9","nodes":["node_modules\/marked"],"fixAvailable":{"name":"marked","version":"0.3.19","isSemVerMajor":false}}
```
