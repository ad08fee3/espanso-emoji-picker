# Development

Want to add features or help keep this package up-to-date?

## Setup:

1. Clone this repo.
2. Ensure you have `npm` and `npx` installed
3. Set up with `npm install`
4. Build & run with `npx tsc && node dist/index.js`
5. Take the newly-created `package.yml` file and put it into a new release within the `espanso_package` directory.
6. Commit changes to the `package.yml` file in the root of the repo as well, so we can see how it changes with each update.

## Todos / Ideas:
There's a bunch of fun stuff we could do with this, but I'm not sure what all is possible.
* Unicode 17 is getting support soon - add support for that. e.g. https://github.com/muan/unicode-emoji-json/pull/21
* Skin tone support? This may require making a script that the user can run on their on machine to update the replacements.

### Feature improvements that must happen within Espanso:
* If the user types an EXACT match, that match should be at the top of the list.
* Better font rendering support - the emojis in the selector show up as 1-bit (black & white) on Windows. See: [emoji representation in search bar · Issue #1972 · espanso/espanso](https://github.com/espanso/espanso/issues/1972) and [Some symbols are not visible in the pop up. · Issue #2327 · espanso/espanso](https://github.com/espanso/espanso/issues/2327)
* Is it possible to add a "favorites" feature, so that some emoji are at the top of the list?
* Can we track usage, so more-frequent selections move towards the top of the list?
* Can we allow the user to order the options to prioritize certain results? See also: [Choice Extension: Add option to disable items' re-sorting · Issue #2132 · espanso/espanso](https://github.com/espanso/espanso/issues/2132)
