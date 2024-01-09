const db1 = require('../config/db')
const Branch_details = async (data) => {
    try {
      const {
        branch_id,
        branch_name,
        branch_address_line1,
        branch_address_line2,
        branch_address_line3,
        city,
        pincode,
        state,
        country,
        pan_no,
        gst_no
      } = data;
  
      const query = `INSERT INTO employee.branch (branch_id, branch_name, branch_address_line1, branch_address_line2, branch_address_line3, city, pincode, state, country, pan_no, gst_no)
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;
  
      const values = [
        branch_id,
        branch_name,
        branch_address_line1,
        branch_address_line2,
        branch_address_line3,
        city,
        pincode,
        state,
        country,
        pan_no,
        gst_no
      ];
  
      const result = await db1.query(query, values);
  
      if (result.rowCount > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error saving branch data:', error);
      throw error;
    }
  };

  const getBranch_Id = async (branch_id) => {
    try {
      const query = `SELECT * FROM employee.branch WHERE branch_id = $1`;
      const result = await db1.query(query, [branch_id]);
  
      if (result.rowCount > 0) {
        return result.rows[0]; 
      } else {
        return null; 
      }
    } catch (error) {
      console.error('Error fetching branch details:', error);
      throw error;
    }
  };
  
  const getAlldata = async () => {
    try {
      const query = 'SELECT * FROM employee.branch';
      const result = await db1.query(query);
  
      return result.rows; 
    } catch (error) {
      console.error('Error fetching all branches:', error);
      throw error;
    }
  };
  const updateBranchById = async (branch_id, updatedData) => {
    try {
      const {
        branch_name,
        branch_address_line1,
        branch_address_line2,
        branch_address_line3,
        city,
        pincode,
        state,
        country,
        pan_no,
        gst_no
      } = updatedData;
  
      const query = `UPDATE employee.branch 
                     SET branch_name = $1, 
                     branch_address_line1 = $2, 
                     branch_address_line2 = $3, 
                     branch_address_line3 = $4, 
                         city = $5, 
                         pincode = $6, 
                         state = $7, 
                         country = $8, 
                         pan_no = $9, 
                         gst_no = $10 
                     WHERE branch_id = $11`;
  
      const values = [
        branch_name,
        branch_address_line1,
        branch_address_line2,
        branch_address_line3,
        city,
        pincode,
        state,
        country,
        pan_no,
        gst_no,
        branch_id
      ];
  
      const result = await db1.query(query, values);
  
      if (result.rowCount > 0) {
        return true; 
      } else {
        return false; 
      }
    } catch (error) {
      console.error('Error updating branch:', error);
      throw error;
    }
  };
  
  const deleteBranchById = async (branch_id) => {
    try {
      const query = 'DELETE FROM employee.branch WHERE branch_id = $1';
      const result = await db1.query(query, [branch_id]);
  
      if (result.rowCount > 0) {
        return true;
      } else {
        return false; 
      }
    } catch (error) {
      console.error('Error deleting branch:', error);
      throw error;
    }
  };
  

  module.exports = {
    Branch_details,
    getBranch_Id,
    getAlldata,
    updateBranchById,
    deleteBranchById
  }