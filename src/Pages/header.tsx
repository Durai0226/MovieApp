import React, { useState } from 'react'
import './style.css'
import myImage from '../assets/logo.svg';
import SignInModel from '../components/signInModel';
import SignUpModel from '../components/signUpModel';
import { useNavigate } from 'react-router-dom';
const Header = ({isSigned}) => {
  const [OpenModel, setOpenModel] = useState(false)
  const [signUpModel,setSignUpModel]=useState(false)
  const navigate = useNavigate();

  return (
    <>
    { OpenModel &&
    <SignInModel setOpenModal={setOpenModel} setSignUpModel={setSignUpModel}></SignInModel>}
    { signUpModel &&
    <SignUpModel setOpenModal={setSignUpModel} setSignInModel={setOpenModel}></SignUpModel>}
    <div className='headerDiv'>
        <div className='Container'>
<div   className='Logo'>
<img onClick={()=>{navigate('/')}} src={myImage} alt='logo' />
{!isSigned ?
<span className='text'>Explore</span>:<span onClick={()=>{navigate('/movielist')}} className='text'>MovieList</span>}
</div>
{!isSigned ?
<div className='Btn-Container'>
    <div>
      <button className='Btn1'  onClick={(e) => {
                    e.preventDefault()
                    setOpenModel(true)
                  }}  >Sign in</button>
    </div>
     <div>
      <button className='Btn2' onClick={(e) => {
                    e.preventDefault()
                    setSignUpModel(true)
                  }}   >Sign up</button>
    </div>
</div>:<div onClick={()=>{navigate('/companyInfo')}} className='Btn2'><span>CompanyInfo</span></div>}

</div>
        
    </div>
    </>
  )
}

export default Header