# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "grunt" (range: *) | via: Arbitrary Code Execution in grunt, Race Condition in Grunt, Path Traversal in Grunt, grunt-legacy-util, js-yaml, minimatch

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"grunt","severity":"critical","isDirect":true,"via":[{"source":1089836,"name":"grunt","dependency":"grunt","title":"Arbitrary Code Execution in grunt","url":"https:\/\/github.com\/advisories\/GHSA-m5pj-vjjf-4m3h","severity":"high","cwe":["CWE-1188"],"cvss":{"score":7.1,"vectorString":"CVSS:3.1\/AV:N\/AC:H\/PR:L\/UI:R\/S:U\/C:H\/I:H\/A:H"},"range":"<1.3.0"},{"source":1091643,"name":"grunt","dependency":"grunt","title":"Race Condition in Grunt","url":"https:\/\/github.com\/advisories\/GHSA-rm36-94g8-835r","severity":"high","cwe":["CWE-367"],"cvss":{"score":7,"vectorString":"CVSS:3.1\/AV:L\/AC:H\/PR:L\/UI:N\/S:U\/C:H\/I:H\/A:H"},"range":"<1.5.3"},{"source":1091644,"name":"grunt","dependency":"grunt","title":"Path Traversal in Grunt","url":"https:\/\/github.com\/advisories\/GHSA-j383-35pm-c5h4","severity":"moderate","cwe":["CWE-22"],"cvss":{"score":5.5,"vectorString":"CVSS:3.1\/AV:L\/AC:L\/PR:L\/UI:N\/S:U\/C:H\/I:N\/A:N"},"range":"<1.5.2"},"grunt-legacy-util","js-yaml","minimatch"],"effects":[],"range":"*","nodes":["node_modules\/grunt"],"fixAvailable":true}
```
