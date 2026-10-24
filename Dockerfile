ARG IMAGE
FROM ${IMAGE}
# The base image's CA store is only as current as its last release.
RUN apk upgrade --no-cache ca-certificates ca-certificates-bundle \
 && if [ -f /etc/ssl/certs/ca-certificates.crt.apk-new ]; then mv /etc/ssl/certs/ca-certificates.crt.apk-new /etc/ssl/certs/ca-certificates.crt; fi \
 && ! grep -q MIICTjCCAdOgAwIBAgIKPPYHqWhwDtqLhDAKBggqhkjOPQQDAzBr /etc/ssl/certs/ca-certificates.crt
# Home Assistant verifies outbound TLS against certifi, which is only as current as the image.
RUN python3 -m pip install --no-cache-dir --upgrade 'certifi>=2026.10.19' \
 && ! grep -q MIICTjCCAdOgAwIBAgIKPPYHqWhwDtqLhDAKBggqhkjOPQQDAzBr "$(python3 -m certifi)"
