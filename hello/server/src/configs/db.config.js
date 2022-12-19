const {Client} = require('pg');
const sequelize = (host, port, db, user, passs) => {

    const connection = {
        host: String(host),
        database: String(db),
        port: 5432,
        user: String(user),
        password: "root",
    };
    console.log('Connecting to',connection)

    const client = new Client(connection);
    client.connect(error => {
        try{
            if (error) throw error;
            console.log("Successfully connected to the database.");
        }catch(e){
            console.log("Fail connected to the database.");
        }
        
    });
}
module.exports = { sequelize }