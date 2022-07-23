const faq = `# FAQ

<details>
<summary>What is GitHub and how does it work?</summary>

GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.
</details>

<details>
<summary>Who is GitHub for?</summary>

You! And it’s not just developers who build on GitHub—Fortune 500 companies, small teams, project managers, and college professors all use GitHub to do their best work, in one place.
</details>

<details>
<summary>Do people use GitHub only for code?</summary>

Nope. Like we mentioned above, different people and teams use GitHub for different projects. While we got our start as a version control platform, GitHub is now used to manage teams, share resumes, find new projects, track work, and host discussions, just to name a few.
</details>`;

const titleDescription = `# Title

This is a description
`;

const installation =
  "## Installation" +
  "\n" +
  "\n " +
  "```bash" +
  "\n" +
  "pip install fastapi" +
  "\n" +
  "```";

const apiReference =
  `# API Reference

> Version 1.0

## Path for tables
  
  | Method | Path                                                     | Description              | Information                            |
| ------ | -------------------------------------------------------- | ------------------------ | -------------------------------------- |
| GET    | [/api/get/table/all](get/table/all.ts)                   | Get all tables by region | [Reference](#get-all-tables-by-region) |
  ` +
  "\n" +
  "```bash" +
  "\n" +
  " GET /api/get/table/all" +
  "\n" +
  "```" +
  "\n" +
  `
  | Header            | Type     | Description                                | Required |
  | :---------------- | :------- | :----------------------------------------- | :------- |
  | accesskeyid       | string   | The access key ID for your AWS account     | True     |
  | secretaccesskey   | string   | The secret access key for your AWS account | True     |
  | region            | string   | The region you want to use                 | True     |
  
### Responses

  - 200 OK
  ` +
  "\n" +
  "```json" +
  "\n" +
  `{
    "TableNames": ["students", "teachers", "admins"]
}` +
  "\n" +
  "```";

const authors = `# Authors

- [@nelsoncode019](https://www.github.com/nelsoncode019)
`;

const statusBadges = `# Status badges

[![Netlify Status](https://api.netlify.com/api/v1/badges/8f784d8e-d28d-43a2-b892-39cddea52192/deploy-status)](https://app.netlify.com/sites/charming-eclair-87aaaww7301a/deploys)

![Status GitHub Action](https://github.com/nelsoncode019/screenshotsite/actions/workflows/codeql-analysis.yml/badge.svg)

[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://github.com)
`;

const support = `# Support
\
[!["Buy Me A Coffee"](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/NelsonCodeDev)
[!["Patreon"](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://www.patreon.com/nelsoncode)
[!["PayPal"](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/paypalme/nelsonher019)
`;

const license = `License
MIT License © ${new Date().getFullYear()} NelsonCode
`;

const table = `# Table

| Song            | Artist                 | Year |
| :-------------- | :--------------------- | :----|
| Moscow Mule	    | Bad Bunny              | 2022 | 
| Stars           | Malcolm Lockyer	       | 1961 |
| Shining Star	  | Earth, Wind, and Fire  | 1975 |

`;

const contributing = `# Contributing
We appreciate all contributions and thank all the contributors!

[![Contributing](https://contrib.rocks/image?repo=microsoft/vscode)](https://github.com/microsoft/vscode/graphs/contributors)`;

const codeSnippet =
  "# Code Snippet" +
  "\n" +
  "```typescript" +
  "\n" +  
  `// Named function
function add(x, y) {
  return x + y;
}
   
  // Anonymous function
let myAdd = function (x, y) {
  return x + y;
};` +
  "\n" +
  "```";


export const options = [
  {
    title: "Title and Description",
    value: titleDescription,
  },
  {
    title: "Authors",
    value: authors,
  },
  {
    title: "API Reference",
    value: apiReference,
  },
  {
    title: "Table",
    value: table,
  },
  {
    title: "FAQ",
    value: faq,
  },
  {
    title: "Badges",
    value: "",
  },
  {
    title: "Status Badges",
    value: statusBadges,
  },
  {
    title: "Contributing",
    value: contributing,
  },
  {
    title: "License",
    value: license,
  },
  {
    title: "Code Snippet",
    value: codeSnippet,
  },
  {
    title: "Installation",
    value: installation,
  },
  {
    title: "Support",
    value: support,
  },
];
