# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "bson" (range: <=1.1.3) | via: Deserialization of Untrusted Data in bson, Deserialization of Untrusted Data in bson

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"bson","severity":"critical","isDirect":false,"via":[{"source":1092294,"name":"bson","dependency":"bson","title":"Deserialization of Untrusted Data in bson","url":"https:\/\/github.com\/advisories\/GHSA-4jwp-vfvf-657p","severity":"moderate","cwe":["CWE-502"],"cvss":{"score":5.4,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:L\/UI:N\/S:U\/C:L\/I:L\/A:N"},"range":"<1.1.4"},{"source":1102316,"name":"bson","dependency":"bson","title":"Deserialization of Untrusted Data in bson","url":"https:\/\/github.com\/advisories\/GHSA-v8w9-2789-6hhr","severity":"critical","cwe":["CWE-502"],"cvss":{"score":9.8,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:H\/I:H\/A:H"},"range":"<1.1.4"}],"effects":["mongodb-core"],"range":"<=1.1.3","nodes":["node_modules\/bson"],"fixAvailable":{"name":"mongodb","version":"7.1.0","isSemVerMajor":true}}
```
