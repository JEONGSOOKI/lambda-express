module.exports.database = (serverless) => ({
    dev: {
        db_host: 'your mysql server ip',
        db_user: 'id',
        db_password: 'pw',
        db_name: 'database name'
    },
    prod: {
        db_host: 'your mysql server ip',
        db_user: 'id',
        db_password: 'pw',
        db_name: 'database name'
    }
});