// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const license = ('${data.license}');

function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'GPL') {
    return '[![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'APACHE') {
    return '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'BSD') {
    return '[![License: BSD](https://img.shields.io/badge/License-BSD-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else {
    return ''; // Empty string for no license
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'GPL') {
    return '[GPL License](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'APACHE') {
    return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'BSD') {
    return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
  } else {
    return ''; // Empty string for no license
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    // Call the renderLicenseBadge and renderLicenseLink functions to get the badge and link
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
  
    // If there's no license, return an empty string
    if (!licenseBadge && !licenseLink) {
      return '';
    }
  
    // Otherwise, return the license section with badge and link
    return `
  ## License
  ${licenseBadge}

  ${licenseLink}
    `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `   
  
  # ${data.title}

  ### Description
  ${data.description}

  ### Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Test
  * Questions

  ## Installation
  To install, run the following commands:
  ${data.installation}
    
  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  If you have any questions, please contact me.
  email: ${data.email}
  github: ${data.github}

  ## Link to video submission
  https://app.screencastify.com/v3/watch/kMzhz15Rc1xuwb0tjcMX
    
`;
}

// renderLicenseBadge();
// renderLicenseLink();
// renderLicenseSection();

module.exports = generateMarkdown;
