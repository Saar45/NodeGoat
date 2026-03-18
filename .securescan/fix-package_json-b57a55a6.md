# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "minimatch" (range: <=3.1.3) | via: Regular Expression Denial of Service in minimatch, minimatch ReDoS vulnerability, minimatch has a ReDoS via repeated wildcards with non-matching literal in pattern, minimatch has ReDoS: matchOne() combinatorial backtracking via multiple non-adjacent GLOBSTAR segments, minimatch ReDoS: nested *() extglobs generate catastrophically backtracking regular expressions

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"minimatch","severity":"high","isDirect":false,"via":[{"source":1093710,"name":"minimatch","dependency":"minimatch","title":"Regular Expression Denial of Service in minimatch","url":"https:\/\/github.com\/advisories\/GHSA-hxm2-r34f-qmc5","severity":"high","cwe":["CWE-400"],"cvss":{"score":7.5,"vectorString":"CVSS:3.0\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<3.0.2"},{"source":1096485,"name":"minimatch","dependency":"minimatch","title":"minimatch ReDoS vulnerability","url":"https:\/\/github.com\/advisories\/GHSA-f8q6-p94x-37v3","severity":"high","cwe":["CWE-400","CWE-1333"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<3.0.5"},{"source":1113459,"name":"minimatch","dependency":"minimatch","title":"minimatch has a ReDoS via repeated wildcards with non-matching literal in pattern","url":"https:\/\/github.com\/advisories\/GHSA-3ppc-4f35-3m26","severity":"high","cwe":["CWE-1333"],"cvss":{"score":0,"vectorString":null},"range":"<3.1.3"},{"source":1113538,"name":"minimatch","dependency":"minimatch","title":"minimatch has ReDoS: matchOne() combinatorial backtracking via multiple non-adjacent GLOBSTAR segments","url":"https:\/\/github.com\/advisories\/GHSA-7r86-cg39-jmmj","severity":"high","cwe":["CWE-407"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<3.1.3"},{"source":1113546,"name":"minimatch","dependency":"minimatch","title":"minimatch ReDoS: nested *() extglobs generate catastrophically backtracking regular expressions","url":"https:\/\/github.com\/advisories\/GHSA-23c5-xmqv-rm74","severity":"high","cwe":["CWE-1333"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<3.1.4"}],"effects":["glob","globule","grunt","jshint"],"range":"<=3.1.3","nodes":["node_modules\/fsevents\/node_modules\/minimatch","node_modules\/minimatch","node_modules\/mocha\/node_modules\/minimatch","node_modules\/npm\/node_modules\/fstream-npm\/node_modules\/fstream-ignore\/node_modules\/minimatch","node_modules\/npm\/node_modules\/glob\/node_modules\/minimatch","node_modules\/npm\/node_modules\/init-package-json\/node_modules\/glob\/node_modules\/minimatch","node_modules\/npm\/node_modules\/node-gyp\/node_modules\/minimatch","node_modules\/npm\/node_modules\/read-package-json\/node_modules\/glob\/node_modules\/minimatch","node_modules\/nyc\/node_modules\/minimatch"],"fixAvailable":{"name":"grunt-contrib-watch","version":"0.4.4","isSemVerMajor":true}}
```
