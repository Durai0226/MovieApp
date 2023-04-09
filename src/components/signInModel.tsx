import React, { useState } from "react";
import "./signInModel.css";
import myImage from "../assets/logo.svg";
import close from "../assets/close.svg";
import google from "../assets/google.svg";
import eye from "../assets/eye.svg";
import { useNavigate } from "react-router-dom";
const SignInModel = ({ setOpenModal,setSignUpModel }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');
const [invalid,setInvalid]=useState('')
 
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

 const navigate = useNavigate();

console.log(email,password)

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const validateForm = () => {
    let isValid = true;
  
  
    // validate email
    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    } else {
      setEmailError('');
    }
  
    // validate password
    if (!password.trim()) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }}
  const myValue:any= localStorage.getItem("formData");
 const parsedate=JSON.parse(myValue)
  const onSubmitClick = (e) => {
    e.preventDefault();
  validateForm()
    if(parsedate.email === email && parsedate.password === password){
console.log('sucess')
navigate('/movielist')
    }
    else{
    //  setInvalid('Incorrect email or password')
    }
   
  
  };
  
    


  return (
    <div className="modelBackground">
      <div className="modelContainer">
        <div className="Logo1">
          <div className="contain">
            <img src={myImage} alt="logo" />
            <span className="text1">Movie App</span>
          </div>
          <div className="close"  onClick={(e) => {
                    e.preventDefault()
                    setOpenModal(false)
                  }}>
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="inform">
            <span className="para">To have full experience of the Movie app, please create an account or sign in</span>
        </div>
        <div>
        <a>
            <div className="google">
              
            <img className="img" src={google} alt="google" />  
            <span className="text2">Log in with Google</span> 
            </div>
            </a>
        </div>
        <div className="line">
          <div className="line1"></div>
          <span className="or">Or</span>
          <div className="line1"></div>
        </div>
        <form >
       <span className="inputLabel">
          <label className="label1">Email</label></span>
          <span className="inputContainer">
          <input  value={email} onChange={(e)=>{setEmail(e.target.value);validateForm()}}  className="input1" type='text'></input>
          {emailError && <span className="error">{emailError}</span>}
     </span>
     
        <span className="inputLabel" >
          <label className="label1">Password</label>
          </span>
          <span className="inputContainer">
          <input value={password} onChange={(e)=>{setPassword(e.target.value);validateForm()}} className="input1" type= {showPassword ? 'text' : 'password'}></input>
          <img className="img1" onClick={togglePassword} src={eye} alt="eye" />  
         
        
        </span>
        {passwordError && <span className="error">{passwordError}</span>}
        {invalid && <span className="error">{invalid}</span>}
      
        </form>
        <div className="forgotDiv">
          <span className="forgot">Forgot your password ?</span>
        </div>

        <div className="BtnContainer">
          <button type="submit" onClick={onSubmitClick} className="signBtn">Sign In</button>
        </div>
        <div className="signupContainer">
          <span className="para2">  Doesn't have an account?  </span>
          <span className="signup" onClick={()=>{setSignUpModel(true)}}>Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default SignInModel;





