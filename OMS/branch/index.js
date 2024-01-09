const branch_service = require('./service')

const saveBranch = async (req, res) => {
    const branchData = req.body; 
  
    try {
      const savedBranch = await branch_service.Branch_details(branchData);
  
      if (savedBranch) {
        res.status(201).json({ message: 'Branch data saved successfully' });
      } else {
        res.status(400).json({ error: 'Failed to save branch data' });
      }
    } catch (error) {
      console.error('Error saving branch data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  const getbrachid = async (req, res) => {
    const branch_id = req.params.branch_id; 
  
    try {
      const branchDetails = await branch_service.getBranch_Id(branch_id);
  
      if (branchDetails) {
        res.status(200).json(branchDetails); 
      } else {
        res.status(404).json({ error: 'Branch not found' }); 
      }
    } catch (error) {
      console.error('Error fetching branch details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  const getallbranch = async (req, res) => {
    try {
      const allBranches = await branch_service.getAlldata();
  
      if (allBranches.length > 0) {
        res.status(200).json(allBranches); 
      } else {
        res.status(404).json({ error: 'No branches found' }); 
      }
    } catch (error) {
      console.error('Error fetching all branches:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  const updatebrach = async (req, res) => {
    const branch_id = req.params.branch_id;
    const updatedData = req.body; 
  
    try {
      const isUpdated = await branch_service.updateBranchById(branch_id, updatedData);
  
      if (isUpdated) {
        res.status(200).json({ message: 'Branch updated successfully' }); 
      } else {
        res.status(404).json({ error: 'Branch not found or could not be updated' }); 
      }
    } catch (error) {
      console.error('Error updating branch:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  const delete_data = async (req, res) => {
    const branch_id = req.params.branch_id;
  
    try {
      const isDeleted = await branch_service.deleteBranchById(branch_id);
  
      if (isDeleted) {
        res.status(200).json({ message: 'Branch deleted successfully' }); 
      } else {
        res.status(404).json({ error: 'Branch not found or could not be deleted' }); 
      }
    } catch (error) {
      console.error('Error deleting branch:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  module.exports ={
    saveBranch,
    getbrachid,
    getallbranch,
    updatebrach,
    delete_data
  }