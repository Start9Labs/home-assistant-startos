# Updating the upstream version

## Determining the upstream version

- **Home Assistant Core** ([home-assistant/core](https://github.com/home-assistant/core)) — latest stable release tag:

  ```sh
  gh release view -R home-assistant/core --json tagName -q .tagName
  ```

  The same tag is published as a Docker image at `ghcr.io/home-assistant/home-assistant:<tag>`. The pin lives in `startos/manifest/index.ts` on `images['home-assistant'].source.dockerTag`.

## Applying the bump

- In `startos/manifest/index.ts`, set `images['home-assistant'].source.dockerTag` to `ghcr.io/home-assistant/home-assistant:<new version>`.
