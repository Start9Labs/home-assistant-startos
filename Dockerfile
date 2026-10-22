ARG IMAGE
FROM ${IMAGE}
# Home Assistant verifies outbound TLS against certifi, which is only as current as the image.
RUN python3 -m pip install --no-cache-dir --upgrade 'certifi>=2026.10.19' \
 && ! grep -q MIICTjCCAdOgAwIBAgIKPPYHqWhwDtqLhDAKBggqhkjOPQQDAzBr "$(python3 -m certifi)"
