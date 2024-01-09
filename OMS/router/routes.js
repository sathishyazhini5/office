const express = require('express');
const router = express.Router();
const organ = require('../organization/index')
const branch = require('../branch/index')

let routes = (app)=>{
 
// organization-----

router.post('/save_organ',organ.save_organization);
router.get('/getbyid/:org_id',organ.getby_orgid);
router.get('/getall',organ.getalldata);
router.put('/update/:org_id',organ.update_organ)
router.delete('/delete_organ/:org_id',organ.delete_organization);
// ---------------------------------------------------------------------------------------------------
// Branch-----

router.post('/savebranch',branch.saveBranch)
router.get('/getbranch/:branch_id',branch.getbrachid)
router.get('/getdata',branch.getallbranch)
router.put('/updatebranch/:branch_id',branch.updatebrach)
router.delete('/delete_branch/:branch_id',branch.delete_data)
router.post('/saveleave',organ.save_employee)
router.get('/getall1',organ.getdetails)
// ----------------------------------------------------------------------------------------------------
    app.use("/api",router)
}

module.exports = routes