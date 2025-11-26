# Espanso Emoji Picker v16.0.0

This is a package created for [Espanso](https://espanso.org/) called `emoji-picker` that provides a picker to select an emoji based on your input.

This is heavily inspired by the work done in [jobiewong/espanso-emojis](https://github.com/jobiewong/espanso-emojis) and was started by a fork, but heavily modified to use search capabilities instead. (And TypeScript.)

The method behind the package is very simple: Emoji unicode values and names are fetched from https://github.com/muan/unicode-emoji-json. They're then formatted and processed in TypeScript and exported as a yml file.

This project uses the search keywords provided by [muan/emojilib: Emoji keyword library.](https://github.com/muan/emojilib)

## Usage

1. Install the package.
2. In any text field on your computer, type the trigger. For a fresh installation, this defaults to `:em`.
3. Type your search query and select your desired result to insert.

Being a simple text file on your PC, you are able to tweak the suggestions however you choose. Just know that any of the following suggestions may be overwritten if you update the extension! So maybe make a copy of the `package.yml` file and make your changes there instead.

To make changes to the default settings,

1. Open up the Espanso config folder.:em
2. Navigate to `match` --> `packages` --> `emoji-picker` and open `package.yml`.

### Changing the default trigger

By default, the trigger is set to `:em`. You could change this to any value you'd like.

To change the trigger:

1. Open the `package.yml` file.
2. Change the value in the `triggers` array, or add more.

Note: If you want to emulate standard "colon-emoji" support, similar to the syntax of Discord, Slack, Google Chat, Git, (etc), then you can change the trigger to `" :"` and change the value of `replace` to `" {{output}}"`.
This means that _every_ time you type a colon after a space the picker will appear. If you do that, you may want to disable this package for certain applications that natively support colon-emojis, like Discord, Slack, etc.

### Customizing the shortcuts

* Do you _never_ use certain emojis?
* Do you dislike certain triggers for being too similar to others?
* Do you want to add custom triggers for different emojis?

You can!

1. Open the `package.yml` file in the editor of your choice. Notepad works just fine.
2. Add, delete, or edit any of the label/id pairs you see. The `label` is what shows when you are using the picker, and the `id` is the emoji that gets inserted by the `label` on the preceding line.

## Installation

### CLI (from Git)

This approach installs the package directly from the Git repository as the external package.

1. Ensure Espanso is properly installed and accessible through the terminal.
2. Paste the following code into your command line: `espanso package install emoji-picker --git https://github.com/ad08fee3/espanso-emoji-picker -e`
3. Hit <kbd>Enter</kbd>

### CLI (from Hub) (Coming soon)

This approach installs the package from Espanso Hub.

1. Ensure Espanso is properly installed and accessible through the terminal.
2. Paste the following code into your command line: `espanso install emoji-picker`
3. Hit <kbd>Enter</kbd>

> ⚠️ The version of this package on the Espanso hub may not be the most up-to-date!


### Manual (Coming soon)

1. Navigate to [Releases](https://github.com/ad08fee3/espanso-emoji-picker/releases)
2. Download the latest zip file
3. Navigate to your Espanso directory (on Windows this is located in %appdata% by default) and extract the zip file into `/match/packages`

## Development

1. Clone this repo.
2. Ensure you have `npm` and `npx` installed
3. Set up: `npm install`
4. Build & run: `npx tsc && node dist/index.js`
5. Take the newly-created `package.yml` file and put it into a new release within the `espanso_package` directory.
