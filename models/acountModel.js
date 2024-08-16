const { poolPromise } = require('../config/dbConfig');

const getUserID = async (params) => {
    try {

        return "hello day la user id:" + params
    } catch (err) {
        console.error('SQL error', err);
    }
};

const getUserName = async (params) => {
    try {

        return "hello day la user acc:" + params
    } catch (err) {
        console.error('SQL error', err);
    }
};

const getUserGmail = async (params) => {
    try {
        return "hello day la user gmail:" + params
    } catch (err) {
        console.error('SQL error', err);
    }
};

const getUserRole = async (params) => {
    try {
        return "hello day la list user role:" + params
    } catch (err) {
        console.error('SQL error', err);
    }
};

const getUserUName = async (params) => {
    try {
        return "hello day la list user name =:" + params
    } catch (err) {
        console.error('SQL error', err);
    }
};

////////////////

const getCustID = async (params) => {
    try {

        return "hello day la customer id:" + params
    } catch (err) {
        console.error('SQL error', err);
    }
};

const getCustName = async (params) => {
    try {

        return "hello day la customer acc:" + params
    } catch (err) {
        console.error('SQL error', err);
    }
};

const getCustGmail = async (params) => {
    try {
        return "hello day la customer gmail:" + params
    } catch (err) {
        console.error('SQL error', err);
    }
};

const getCustRole = async (params) => {
    try {
        return "hello day la list customer role:" + params
    } catch (err) {
        console.error('SQL error', err);
    }
};

const getCustUName = async (params) => {
    try {
        return "hello day la list customer name =:" + params
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
};
