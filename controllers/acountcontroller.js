const { getUser, getUserByMail, getUserID, getUserName , getUserUName, getUserRole, getCustID, getCustName , getCustUName , getCustomer} = require('../models/acountModel');

const getUserAll = async (req, res) => {
    try{
            const user = await getUser();
            return res.json(user)
        }
       catch (err) {
        console.log(err)
        console.log(res)
        res.status(500).send({'error':'Something went wrong. Please try again later.'});
    }
};
const authUser = async (req, res) => {
    console.log("req", req.body.email)
    const {email, password} = req.body
    console.log("email", email)
    console.log("password", password)
    const getUser = await getUserByMail(email)
    const userData = getUser[0]
    console.log("test",userData.password)
    try {
        if(userData){    
            if(userData.password === password){
            return res.status(200).json({
                user: {
                    email: userData.email,
                    password: userData.password,
                },
                message: "login is successfully",
                error: 0
            })
        }
    } else {
        return res.status(401).json({ message: 'Email hoặc mật khẩu không chính xác' });
    }
} catch (error) {
        return res.status(500).json({
            error: 1,
            message: `${error}`
        })
    }
}



const getID = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) {
         res.status(403).send({'error':'Missing parameter'});
        }else{
            let num = parseInt(param, 10);
            if(!isNaN(num) && num.toString() === param){
                const user = await getUserID(param);
                if(user === "error")  res.status(500).send({'error':'Something went wrong. Please try again later.'});
                else res.json(user);
            }else{
               res.status(402).send({'error':'Parameter incorrect format'});
            }
        }

    } catch (err) {
        console.log(err)
        res.status(500).send({'error':'Something went wrong. Please try again later.'});
    }
};

const getName = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) {
         res.status(403).send({'error':'Missing parameter'});
        }else{
            const user = await getUserName(param);
            res.json(user);
        }
        
    } catch (err) {
        console.log(err)
        res.status(500).send({'error':'Something went wrong. Please try again later.'});
    }
};


const getRole = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) {
         res.status(403).send({'error':'Missing parameter'});
        }else{
            let num = parseInt(param, 10);
            if(!isNaN(num) && num.toString() === param){
                const user = await getUserRole(param);
                if(user === "error")  res.status(500).send({'error':'Something went wrong. Please try again later.'});
                else res.json(user);
            }else{
            res.status(402).send({'error':'Parameter incorrect format'});
            }
        }


    } catch (err) {
        console.log(err)
        res.status(500).send({'error':'Something went wrong. Please try again later.'});
    }
};

const getUName = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) {
         res.status(403).send({'error':'Missing parameter'});
        }else{
            const user = await getUserUName(param);
            res.json(user);
        }
       
    } catch (err) {
        console.log(err)
        res.status(500).send({'error':'Something went wrong. Please try again later.'});
    }
};

//////

const getCusID = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) {
         res.status(403).send({'error':'Missing parameter'});
        }else{
            let num = parseInt(param, 10);
            if(!isNaN(num) && num.toString() === param){
                const user = await getCustID(param);
                if(user === "error")  res.status(500).send({'error':'Something went wrong. Please try again later.'});
                else res.json(user);
            }else{
            res.status(402).send({'error':'Parameter incorrect format'});
            }
        }
    } catch (err) {
        console.log(err)
        res.status(500).send({'error':'Something went wrong. Please try again later.'});
    }
};

const getCusName = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) {
         res.status(403).send({'error':'Missing parameter'});
        }else{
            const user = await getCustName(param);
            res.json(user);
        }
        
    } catch (err) {
        console.log(err)
        res.status(500).send({'error':'Something went wrong. Please try again later.'});
    }
};


const getCusUName = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) {
         res.status(403).send({'error':'Missing parameter'});
        }else{
            const user = await getCustUName(param);
            res.json(user);
        }
        
    } catch (err) {
        console.log(err)
        res.status(500).send({'error':'Something went wrong. Please try again later.'});
    }
};

const getcustomerall = async (req, res) => {
    try {
        const param = req.query.pr
        if(!param) {
         res.status(403).send({'error':'Missing parameter'});
        }else{
            let num = parseInt(param, 10);
            if(!isNaN(num) && num.toString() === param){
                const user = await getCustomer(param);
                if(user === "error")  res.status(500).send({'error':'Something went wrong. Please try again later.'});
                else res.json(user);
            }else{
            res.status(402).send({'error':'Parameter incorrect format'});
            }

        }

    } catch (err) {
        console.log(err)
        res.status(500).send({'error':'Something went wrong. Please try again later.'});
    }
};



module.exports = {
    getUserAll,
    getID,
    getName,
    getRole,
    getUName,
    getCusID,
    getCusName,
    getCusUName,
    getcustomerall,
    authUser
};
