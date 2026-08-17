# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

Work this package's `TODO.md` from top to bottom. Keep `README.md` (technical reference for an AI support or administering agent) and `instructions.md` (end-user docs) in sync with your changes.

## This repo

- **Model only the keys of `.storage/http` that the proxy depends on, and default none of them.** Home Assistant owns that store and reads it back unvalidated; an unmodelled key must round-trip untouched, and a defaulted one would make "absent" indistinguishable from "already correct". Append to `trusted_proxies` rather than replacing it.
- **Leave a store with no `stable` section alone.** Home Assistant has not migrated it yet, that migration carries the trust setting across itself, and writing in would hand it a hybrid to read.
- **`configuration.yaml`'s custom-tag handlers are required for correctness, not convenience.** Without them the YAML round-trip silently drops `!include`, `!secret`, `!env_var`, and the `!include_dir_*` family — directives users add over SSH. Extend the list rather than parsing the file plainly.
- **`reset-password` must stay `only-stopped`.** Home Assistant caches the auth store and rewrites it on graceful shutdown, so a reset against a running instance is silently reverted.
- **The install bootstrap exists because `.storage/http` does not exist until Home Assistant writes it.** It waits for `scenes.yaml` _and_ `.storage/http` — the last file the default-config writer emits, plus one only written once the web server has come up. Don't reduce it to a fixed sleep or to either file alone.
