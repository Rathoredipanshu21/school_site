import React from 'react';
import './SchoolFaculty.css';
import AboutSchool from './AboutSchool';
import NavBuilding from './NavBuilding';

const SchoolFaculty = () => {
  return (
    <>
    <NavBuilding/>
    <div className="school-faculty">
      <hr />
      <h3>Our Faculty and Staff</h3>
      <div className="faculty-table">
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Position</th>
              <th>Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><img src="url_to_image" alt="Faculty" /></td>
              <td>John Doe</td>
              <td>Principal</td>
              <td>PhD in Education</td>
            </tr>
            
          </tbody>
        </table>

      </div>
    </div>
    </>

    

  );
};

export default SchoolFaculty;
