import React, {useState}  from 'react'

/**
* @author: Balu Rathod 
* @function 
**/

export default function EntryFarm () {
  
  const [empDetail, setEmpDetail ] = useState(0);
  
  const handleOnChange = (event) => {
    console.log(event, event.target.value);
    setEmpDetail(event.target.value);
  }

  const handleAddEmpDetail = () => {
    alert('handleAdd clicked');
    setEmpDetail(empDetail);
  }


  return(
    <div className="container">
    <h4>Employee Details</h4>
      <div className="mb-3">
        <label for="formControlName" className="form-label">Name</label>
        <input type="name" className="form-control" onChange={handleOnChange} id="formControlName" placeholder="Enter name" />
        <label for="formControlAge" className="form-label">Age</label>
        <input type="age" className="form-control"  onChange={handleOnChange} id="formControlAge" placeholder="Enter age" />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleAddEmpDetail}>Add</button>
    </div>
   )

 }