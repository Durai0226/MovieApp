import React from 'react'
import Header from '../Pages/header'
import "./info.css";

const CompanyInfo = () => {
    
    return (
      <>
    
        <Header isSigned={true}></Header>
        <div className="card">
        <div>
          <span>Company :<p>Geeksynergy Technologies Pvt Ltd</p></span>
          <span>Address :<p> Sanjayanagar, Bengaluru-56</p></span>
          <span>Phone :<p> XXXXXXXXX09</p></span>
          <span>Email : <p>Geeksynergy Technologies@gmail.com</p></span>
        </div>
      </div>
      </>
    )
  }
  




export default CompanyInfo;