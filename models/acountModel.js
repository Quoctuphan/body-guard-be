const poolPromise =  require('../config/dbConfig');

const getUser = async () => {
    try {
        // let startpoint = params * 10 || ORDER BY id LIMIT 10 OFFSET ${startpoint}
        const pool = await poolPromise;
        let mquery = `select * from public."user" where deleted = false`
        const result = await pool.query(mquery);
        console.log("user", result.rows)
        return result.rows
    } catch (err) {
        console.error('SQL error', err);
        return "error"
    }
};
const getUserByMail = async (email, password) => {
    try {
        const pool = await poolPromise;
        let mquery = `select * from public."user" where deleted = false and email = '${email}'`
        const result = await pool.query(mquery);
        return result.rows
    } catch (err) {
        console.error('SQL error', err);
        return "error"
    }
};


const getUserID = async (params) => {
    try {
        console.log(params)
        const pool = await poolPromise;
        let mquery = `select * from public."user" where id = ${params} and deleted =false`
        const result = await poolPromise.query(mquery);
        return result.rows

    } catch (err) {
        console.error('SQL error', err);
    }
};

const getUserName = async (params) => {
    try {
        
        let mquery = `select * from public."user" where user_name like '%${params}%' and deleted = false`
        const result = await poolPromise.query(mquery);
        return result.rows

    } catch (err) {
        console.error('SQL error', err);
    }
};


const getUserRole = async (params) => {
    try {
        const pool = await poolPromise;
        let mquery = `select * from public."user" where roleid =${params} and deleted =false`
        const result = await poolPromise.query(mquery);
        return result.rows
    } catch (err) {
        console.error('SQL error', err);
    }
};

const getUserUName = async (params) => {
    try {
        const pool = await poolPromise;
        let mquery = `select * from public."user" where USER_NAME like '%${params}%' and deleted =false`
        const result = await poolPromise.query(mquery);
        return result.rows
    } catch (err) {
        console.error('SQL error', err);
    }
};

////////////////

const getCustID = async (params) => {
    try {
        console.log(params)
        const pool = await poolPromise;
        let mquery = `select * from tbl_customer where id = ${params} and deleted =false`
        const result = await poolPromise.query(mquery);
        return result.rows

    } catch (err) {
        console.error('SQL error', err);
    }
};

const getCustName = async (params) => {
    try {
        const pool = await poolPromise;
        let mquery = `select * from tbl_customer where name like '%${params}%' and deleted =false`
        const result = await poolPromise.query(mquery);
        return result.rows
    } catch (err) {
        console.error('SQL error', err);
    }
};



const getCustUName = async (params) => {
    try {
        const pool = await poolPromise;
        let mquery = `select * from tbl_customer where user_name like '%${params}%' and deleted =false`
        const result = await poolPromise.query(mquery);
        return result.rows
    } catch (err) {
        console.error('SQL error', err);
    }
};


const getCustomer = async (params) => {
    try {
        console.log(params)
        let startpoint = params * 10
        const pool = await poolPromise;
        let mquery = `select * from tbl_customer where deleted = false ORDER BY id LIMIT 10 OFFSET ${startpoint};`
        const result = await poolPromise.query(mquery);
        return result.rows

    } catch (err) {
        console.error('SQL error', err);
    }
};





module.exports = {
    getUser,
    getUserByMail,
    getUserID,
    getUserName,
    getUserRole,
    getUserUName,
    getCustID,
    getCustName,
    getCustUName,
    getCustomer
};
