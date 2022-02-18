<h1 align="center">Fabrics</h1>

## Description

<p align="center">
<img src="readme_assets/product_overview.png">
</p>

<p align="center">
<img src="readme_assets/QandA.png">
</p>

<p align="center">
<img src="readme_assets/rating_and_reviews.png">
</p>

---
## Installation
**Make sure your system meets the requirements below before following installation**
1. Clone this repo to your local machine:
    - `git clone https://github.com/Mitch311G/Fabrics.git`
2. Navigate the repo's root directory:
    - `cd Fabrics`
3. Install project dependencies:
    - `npm install`
4. Create `.env` file in the root directory, then copy and paste contents from `.env.example` into your `.env`.
    - Your github `Personal access token` goes in your `.env` file as the `API_KEY`.
5. Run `npm run build-dev` to build `dist/bundle.js` and `npm run start-dev` to start development server at `localhost:3000`.
6. Start developing!

### Requirements
1. Install the following to your system (if not done already):
    - [Node.js and npm](https://nodejs.org/en/download/)
2. Create a new `Personal access token` on github.
---
## Usage

<p align="center">
<img src="">
</p>

---
## Provided scripts
- `npm run build-dev`
    - Using webpack and babel, this will bundle and transpile the contents of `client/src` directory into bundled `.js` file for browser consumption, which are linked to `index.html`, then **watch for changes and re-bundle on file changes**.
- `npm run build`
    - Builds the bundle for production and **does not watch for file changes**.
- `npm run start-dev`
    - Starts the development server (default is localhost:3000), then **watches for changes and restarts the server with updated content on file change**.
- `npm run start`
    - Starts the app's server, but **does not watch for file changes**.
---
## Authors and acknowledgment
***Fabrics*** was developed by Mitchell Gardner, [Marc Lawson](https://github.com/mlawso33-code), and [Sterling Muller](https://github.com/sterlingmuller).
