### NPM Vulnerabilities/Upgrades

The following packages were manually updated to solve the following reason:

1. "axios@^0.21.1"
- youtube-api-search@0.0.5 requires axios@^0.7.0
- Resolution: "axios": ">=0.21.1"

> CVE-2020-28168
Vulnerable versions: < 0.21.1
Patched version: 0.21.1
Axios NPM package 0.21.0 contains a Server-Side Request Forgery (SSRF) vulnerability where an attacker is able to bypass a proxy by providing a URL that responds with a redirect to a restricted host or IP address.


1. "is-svg@^3.0.0"
- react-scripts@4.0.3 requires is-svg@^3.0.0 via a transitive dependency on postcss-svgo@4.0.2
- Resolution: "is-svg": ">=4.2.2"

> CVE-2021-28092
Vulnerable versions: >= 2.1.0, < 4.2.2
Patched version: 4.2.2
The is-svg package 2.1.0 through 4.2.1 for Node.js uses a regular expression that is vulnerable to Regular Expression Denial of Service (ReDoS). If an attacker provides a malicious string, is-svg will get stuck processing the input for a very long time.
