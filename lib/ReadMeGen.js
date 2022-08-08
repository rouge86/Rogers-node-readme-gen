class MarkDown {
  static renderLicenseBadge(license) {
    const badges = {
      mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      isc: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
      gplv3:
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      open: "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
      none: "",
    };
    return badges[license];
  }
  static renderLicenseLink(license) {
    if (license != "none") {
      return `- [License](#license)`;
    } else {
      return "";
    }
  }

  static renderLicenseSection(license) {
    if (license != "none") {
      return `## License \nlicensed under the ${license} license`;
    } else {
      return "";
    }
  }

  static generateReadme(answers) {
    return `
# ${answers.title}
${this.renderLicenseBadge(answers.license)}


## Table of Contents
- [Project Description](#description)
- [Installation Instruction](#installation-instructions)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)
${this.renderLicenseLink(answers.license)}

## Description
${answers.description}

## Installation Instructions
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Test
${answers.test}

## Questions
${answers.email}
${answers.github}


${this.renderLicenseSection(answers.license)}

        `;
  }
}

module.exports = MarkDown;
