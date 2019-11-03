const oktaConfig = {
    issuer: `https://dev-731325.okta.com/oauth2/default`,
    redirectUri: 'https://database-editor.herokuapp.com/implicit/callback',
    clientId: process.env.clientId
  }

  export {oktaConfig};