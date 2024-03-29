import { Request, Response, NextFunction} from 'express';

const OktaJwtVerifier = require('@okta/jwt-verifier');

const oktaJwtVerifier = new OktaJwtVerifier({
  clientId: '0oa1odxb5obhuH9gl357',
  issuer: `https://dev-731325.okta.com/oauth2/default`
});

export async function oktaAuth(req:Request, res:Response, next:NextFunction) {
  try {
    //console.log(req.headers.authorization);
    const token = req.headers.authorization as String;
    if (!token) {
      return res.status(401).send('Not Authorized');
    }
    const jwt = await oktaJwtVerifier.verifyAccessToken(token.trim().split(" ")[1], 'api://default');
    // if (!jwt) {
    //   return res.status(401).send('Not Authorized');
    // }
    req.user = {
      uid: jwt.claims.uid,
      email: jwt.claims.sub
    };
    next();
  }
  catch (err) {
    return res.status(401).send(err.message);
  }
}