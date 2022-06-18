### NPM Vulnerabilities/Upgrades

The following packages were manually updated to solve the following reason:

1. "axios@^0.21.1"
- youtube-api-search@0.0.5 requires axios@^0.7.0
- Resolution: "axios": ">=0.21.1"

> CVE-2020-28168
Vulnerable versions: < 0.21.1
Patched version: 0.21.1
Axios NPM package 0.21.0 contains a Server-Side Request Forgery (SSRF) vulnerability where an attacker is able to bypass a proxy by providing a URL that responds with a redirect to a restricted host or IP address.
