/**
 * *** NOTE ON IMPORTING FROM ANGULAR AND NGUNIVERSAL IN THIS FILE ***
 *
 * If your application uses third-party dependencies, you'll need to
 * either use Webpack or the Angular CLI's `bundleDependencies` feature
 * in order to adequately package them for use on the server without a
 * node_modules directory.
 *
 * However, due to the nature of the CLI's `bundleDependencies`, importing
 * Angular in this file will create a different instance of Angular than
 * the version in the compiled application code. This leads to unavoidable
 * conflicts. Therefore, please do not explicitly import from @angular or
 * @nguniversal in this file. You can export any needed resources
 * from your application's main.server.ts file, as seen below with the
 * import for `ngExpressEngine`.
 */

import 'zone.js/dist/zone-node';

import * as express from 'express';
import {join} from 'path';
//import * as mongoose from 'mongoose';
import * as bodyParser from "body-parser";

import { ODRoute } from "./api/routes/ODRoutes";
import * as helmet from "helmet";
import DatabaseConfig from './api/config';


import * as cors from 'cors';

import { oktaAuth } from './api/auth';


var mongoose = require("./node_modules/mongoose");


const corsOptions = {
  origin: "https://database-editor.herokuapp.com",
  credentials: true
};

// Express server
const app = express();

const odRoute : ODRoute = new ODRoute();
const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP, ngExpressEngine, provideModuleMap} = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

app.use(helmet());

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(oktaAuth);

app.use(function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "http://database-editor.herokuapp.com");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("X-Content-Type-Options", "nosniff");
  res.header("X-XSS-Protection", "1; mode=block");
  res.header("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  res.header("X-Frame-Options", "DENY");
  res.header("Content-Security-Policy", "default-src 'self' https://fonts.googleapis.com https://use.fontawesome.com https://fonts.gstatic.com; script-src 'self'; connect-src 'self' https://dev-731325.okta.com; img-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://use.fontawesome.com https://fonts.gstatic.com;");
  res.header("X-Permitted-Cross-Domain-Policies", "none");
  res.header("Referrer-Policy", "no-referrer");
  res.header("Access-Control-Allow-Headers", "origin,X-Requested-With,Content-Type,Accept,content-type,application/json,text/html");
  if ("OPTIONS" === req.method) { 
    return res.send(200);
  }
  next();
});



// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Serve static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));


// ADD Routes
odRoute.odRoute(app);

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Connect to mongodb server
mongoose.connect(DatabaseConfig.PROD_DB, { 
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB Connection error"));

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});


