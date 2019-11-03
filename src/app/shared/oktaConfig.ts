const oktaConfig = {
    issuer: `${process.env.OKTA_URI}/oauth2/default`,
    redirectUri: 'https://database-editor.herokuapp.com/implicit/callback',
    clientId: process.env.clientId
  }

  export {oktaConfig};