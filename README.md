# Chart Test Assignment

## How to install project:

1. Clone project to your computer:

- Navigate to the main page of the repository.
- Copy the URL for the repostory.
- Open wanted working directory.
- open Git Bash.
- Type `git clone ` and past URL copied earlier.

2. In terminal type `pnpm i` to install required modules

3. To run project type in terminal `pnpm run dev`

4. To open project in browser you can:

- Type in browser url field `http://localhost:5173/`
- Click on the link in the terminal
- or use this link [http://localhost:5173/]

## Project Details

- Project built with React, JavaScript and SCSS.
- API: Coingecko API. Fetched with fetch API
- Chart: Apex Charts

## Project Structure

- In src folder:
    - components folder:
        - Charts folder with barChart component
        - RangeInput with filter input component
        - UI folder with Card and Tooltip components
    - layouts folder with layout components: Wrapper, Main, Header
    - utils folder with helper functions
    - hooks folder with custom hooks: useFetch.js
    - constants.js file with constants, such as API_URL
    - assets folder with styles 
