<div align="left">
  
 # [ Book management Dashboard!](https://github.com/Dom000/scrapay)

</div>

<div align="left">
  
---

Project frontend live URL [here](https://scrapay.vercel.app).
Project backend live URL [here](https://scrapay-production.up.railway.app/).

---

</div>


## <span style="color:#297deb"> Project Description: </span>

This a mono repo that contains a  Graphql server built with nestJS and a Vite React application, for the client. it authenticate  logged in users  via auth0 client interface. After a successful authentication user can now perform other book management operations using apollo client for client request.

Additional tools in use encompass express-jwt for authenticating Auth0 JWT tokens, Prisma for querying the database, and jwks-rsa for fetching the token validation secret
Unit testing was implemented to run test for functionalities on this server.

# <span style="color:#297deb"> How to run: </span>

There are two major ways to bootrap the app.
# <span style="color:blue"> first: </span>


## general Installation from the root folder

```bash
$ yarn run install:all
```

## Running the apps from the root folder 

```bash
# all development app in the folder i:e cleint app & server app
$ yarn start:dev

```

# <span style="color:blue"> second: </span>


## Installation for client

```bash
$ cd scrapay-client
$ yarn install
```

## Running for client 

```bash
# development
$ yarn run dev

```
## Installation for server

```bash
$ cd scrapay-backend
$ yarn install
```

## Running for sever

```bash
# development
$ yarn start:dev

```


## Test

```bash
# unit tests
$ yarn test

# test a specific file
$ yarn test *test file name*

# test coverage
$ yarn test:cov
```
