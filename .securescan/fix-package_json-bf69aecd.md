# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "npm" (range: <=11.7.0) | via: Incorrect Permission Assignment for Critical Resource in NPM, npm CLI exposing sensitive information through logs, npm Vulnerable to Global node_modules Binary Overwrite, npm symlink reference outside of node_modules, Arbitrary File Write in npm, chownr, fstream, hosted-git-info, ini, mkdirp, node-gyp, npm-registry-client, npm-user-validate, request, semver, tar

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"npm","severity":"critical","isDirect":false,"via":[{"source":1088925,"name":"npm","dependency":"npm","title":"Incorrect Permission Assignment for Critical Resource in NPM","url":"https:\/\/github.com\/advisories\/GHSA-ph34-pc88-72gc","severity":"high","cwe":["CWE-732"],"cvss":{"score":7.8,"vectorString":"CVSS:3.0\/AV:L\/AC:L\/PR:L\/UI:N\/S:U\/C:H\/I:H\/A:H"},"range":"<5.7.1"},{"source":1089203,"name":"npm","dependency":"npm","title":"npm CLI exposing sensitive information through logs","url":"https:\/\/github.com\/advisories\/GHSA-93f3-23rq-pjfp","severity":"moderate","cwe":["CWE-532"],"cvss":{"score":4.4,"vectorString":"CVSS:3.1\/AV:L\/AC:H\/PR:L\/UI:R\/S:U\/C:H\/I:N\/A:N"},"range":"<6.14.6"},{"source":1089206,"name":"npm","dependency":"npm","title":"npm Vulnerable to Global node_modules Binary Overwrite","url":"https:\/\/github.com\/advisories\/GHSA-4328-8hgf-7wjr","severity":"high","cwe":["CWE-22","CWE-269"],"cvss":{"score":7.7,"vectorString":"CVSS:3.1\/AV:N\/AC:H\/PR:L\/UI:R\/S:C\/C:H\/I:H\/A:N"},"range":"<6.13.4"},{"source":1089207,"name":"npm","dependency":"npm","title":"npm symlink reference outside of node_modules","url":"https:\/\/github.com\/advisories\/GHSA-x8qc-rrcw-4r46","severity":"high","cwe":["CWE-22"],"cvss":{"score":7.7,"vectorString":"CVSS:3.1\/AV:N\/AC:H\/PR:L\/UI:R\/S:C\/C:H\/I:H\/A:N"},"range":"<6.13.3"},{"source":1090086,"name":"npm","dependency":"npm","title":"Arbitrary File Write in npm","url":"https:\/\/github.com\/advisories\/GHSA-m6cx-g6qm-p2cx","severity":"high","cwe":["CWE-59","CWE-61"],"cvss":{"score":7.7,"vectorString":"CVSS:3.1\/AV:N\/AC:H\/PR:L\/UI:R\/S:C\/C:H\/I:H\/A:N"},"range":"<6.13.3"},"chownr","fstream","hosted-git-info","ini","mkdirp","node-gyp","npm-registry-client","npm-user-validate","request","semver","tar"],"effects":["grunt-npm-install"],"range":"<=11.7.0","nodes":["node_modules\/npm"],"fixAvailable":false}
```
