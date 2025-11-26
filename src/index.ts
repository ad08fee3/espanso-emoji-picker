import * as fs from 'fs';
import data from "unicode-emoji-json/data-by-emoji.json";
import keywordSet from 'emojilib';

async function main() {
    const yamlLines = [
        `matches:`,
        `- triggers: [":em"]`, // This trigger can be overwritten by the user if they want.
        `  replace: "{{output}}"`,
        `  vars:`,
        `  - name: output`,
        `    type: choice`,
        `    params:`,
        `      values:`
    ];

    // For each emoji in the database, make one yaml entry for each keyword.
    Object.entries(data).forEach(([emoji, emojiData]: [string, any]) => {
        const keywords = keywordSet[emoji]
        .map((keyword: string) => keyword.replace(" ", "_").replace(/[^a-zA-Z0-9_]/g, "")) // First, replace all instances of spaces with underscores and delete non-alphanumerics.
        .filter((keyword: string) => (keyword.length > 0)); // Then remove any keywords that may now be empty.
        keywords.forEach((keyword: string) => {
            yamlLines.push(
                `        - label: "${emoji} ${keyword}"`, // This line is what is rendered in the emoji picker. We want to show both the emoji and keyword.
                `          id: "${emoji}"` // "id" is the value that Espanso will type for you. In this case, we want the emoji to appear.
            );
        });
    });
    fs.writeFileSync('package.yml', yamlLines.join("\n"));
    console.log("Done! See the generated package.yml for testing. Only commit this file if you put it in a new release within the espanso_package directory.");
}

main();
