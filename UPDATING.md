# Updating the upstream version

## Determining the upstream version

- **Home Assistant Core** ([home-assistant/core](https://github.com/home-assistant/core)) — inspect the tag list, ignoring beta tags and historical non-CalVer tags rather than relying on GitHub's Latest badge:

  ```sh
  gh api 'repos/home-assistant/core/tags?per_page=100' --jq '.[].name'
  gh release view <tag> -R home-assistant/core --json body,isPrerelease
  docker manifest inspect ghcr.io/home-assistant/home-assistant:<tag>
  ```

  Choose the newest stable release whose image is published for both amd64 and arm64. Home Assistant uses year.month.patch versions; monthly releases can include breaking changes, while patches normally contain bug fixes. Read the monthly release's compatibility notes when crossing months.

  The pin lives in `startos/manifest/index.ts` on `images['home-assistant'].source.dockerTag`. Preserve the complete upstream version in `startos/versions/current.ts`, followed by `:0`.

## Applying the bump

- Set the image pin above to `ghcr.io/home-assistant/home-assistant:<new version>`.
- Verify the upstream image's system store (`/etc/ssl/certs/ca-certificates.crt`) and active certifi bundle (`python3 -m certifi`) still exclude emSign ECC Root CA - G3 on both architectures. Neither bundle may contain `MIICTjCCAdOgAwIBAgIKPPYHqWhwDtqLhDAKBggqhkjOPQQDAzBr`.

### Bundled HACS archive

`assets/hacs.zip` is an ancillary integration, not the wrapped application or a version-bump trigger. It is bundled rather than fetched so the Set Up HACS
action needs no network access. Bump it by replacing the archive with a newer release
of [hacs/integration](https://github.com/hacs/integration) — never by having the action
download at runtime:

```sh
gh release view -R hacs/integration --json tagName -q .tagName
```
