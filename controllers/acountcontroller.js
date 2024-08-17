const { getUserID, getUserName, getUserGmail , getUserUName, getUserRole, getCustID, getCustName, getCustGmail , getCustUName, getCustRole, getCustPhone } = require('../models/acountModel');

const getID = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) res.json([])
        const user = await getUserID(param);
        res.json(user);
    } catch (err) {
        console.log(err)
        res.status(500).send('Error param');
    }
};

const getName = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) res.json([])
        const user = await getUserName(param);
        res.json(user);
    } catch (err) {
        console.log(err)
        res.status(500).send('Error param');
    }
};

const getGmail = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) res.json([])
        const user = await getUserGmail(param);
        res.json(user);
    } catch (err) {
        console.log(err)
        res.status(500).send('Error param');
    }
};

const getRole = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) res.json([])
        const user = await getUserRole(param);
        res.json(user);
    } catch (err) {
        console.log(err)
        res.status(500).send('Error param');
    }
};

const getUName = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) res.json([])
        const user = await getUserUName(param);
        res.json(user);
    } catch (err) {
        console.log(err)
        res.status(500).send('Error param');
    }
};

//////

const getCusID = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) res.json([])
        const user = await getCustID(param);
        res.json(user);
    } catch (err) {
        console.log(err)
        res.status(500).send('Error param');
    }
};

const getCusName = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) res.json([])
        const user = await getCustName(param);
        res.json(user);
    } catch (err) {
        console.log(err)
        res.status(500).send('Error param');
    }
};

const getCusGmail = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) res.json([])
        const user = await getCustGmail(param);
        res.json(user);
    } catch (err) {
        console.log(err)
        res.status(500).send('Error param');
    }
};

const getCusRole = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) res.json([])
        const user = await getCustRole(param);
        res.json(user);
    } catch (err) {
        console.log(err)
        res.status(500).send('Error param');
    }
};

const getCusUName = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) res.json([])
        const user = await getCustUName(param);
        res.json(user);
    } catch (err) {
        console.log(err)
        res.status(500).send('Error param');
    }
};

const getCusPhone = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) res.json([])
        const user = await getCustPhone(param);
        res.json(user);
    } catch (err) {
        console.log(err)
        res.status(500).send('Error param');
    }
};

module.exports = {
    getID,
    getName,
    getGmail,
    getRole,
    getUName,
    getCusID,
    getCusName,
    getCusGmail,
    getCusRole,
    getCusUName,
    getCusPhone

};
