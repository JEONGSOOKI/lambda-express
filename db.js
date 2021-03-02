//mysql에 연결해서 쿼리 및 트랜잭션 동작을 처리하는 모듈
const mysql = require('mysql2');

const pool = mysql.createPool({
    host    : process.env.dbhost,
    user    : process.env.dbuser,
    password: process.env.dbpw,
    database: process.env.dbname,
    charset : 'utf8mb4',
    connectionLimit: 50,
    multipleStatements: true
}).promise();

module.exports = {
    query: (query) => {
        return new Promise(async(resolve, reject) => {
            try {
                const [rows] = await pool.query(query);
                console.log(rows);
                resolve(rows);
            } catch(err) {
                console.error(err);
                reject(err);
            } 
        })
    }, 
    transaction: (query) => {
        return new Promise(async(resolve, reject) => {
            try {
                const conn = await pool.getConnection();
                try {
                    await conn.beginTransaction();
                    const [rows] = await conn.query(query);
                    await conn.commit();
                    conn.release();
                    resolve(rows)
                } catch(err) {
                    await conn.rollback();
                    conn.release();
                    console.error(err);
                    reject(err);
                }
            } catch(err) {
                console.error(err);
                reject(err);
            }
        })
    },
}