<br />
<div align="center">
  <h1 align="center">Vite template</h1>

  <p align="center">
    Vite template uing typescript, react, vitest and linter best practices
    <a href="https://github.com/g34r21/simplecommerce/issues">Report issue or improvements</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

  <ol>
    <a href="#built-with">Built With</a>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Run it!</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>

### Built With

[![React][React-badge]][React-url] [![Vite][Vite-badge]][Vite-url] [![TypeScript][TypeScript-badge]][TypeScript-url]

- React
- Vite
- Typescript
- Vitest

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- Node.js v18 `lts/hydrogen` we recommend to use nvm to manage multiple node versions.

  Check nvm docs for installation

  - [NVM for windows](https://github.com/coreybutler/nvm-windows)
  - [NVM for Unix based operating systems](https://github.com/coreybutler/nvm-windows)

  #### Installation using nvm

  You don't need to specify version because it infers it from `.nvmrc` file

  ```sh
  nvm install
  ```

  Use version

  ```sh
  nvm use
  ```

- pnpm package manager @ v8 or higher
  ```sh
  npm i -g pnpm@latest
  ```

### Run the project!

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/g34r21/simplecommerce.git
   ```
2. Install NPM packages
   ```sh
   pnpm install
   ```
3. Start development server
   ```sh
   pnpm dev
   ```
4. Start testing server
   ```sh
   pnpm test:watch
   ```
   You can also start the tests with UI by using
   ```sh
   pnpm test:ui
   ```
   Then you can visit the [Vitest UI](http://localhost:51204/__vitest__/)

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React-badge]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vite-badge]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[TypeScript-badge]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
