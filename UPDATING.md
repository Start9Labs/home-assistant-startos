# Updating the upstream version

## Determining the upstream version

- **Home Assistant Core** ([home-assistant/core](https://github.com/home-assistant/core)) — latest stable release tag:

  ```sh
  gh release view -R home-assistant/core --json tagName -q .tagName
  ```

  The same tag is published as a Docker image at `ghcr.io/home-assistant/home-assistant:<tag>`. The pin lives in `startos/manifest/index.ts` on `images['home-assistant'].source.dockerTag`.

## Applying the bump

- In `startos/manifest/index.ts`, set `images['home-assistant'].source.dockerTag` to `ghcr.io/home-assistant/home-assistant:<new version>`.

### Bundled HACS archive

`assets/hacs.zip` is a second upstream, bundled rather than fetched so the Set Up HACS
action needs no network access. Bump it by replacing the archive with a newer release
of [hacs/integration](https://github.com/hacs/integration) — never by having the action
download at runtime:

```sh
gh release view -R hacs/integration --json tagName -q .tagName
```
