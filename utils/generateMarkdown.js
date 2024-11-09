// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
      switch (license) {
        case 'MIT':
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'GNU GPLv3':
          return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        case 'Apache 2.0':
          return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'ISC':
          return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
        default:
          return '';
      }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
    function renderLicenseLink(license) {
      switch (license) {
        case 'MIT':
          return 'https://opensource.org/licenses/MIT';
        case 'GNU GPLv3':
          return 'https://www.gnu.org/licenses/gpl-3.0';
        case 'Apache 2.0':
          return 'https://opensource.org/licenses/Apache-2.0';
        case 'ISC':
          return 'https://opensource.org/licenses/ISC';
        default:
          return '';
      }
    }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None') {
        return ''
    } else {
        return `## License
        This project is licensed under the ${license} license.`
    } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  [GitHub Repository](${data.repository})
  [Deployed Link](${data.deployedLink})
  [Walk-through Link](${data.videoWalkThrough})
    
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Learning Points](#learning-points)
  - [Author Information](#author-information)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Learning Points
  ${data.learningPoints}

  ## Author Information
  ${data.authorInfo}

  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Questions
  If you have any questions, you can reach me at ${data.email}. 
  You can also visit my GitHub profile at [${data.github}](https://github.com/${data.github}).`;
}
export default generateMarkdown;