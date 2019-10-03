
var DatabaseConfig = {
    TEST_DB: "mongodb://localhost:27017/hi",
    PROD_DB: process.env.MONGODB_URI
}

export default DatabaseConfig;