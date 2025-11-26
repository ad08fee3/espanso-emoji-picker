# Espanso Emoji Picker v16.0.0

This is a package created for [Espanso](https://espanso.org/) called `emoji-picker` that provides a picker to select an emoji based on your input.

This is heavily inspired by the work done in [jobiewong/espanso-emojis](https://github.com/jobiewong/espanso-emojis) and was started by a fork, but heavily modified to use search capabilities instead. (And TypeScript.)

The method behind the package is very simple: Emoji unicode values and names are fetched from https://github.com/muan/unicode-emoji-json. They're then formatted and processed in TypeScript and exported as a yml file.

This project uses the search keywords provided by [muan/emojilib: Emoji keyword library.](https://github.com/muan/emojilib)

## Why?
_Why use this instead of your OS's or application's built-in emoji picker?_
1. **Consistency across devices.** Use multiple computers? Multiple operating systems? Multiple applications? This works the same way across _all_ devices and applications. Not all devices _have_ a built-in emoji picker.
2. **Customization.** See notes in the `Customization` section below. You can change the trigger or shortcuts to your liking!
3. **Modernity.** This project was inspired by some operating systems having outdated lists of emojis. _(Looking at you, Windows 10.)_

_Why use this over other Espanso packages?_
None of the existing Espanso packages offer a search function, which means you must type the entire name of the emoji, perfectly, to get Espanso to replace the prompt for you. With this package you can use Espanso's built-in picker to choose the emoji that most closely matches what you search for!

## Usage:

1. Install the package.
2. In any text field on your computer, type the trigger to open the search bar. For a fresh installation, this defaults to `:em`.
3. Type your search query and select your desired result to insert it into your writing.

## Installation:

To use this package, ensure [Espanso](https://espanso.org/) is installed on your computer. Then, choose your method to install `emoji-picker`:

### CLI (from Git):

This approach installs the package directly from the Git repository as the external package.

1. Ensure Espanso is accessible through your PC's terminal.
2. Paste the following code into your command line: `espanso package install emoji-picker --git https://github.com/ad08fee3/espanso-emoji-picker -e`
3. Hit <kbd>Enter</kbd>

### CLI (from Hub): (Coming soon)

This approach installs the package from Espanso Hub.

1. Ensure Espanso is accessible through your PC's terminal.
2. Paste the following code into your command line: `espanso install emoji-picker`
3. Hit <kbd>Enter</kbd>

> ⚠️ The version of this package on the Espanso hub may not be the most up-to-date!

### Manual: (Coming soon)

1. Navigate to [Releases](https://github.com/ad08fee3/espanso-emoji-picker/releases)
2. Download the latest zip file
3. Navigate to your Espanso directory (on Windows this is located in `%appdata%` by default) and extract the zip file into `/match/packages`

## Customization:
Being a simple text file on your PC, you are able to tweak the suggestions however you choose. Just know that any of the following suggestions may be overwritten if you update the extension! So maybe make a copy of the `package.yml` file and make your changes there instead.

To make changes to the default settings,

1. Open up the Espanso config folder. (On Windows this is located in `%appdata%` by default)
2. Navigate to `match` --> `packages` --> `emoji-picker` and open `package.yml`.

### Changing the default trigger:

By default, the trigger is set to `:em`. You could change this to any value you'd like.

To change the trigger:

1. Open the `package.yml` file
2. Change the value in the `triggers` array, or add more.

You could even change the trigger to a key-combo! See the [Espanso docs](https://espanso.org/docs/matches/basics/#keyboard-triggers) for more details.

**Note:** If you want to emulate standard "colon-emoji" support, similar to the syntax of Discord, Slack, Google Chat, Git, (etc), then you can change the trigger to `" :"` and change the value of `replace` to `" {{output}}"`.
This means that _every_ time you type a colon after a space the picker will appear. If you do that, you may want to disable this package for certain applications that natively support colon-emojis, like Discord, Slack, etc. Todo: See docs for more.

### Customizing the shortcuts:

* Do you _never_ use certain emojis?
* Do you dislike certain triggers for being too similar to others?
* Do you want to add custom triggers for different emojis?

You can!

1. Open the `package.yml` file in the editor of your choice. Notepad works just fine.
2. Add, delete, or edit any of the label/id pairs you see. The `label` is what shows when you are using the picker, and the `id` is the emoji that gets inserted by the `label` on the preceding line.


## Development

Want to add features or help keep this package up-to-date?

_Main article: [Development](Development.md)_
