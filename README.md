## Database-Editor
# Download mongoDB
1. Go to https://www.mongodb.com/download-center/community and download the community server
2. Open up a command prompt and `cd` to the database-editor folder
3. Enter the command `mongoimport -d hi -c accod --jsonArray --file assets/csc440projectrecords.json`
4. Keep the command prompt open.

# Install Node
1. Go to https://nodejs.org/en/ and download the LTS version of node.

# Install NPM packages
1. `cd` to the database-editor folder
2. Enter the command `npm install` .

# Run the test server
1. Enter `npm run dev` in the command prompt to run the dev environment.
2. Open a browser and go to http://localhost:4000 to view changes made to the website in real time.
