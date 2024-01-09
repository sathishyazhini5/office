const org_service = require('./service')

const save_organization = async (req, res) => {
    try {
      const OrganizationData = req.body; // Assuming the request body contains organization data
      const rowCount = await org_service.save_organ (OrganizationData); // Use the new function to save organization data
      res.status(201).json({ message: `${rowCount} row(s) inserted successfully.` });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const save_employee = async(req,res)=>
  {
    try {
      const employee = req.body
      const details = await org_service.save_employee_leave(employee)
      res.status(201).json({message:`${details}details sroed succesfully`})
    } catch (error) {
      res.status(500).json({error:'Internal server Error'})
    }
   
  }


const getby_orgid = async (req, res) => {
    const org_id = req.params.org_id;
  
    try {
      const organization = await org_service.get_orgid(org_id);
  
      if (organization) {
        res.status(200).json(organization);
      } else {
        res.status(404).json({ message: 'Organization not found' });
      }
    } catch (error) {
      console.error('Error fetching organization data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  const getalldata =async (req, res) => {
    try {
      const organizations = await org_service.getAllOrganizations();
  
      if (organizations.length > 0) {
        res.status(200).json(organizations);
      } else {
        res.status(404).json({ message: 'No organizations found' });
      }
    } catch (error) {
      console.error('Error fetching organizations:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }


const update_organ =  async (req, res) => {
    const org_id = req.params.org_id;
    const updatedData = req.body; // Updated data sent in the request body
  
    try {
      const updatedOrganization = await org_service.updateOrganizationById(org_id, updatedData);
  
      if (updatedOrganization.error) {
        res.status(404).json({ error: updatedOrganization.error });
      } else {
        res.status(200).json({ message: 'Organization updated successfully' });
      }
    } catch (error) {
      console.error('Error updating organization:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  const delete_organization = async (req, res) => {
    const org_id = req.params.org_id; 
  
    try {
      const rowCount = await org_service.delete_by_org_id(org_id);
  
      if (rowCount > 0) {
        res.status(200).json({ message: ' deleted successfully' });
      } else {
        res.status(404).json({ message: 'organization not found or already deleted' });
      }
    } catch (error) {
      console.error('Error during organization deletion:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  // Assuming you have an Express route handling the GET request for leave details
const getdetails =  async (req, res) => {
  try {
    // const empId = req.params.empId;
    const leaveDetails = await org_service.get_all_employee_leave();
    res.json(leaveDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


  module.exports = {
    save_organization,
    delete_organization,
    getby_orgid,
    getalldata,
    update_organ,
    save_employee,
    getdetails
  }