{/* TODO:  HTTP CLIENT / SERVICES (accessing API -- fetch/axios) */}
{/* TODO (OPTIONAL):  BACKEND (NODEJS) / DB (Mock/MongoDb/Prisma) */}
{/* TODO:  NAVIGATION */}
{/* TODO:  PAGES */}


// Airbnb Style Guide / Conventions
// https://github.com/airbnb/javascript/tree/master/react#naming


////////////////////////


{/* HYGEN PLAN */}
// https://www.hygen.io/
//
// Notes:
    // mongodb-related ("collection")
    // currently stuck at FE (newCollection/first.ejs.t) (SyntaxError: Unexpected token ')' while compiling ejs)
//
// - Determine collection name (string)
// -   
// - FE
//     - Create pages folder
//         - _template
//     
//
// - BE
//     - Router
//         - Create Prisma route file
//             - _template (collection = imported)
//         - Add line to routers/index.js file ?
//             - router.use(‘/collection’, require(“.prisma/collection”))
//             -  
//             - **alternative:  enum / add additional imports at top
//     - Prisma.schema
//         - Add model ?




{/* CRA */}
// npx create-react-app my-app

// CLIENT
// delete unnecessary (keep App.css -- @import-normalize)
// create folders (src//pages,components,services,utils)
// create client > move all folders into client

// SERVER
// create server > cd server
// npm i express body-parser cors
// create .env
    // PORT=4000
// create package.json
    // {
    //   "name": "my-app-backend",
    //   "version": "1.0.0",
    //   "scripts": {
    //     "client": "cd client && yarn start",
    //     "server": "nodemon server.js --ignore client",
    //     "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
    //   },
    //   "dependencies": {
    //     "body-parser": "^1.20.1",
    //     "cors": "^2.8.5",
    //     "express": "^4.18.2"
    //   },
    //   "devDependencies": {
    //     "concurrently": "^4.0.1"
    //   }
    // }
// create server.js
    // const express = require('express');
    // const bodyParser = require('body-parser');
    // const app = express();
    // const port = process.env.PORT || 4000;
    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: true }));

    // // app.use("/", require("./router"))
    // const cors = require("cors")
    // app.use(cors())

    // app.use("/", require("./router"))

    // app.listen(port, () => console.log(`Listening on port ${port}`));
// create router/index.js
    // const express = require('express');
    // const bodyParser = require('body-parser');
    // const app = express();
    // const port = process.env.PORT || 4000;
    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: true }));

    // // CORS
    // const cors = require("cors")
    // app.use(cors())

    // // ROUTER
    // const router = require("./router")
    // app.use("/", router)

    // // LISTEN
    // app.listen(port, () => console.log(`Listening on port ${port}`));
// create router/api/index.js
    // const router = require("express").Router()

    // router.get('/hello', (req, res) => {
    //   res.send('Hello From Express');
    // });
    // router.post('/world', (req, res) => {
    //   console.log(req.body);
    //   res.send(
    //     `I received your POST request. This is what you sent me: ${req.body.post}`,
    //   );
    // });

    // module.exports = router;


// START APP
    // terminal (node/server):  node server.js ("Listening on port 4000")
    // terminal (node/client):  npm start




/// MOVIE DB
// https://www.themoviedb.org/?language=en-US




// NOTE:  probably want client & server both within src folder ? (similar to NextJS? monorepo?)

// root
    // client
        // public
        // src
            // components
                // layout
                    // SiteContainer.js
                // utils
                    // LinkWrapped.js
            // pages
                // home
                // users
                    // components
                    // Users.js
                    // User.js
            // services
                // axios.js
                // fetch.js
                // index.js
            // utils
                // constants.js
                    // export const colors = {
                    //  pink: "#ffc4ef",
                    //  blue: "#c4ddff"
                    // }

            // App.css
            // App.js
            // index.js
            // ...
        
        // .env
            // BACKENDURL = http://localhost:4000
        // .gitignore
            // /node_modules
            // .env
        // package.json
    // server
        // db
            // (db.json, mongodb.js, ...)
        // prisma (auto-generated)
        // router
            // api
            // (mock, mongodb, prisma, ...)
            
            // index.js            
        // .env
            // PORT=4000
            // DATABASE_URL=mongodbUri
        // .gitignore
            // /node_modules
            // .env
        // package.json
        // server.js
