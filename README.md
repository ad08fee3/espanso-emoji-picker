# espanso-emoji-picker
A simple emoji picker for espanso.

This is heavily inspired by the work done in [jobiewong/espanso-emojis](https://github.com/jobiewong/espanso-emojis) and was started by a fork, but heavily modified to use search capabilities instead. (And TypeScript.)


# Espanso Emoji Picker v17.0.0

This is a package created for [Espanso](https://espanso.org/) called `emoji-picker` that provides a picker to select an emoji based on your input.

The method behind the package is very simple: Emoji unicode values and names are fetched from [Unicode.org](https://unicode.org/emoji/charts/full-emoji-list.html). They're then formatted and processed in TypeScript and exported as a yml file.

This project uses the search keywords provided by [muan/emojilib: Emoji keyword library.](https://github.com/muan/emojilib)

## Installation

### CLI (from Git) (Coming soon)

This approach installs the package directly from the Git repository as the external package.

1. Ensure Espanso is properly installed and accessible through the terminal.
2. Paste the following code into your command line: `espanso package install espanso-emoji-picker --git https://github.com/ad08fee3/espanso-emoji-picker -e`
3. Hit <kbd>Enter</kbd>

### CLI (from Hub) (Coming soon)

This approach installs the package from Espanso Hub.

1. Ensure Espanso is properly installed and accessible through the terminal.
2. Paste the following code into your command line: `espanso install espanso-emoji-picker`
3. Hit <kbd>Enter</kbd>

> ⚠️ The version of this package on the Espanso hub may not be the most up-to-date!


### Manual (Coming soon)

1. Navigate to [Releases](https://github.com/ad08fee3/espanso-emoji-picker/releases)
2. Download the latest zip file
3. Navigate to your Espanso directory (on Windows this is located in %appdata% by default) and extract the zip file into `/match/packages`
