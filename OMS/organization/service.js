const db = require('../config/db')

const save_organ = async (data) => {
    const {
      org_id,
      org_name,
      org_address_line1,
      org_address_line2,
      org_address_line3,
      city,
      pincode,
      state,
      country,
      pan_no,
      gst_no,
      company_type,
      logo_path,
      empid_prefix,
      empid_autogenerate
    } = data;
  
    try {
      const query = `
        INSERT INTO employee.organization (
          org_id,
          org_name,
          org_address_line1,
          org_address_line2,
          org_address_line3,
          city,
          pincode,
          state,
          country,
          pan_no,
          gst_no,
          company_type,
          logo_path,
          empid_prefix,
          empid_autogenerate
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
      `;
      const values = [
        org_id,
        org_name,
        org_address_line1,
        org_address_line2,
        org_address_line3,
        city,
        pincode,
        state,
        country,
        pan_no,
        gst_no,
        company_type,
        logo_path,
        empid_prefix,
        empid_autogenerate
      ];
  
      const result = await db.query(query, values);
  
      return result.rowCount;
    } catch (err) {
      console.error('Error executing query:', err);
      throw err;
    }
  };



const get_orgid = async (org_id) => {
    try {
      const query = 'SELECT * FROM employee.organization WHERE org_id = $1';
      const result = await db.query(query, [org_id]);
  
      if (result.rows.length > 0) {
        return result.rows[0]; // Return the organization data if found
      } else {
        return null; // Return null if organization with org_id is not found
      }
    } catch (err) {
      console.error('Error executing query:', err);
      throw err;
    }
  };

  const getAllOrganizations = async () => {
    try {
      const query = 'SELECT * FROM employee.organization';
      const result = await db.query(query);
  
      return result.rows; // Return array of organization data
    } catch (err) {
      console.error('Error executing query:', err);
      throw err;
    }
  };


  
const updateOrganizationById = async (org_id, updatedData) => {
    try {
      // Construct the query based on your database schema
      const query = `UPDATE employee.organization 
                     SET org_name = $1, 
                         org_address_line1 = $2, 
                         org_address_line2 = $3, 
                         city = $4, 
                         pincode = $5, 
                         state = $6, 
                         country = $7, 
                         pan_no = $8, 
                         gst_no = $9, 
                         company_type = $10, 
                         logo_path = $11, 
                         empid_prefix = $12, 
                         empid_autogenerate = $13
                        
                     WHERE org_id = $14`;
  
      const values = [
        updatedData.org_name,
        updatedData.org_address_line1,
        updatedData.org_address_line2,
        updatedData.city,
        updatedData.pincode,
        updatedData.state,
        updatedData.country,
        updatedData.pan_no,
        updatedData.gst_no,
        updatedData.company_type,
        updatedData.logo_path,
        updatedData.empid_prefix,
        updatedData.empid_autogenerate,
        org_id
      ];
  
      const result = await db.query(query, values);
  
      if (result.rowCount > 0) {
        return {}; // Return an empty object for success
      } else {
        const organizationExistsQuery = 'SELECT COUNT(*) FROM employee.organization WHERE org_id = $1';
        const organizationExistsResult = await db.query(organizationExistsQuery, [org_id]);
        const organizationExists = organizationExistsResult.rows[0].count > 0;
  
        if (!organizationExists) {
          return { error: 'Organization not found' }; // Return error if organization doesn't exist
        } else {
          return { error: 'Update failed' }; // Return error if update query failed for other reasons
        }
      }
    } catch (err) {
      console.error('Error executing update query:', err);
      throw err;
    }
  }
  
  const delete_by_org_id = async (org_id) => {
    try {
      const query = 'DELETE FROM employee.organization WHERE org_id = $1';
      const result = await db.query(query, [org_id]);
  
      return result.rowCount; // Returns the number of rows affected by the deletion
    } catch (err) {
      console.error('Error executing delete query:', err);
      throw err;
    }
  };
  const save_employee_leave = async (data) => {
    const {
      emp_id,
      leave_type,
      from_date,
      to_date,
      no_of_days,
      reason,
      description,
      applied_date,
      approval_by,
      status,
    } = data;
  
    try {
      const query = `
        INSERT INTO employee.leave_apply (
          emp_id,
          leave_type,
          from_date,
          to_date,
          no_of_days,
          reason,
          description,
          applied_date,
          approval_by,
          status -- Remove the comma here
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      `;
      const values = [
        emp_id,
        leave_type,
        from_date,
        to_date,
        no_of_days,
        reason,
        description,
        applied_date,
        approval_by,
        status,
      ];
  
      const result = await db.query(query, values);
  
      return result.rowCount;
    } catch (err) {
      console.error('Error executing query:', err);
      throw err;
    }
  };
  // const get_employee_leave = async (empId) => {
  //   try {
  //     const query = `
  //       SELECT
  //         emp_id,
  //         leave_type,
  //         from_date,
  //         to_date,
  //         no_of_days,
  //         reason,
  //         description,
  //         applied_date,
  //         approval_by,
  //         status
  //       FROM
  //         employee.leave_apply
  //       WHERE
  //         emp_id = $1
  //     `;
  //     const values = [empId];
  
  //     const result = await db.query(query, values);
  //     return result.rows; // Return the fetched rows (leave application details)
  //   } catch (err) {
  //     console.error('Error executing query:', err);
  //     throw err;
  //   }
  // };
  const get_all_employee_leave = async () => {
    try {
      const query = `
        SELECT
          emp_id,
          leave_type,
          from_date,
          to_date,
          no_of_days,
          reason,
          description,
          applied_date,
          approval_by,
          status
        FROM
          employee.leave_apply
      `;
  
      const result = await db.query(query);
      console.log('Result:', result.rows); // Log the fetched rows
  
      return result.rows; // Return all fetched rows (leave application details)
    } catch (err) {
      console.error('Error executing query:', err);
      throw err;
    }
  };
  
  
  
  

module.exports = {
    save_organ,
    delete_by_org_id,
    get_orgid,
    getAllOrganizations,
    updateOrganizationById,
    save_employee_leave,
    get_all_employee_leave
}