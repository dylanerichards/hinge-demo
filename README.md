# Hinge Lite

A React + Rails web app for viewing and editing user profiles.

## Live Demo

Find the app live at [hinge-demo.herokuapp.com](htpp://www.hinge-demo.herokuapp.com)

## Running the application locally

1. Clone this repository and `cd` into it.
2. Run `bundle` to install the Rails app dependencies.
3. Run `rake db create; rake db:migrate; rake db: seed` to create, migrate, and seed the database with some initial Users and Questions.
4. Start the Rails server on port 3001 by running `rails server -p 3001` in the project root.
5. Open another terminal window and `cd` into the `client` directory. Then run `npm install`.
6. After running `npm install`, run `yarn start` to start the front-end app on port 3000.