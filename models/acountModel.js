const poolPromise = require('../config/dbConfig');

const getUserID = async (params) => {
    try {
        console.log(params)
        const pool = await poolPromise;
        let mquery = `select * from tbl_user where [id] = ${params} and Deleted =0`
        const result = await pool.request().query(mquery);
        return result.recordset

    } catch (err) {
        console.error('SQL error', err);
    }
};

const getUserName = async (params) => {
    try {
        const pool = await poolPromise;
        let mquery = `select * from tbl_user where Name like '%${params}%' and Deleted =0`
        const result = await pool.request().query(mquery);
        return result.recordset
    } catch (err) {
        console.error('SQL error', err);
    }
};

const getUserGmail = async (params) => {
    try {
        const pool = await poolPromise;
        let mquery = `select * from tbl_user where Email like '%${params}%' and Deleted =0`
        const result = await pool.request().query(mquery);
        return result.recordset
    } catch (err) {
        console.error('SQL error', err);
    }
};

const getUserRole = async (params) => {
    try {
        const pool = await poolPromise;
        let mquery = `select * from tbl_user where Roleid =${params} and Deleted =0`
        const result = await pool.request().query(mquery);
        return result.recordset
    } catch (err) {
        console.error('SQL error', err);
    }
};

const getUserUName = async (params) => {
    try {
        const pool = await poolPromise;
        let mquery = `select * from tbl_user where USER_NAME like '%${params}%' and Deleted =0`
        const result = await pool.request().query(mquery);
        return result.recordset
    } catch (err) {
        console.error('SQL error', err);
    }
};

////////////////

const getCustID = async (params) => {
    try {
        console.log(params)
        const pool = await poolPromise;
        let mquery = `select * from tbl_customer where [id] = ${params} and Deleted =0`
        const result = await pool.request().query(mquery);
        return result.recordset

    } catch (err) {
        console.error('SQL error', err);
    }
};

const getCustName = async (params) => {
    try {
        const pool = await poolPromise;
        let mquery = `select * from tbl_customer where Name like '%${params}%' and Deleted =0`
        const result = await pool.request().query(mquery);
        return result.recordset
    } catch (err) {
        console.error('SQL error', err);
    }
};

const getCustGmail = async (params) => {
    try {
        const pool = await poolPromise;
        let mquery = `select * from tbl_customer where Email like '%${params}%' and Deleted =0`
        const result = await pool.request().query(mquery);
        return result.recordset
    } catch (err) {
        console.error('SQL error', err);
    }
};

const getCustRole = async (params) => {
    try {
        const pool = await poolPromise;
        let mquery = `select * from tbl_customer where Roleid =${params} and Deleted =0`
        const result = await pool.request().query(mquery);
        return result.recordset
    } catch (err) {
        console.error('SQL error', err);
    }
};

const getCustUName = async (params) => {
    try {
        const pool = await poolPromise;
        let mquery = `select * from tbl_customer where USER_NAME like '%${params}%' and Deleted =0`
        const result = await pool.request().query(mquery);
        return result.recordset
    } catch (err) {
        console.error('SQL error', err);
    }
};

const getCustPhone = async (params) => {
    try {
        const pool = await poolPromise;
        let mquery = `select * from tbl_customer where Phone like '%${params}%' and Deleted =0`
        const result = await pool.request().query(mquery);
        return result.recordset
    } catch (err) {
        console.error('SQL error', err);
    }
};



module.exports = {
    getUserID,
    getUserName,
    getUserGmail,
    getUserRole,
    getUserUName,
    getCustID,
    getCustName,
    getCustGmail,
    getCustRole,
    getCustUName,
    getCustPhone
};
