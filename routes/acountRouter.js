const express = require('express');
const router = express.Router();

const { getID, getName, getGmail, getRole, getUName, getCusID, getCusName, getCusGmail, getCusRole, getCusUName, getCusPhone} = require('../controllers/acountcontroller');



router.get('/api/user/id', getID);
router.get('/api/user/name', getName);
router.get('/api/user/gmail', getGmail);
router.get('/api/user/role', getRole);
router.get('/api/user/uname', getUName);

router.get('/api/customer/id', getCusID);
router.get('/api/customer/name', getCusName);
router.get('/api/customer/gmail', getCusGmail);
router.get('/api/customer/role', getCusRole);
router.get('/api/customer/uname', getCusUName);
router.get('/api/customer/phone', getCusPhone);

module.exports = router;
