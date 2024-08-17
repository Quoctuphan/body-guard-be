// const sql = require('mssql');

// const config = {
//     user: 'SQLAdmin',
//     password: '12345678@a',
//     server: 'mockprojecsqlserver.database.windows.net',
//     port: 1433, // Sử dụng port mặc định của SQL Server
//     database: 'newbodyguardDB',
//     options: {
//         encrypt: true // Bắt buộc đối với Azure SQL
//     }
// };

// async function connectAndQuery() {
//     try {
//         // Tạo kết nối đến cơ sở dữ liệu
//         const pool = await sql.connect(config);
//         console.log('Connected to SQL Server');
//     } catch (err) {
//         console.error('Database Connection Failed! Bad Config: ', err);
//     }
// }

// // Gọi hàm để kiểm tra kết nối và truy vấn
// console.log("Starting...");
// connectAndQuery();

const sql = require('mssql/msnodesqlv8');

const config = {
    user: 'sa',
    password: '123123',
    server: 'localhost',
    port: 1433, // Sử dụng port mặc định của SQL Server
    database: 'newbodyguardDB',
    driver: 'MsNodeSqlV8'
};

const conect = new sql.ConnectionPool(config).connect()

// Gọi hàm để kiểm tra kết nối và truy vấn
console.log("conected...");


module.exports = conect
