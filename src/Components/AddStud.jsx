import React from 'react'
import Navbar from './Navbar'


const AddStud = () => {
  return (
    <div>
      <Navbar/>
      <h1><center>Add Student Details</center></h1>
      
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

          <div className="row">
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
              <label htmlFor="" className="form-label">Student Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
            <label htmlFor="" className="form-label">Student Admission No</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
            <label htmlFor="" className="form-label">Roll No</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
            <label htmlFor="" className="form-label">Parent Name</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">College Name</label>
            <textarea name="" id="" className="form-control"></textarea>
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
            <label htmlFor="" className="form-label">Date of Birth</label>
            <input type="date" name="" id="" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
            <label htmlFor="" className="form-label">Email ID</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
            <label htmlFor="" className="form-label">Password</label>
            <input type="password" name="" id="" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
            <label htmlFor="" className="form-label">Confirm Password</label>
            <input type="password" name="" id="" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <br /><br />
             <center><button className="btn btn-success">Add Student</button></center> 
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AddStud
