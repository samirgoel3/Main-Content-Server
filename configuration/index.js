let app_config = {
    hostname: "localhost",
    app_secret: 'Algo-Network',
    port: process.env.PORT || 3001,
    base_url: "https://main-content-server.vercel.app",
    api_version: 'v1'
};

let db_config = {
    server_one: "mongodb+srv://MainClusture:94QikJPKmTndGaE3@mainclusture.l3f41ws.mongodb.net/?retryWrites=true&w=majority"
}


module.exports = {app_config, db_config};
