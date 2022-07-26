const faq =
  "# FAQ\n\n<details>\n<summary>What is GitHub and how does it work?</summary>\n\nGitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.\n</details>\n\n<details>\n<summary>Who is GitHub for?</summary>\n\nYou! And it’s not just developers who build on GitHub—Fortune 500 companies, small teams, project managers, and college professors all use GitHub to do their best work, in one place.\n</details>\n\n<details>\n<summary>Do people use GitHub only for code?</summary>\n\nNope. Like we mentioned above, different people and teams use GitHub for different projects. While we got our start as a version control platform, GitHub is now used to manage teams, share resumes, find new projects, track work, and host discussions, just to name a few.\n</details>";

const titleDescription = "# Title\n\nThis is a description\n";

const installation = "## Installation\n\n ```bash\npip install fastapi\n```";

const apiReference =
  '# API Reference\n\n> Version 1.0\n\n## Path for tables\n  \n  | Method | Path                                                     | Description              | Information                            |\n| ------ | -------------------------------------------------------- | ------------------------ | -------------------------------------- |\n| GET    | [/api/get/table/all](get/table/all.ts)                   | Get all tables by region | [Reference](#get-all-tables-by-region) |\n  \n```bash\n GET /api/get/table/all\n```\n\n  | Header            | Type     | Description                                | Required |\n  | :---------------- | :------- | :----------------------------------------- | :------- |\n  | ```accesskeyid```       | ```string```   | The access key ID for your AWS account     | True     |\n  | ```secretaccesskey```   | ```string```   | The secret access key for your AWS account | True     |\n  | ```region```            | ```string```   | The region you want to use                 | True     |\n  \n### Responses\n\n  - 200 OK\n  \n```json\n{\n    "TableNames": ["students", "teachers", "admins"]\n}\n```';

const authors =
  "# Authors\n\n- [@nelsoncode019](https://www.github.com/nelsoncode019)\n";

const statusBadges =
  "\n# Status badges\n\n[![Netlify Status](https://api.netlify.com/api/v1/badges/8f784d8e-d28d-43a2-b892-39cddea52192/deploy-status)](https://app.netlify.com/sites/charming-eclair-87aaaww7301a/deploys)\n\n![Status GitHub Action](https://github.com/nelsoncode019/screenshotsite/actions/workflows/codeql-analysis.yml/badge.svg)\n\n[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://github.com)\n";

const support =
  '\n# Support\n[!["Buy Me A Coffee"](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/NelsonCodeDev)\n[!["Patreon"](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://www.patreon.com/nelsoncode)\n[!["PayPal"](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/paypalme/nelsonher019)\n';

const license = "\n\n# License\n\nMIT License | Nelson Hernández";

const table =
  "\n\n\n\n# Table\n\n| Song            | Artist                 | Year |\n| :-------------- | :--------------------- | :----|\n| Moscow Mule\t    | Bad Bunny              | 2022 | \n| Stars           | Malcolm Lockyer\t       | 1961 |\n| Shining Star\t  | Earth, Wind, and Fire  | 1975 |\n\n";

const contributing =
  "\n\n\n\n# Contributing\nWe appreciate all contributions and thank all the contributors!\n\n[![Contributing](https://contrib.rocks/image?repo=microsoft/vscode)](https://github.com/microsoft/vscode/graphs/contributors)";

const codeSnippet =
  "\n\n\n\n# Code Snippet\n```typescript\n// Named function\nfunction add(x, y) {\n  return x + y;\n}\n   \n  // Anonymous function\nlet myAdd = function (x, y) {\n  return x + y;\n};\n```";

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
