# zapp-pipes-provider-rest-template

DataSourceProvider Template node/express rest server.

### Setup

Go to `src/config/api` and set your axios default configuration. You may want to send extra headers on each request.
Go to `src/config/const/` and update your backend endpoint entrypoint. For example, if your backend is http://demo.wp-api.org/wp-json/wp/v2 , set SERVER.PROD = `http://demo.wp-api.org/` and API_RESOURCE = `/wp-json/wp/v2`. Then change `URL_SCHEMA` and map your supported types with `HANDLER_TYPES`.
Define your backend endpoints with `src/config/endpoints`, you'll use it in your handlers later.

Open `src/handlers/index.js` and change `/restExample/fetchData` to yours.

Migrate handlers from original DSP to handlers. Learn how it can be chained with models and parsers in `src/handlers/getCategories` and `src/handlers/getPost`.

### How to install and run

Version of node used (v12.13.0)

- `yarn install` or `npm install`
- `yarn dev` or `npm run-script dev` (the server start listen on : http://localhost:8080)
- try : http://localhost:8080/restExample/fetchData?type=categories

#### Build production version

- `npm run-script build`
  or
- `yarn build`

### Deploy on # eroku

1. Setup a new app.
2. Add to env variables NPM_TOKEN variable with access token for NPM, and PORT as port for your application. Set it to 80.
3. Toggle Github Autodeploy from your repo.
4. Trigger a manual deploy to check deployment.
