# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "fstream" (range: <1.0.12) | via: Arbitrary File Overwrite in fstream

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"fstream","severity":"high","isDirect":false,"via":[{"source":1102334,"name":"fstream","dependency":"fstream","title":"Arbitrary File Overwrite in fstream","url":"https:\/\/github.com\/advisories\/GHSA-xf7w-r453-m56c","severity":"high","cwe":["CWE-59"],"cvss":{"score":7.5,"vectorString":"CVSS:3.0\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:H\/A:N"},"range":"<1.0.12"}],"effects":["npm"],"range":"<1.0.12","nodes":["node_modules\/npm\/node_modules\/fstream"],"fixAvailable":false}
```
