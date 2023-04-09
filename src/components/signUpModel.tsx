import React, { useEffect, useState } from "react";
import "./signInModel.css";
import myImage from "../assets/logo.svg";
import close from "../assets/close.svg";
import google from "../assets/google.svg";
import eye from "../assets/eye.svg";
const SignUpModel = ({ setOpenModal,setSignInModel }) => {
    const [showPassword, setShowPassword] = useState(false);
    const[resetPassword,setResetPassword]=useState(false)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [userName,setUserName]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')
    const [userNameError, setUserNameError] = useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');
const [confirmPasswordError, setConfirmPasswordError] = useState('');
const [userNameFocused, setUserNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

    const [form,setForm]=useState({
      userName:"",
      email:"",
      password:"",
      confirmPassword:""
    })

    const clickHandler=()=>{
      setOpenModal(false);
      setSignInModel(true)
    }
    useEffect(() => {
      if (userNameFocused) {
        // validate userName
        if (userName.trim() === '') {
          setUserNameError('Username is required');
        } else {
          setUserNameError('');
        }
      }
    }, [userNameFocused, userName]);
  
    useEffect(() => {
      if (emailFocused) {
        // validate email
        if (email.trim() === '') {
          setEmailError('Email is required');
     
        }  else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
          setEmailError('Invalid email format');
        }
        
        else {
          setEmailError('');
        }
      }
    }, [emailFocused, email]);
  
    useEffect(() => {
      if (passwordFocused) {
        // validate password
        if (password.trim() === '') {
          setPasswordError('Password is required');
        } else if (password.length < 6) {
          setPasswordError('Password must be at least 6 characters');
        } else {
          setPasswordError('');
        }
      }
    }, [passwordFocused, password]);
  
    useEffect(() => {
      if (confirmPasswordFocused) {
        // validate confirmPassword
        if (confirmPassword.trim() === '') {
          setConfirmPasswordError('Confirm password is required');
        } else if (confirmPassword !== password) {
          setConfirmPasswordError('Passwords do not match');
        } else {
          setConfirmPasswordError('');
        }
      }
    }, [confirmPasswordFocused, confirmPassword, password]);
  
    const validateForm = () => {
      let isValid = true;
    
      // validate username
      if (!userName.trim()) {
        setUserNameError('Username is required');
        isValid = false;
      } else {
        setUserNameError('');
      }
    
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
      }
    
      // validate confirm password
      if (!confirmPassword.trim()) {
        setConfirmPasswordError('Please confirm password');
        isValid = false;
      } else if (confirmPassword !== password) {
        setConfirmPasswordError('Passwords do not match');
        isValid = false;
      } else {
        setConfirmPasswordError('');
      }
    
      return isValid;
    };

    const onSummitHandle=()=>{

      setForm({
     ...form,
     userName:userName,
     email:email,
     password:password,
     confirmPassword:confirmPassword
    
      })
      localStorage.setItem('formData', JSON.stringify({
        ...form,
        userName:userName,
        email:email,
        password:password,
        confirmPassword:confirmPassword
       
         }));

    }
    console.log(form)
    const togglePassword = () => {
      setShowPassword(!showPassword);
    };
    const toggleResetPassword = () => {
        setResetPassword(!resetPassword);
      };
      const onSubmitClick=(e)=>{
        e.preventDefault()
       if(validateForm()){ onSummitHandle()
      clickHandler()
      }
      }
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
        <form onSubmit={onSummitHandle}>
        <span className="inputLabel" >
          <label className="label1">Username</label></span>
          <span className="inputContainer">
          <input value={userName}   onChange={(e) => {
            setUserName(e.target.value);
            setUserNameFocused(true);
          }}
          onBlur={() => setUserNameFocused(false)} className="input1" type='text'></input>
           {userNameError && <span className="error">{userNameError}</span>}
        </span>
        <span className="inputLabel" >
          <label className="label1">Email</label></span>
          <span className="inputContainer">
          <input value={email}   onChange={(e) => {
            setEmail(e.target.value);
            setEmailFocused(true);
          }}
          onBlur={() => setEmailFocused(false)}  className="input1" type='text'></input>
       {emailError && <span className="error">{emailError}</span>}

        </span>
        
        <span className="inputLabel" >
          <label className="label1">Password</label>
          </span>
          <span className="inputContainer">
          <input  value={password}  onChange={(e) => {
        setPassword(e.target.value);
        setPasswordFocused(true);
      }}
      onBlur={() => setPasswordFocused(false)}  className="input1" type= {showPassword ? 'text' : 'password'}></input>
          <img className="img1" onClick={togglePassword} src={eye} alt="eye" />  
       
        </span>
        {passwordError && <span className="error">{passwordError}</span>}
        <span className="inputLabel" >
          <label className="label1">Confirm Password</label> </span>
          <span className="inputContainer">
          <input value={confirmPassword}     onChange={(e) => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordFocused(true);
      }}
      onBlur={() => setConfirmPasswordFocused(false)}  className="input1" type= {resetPassword ? 'text' : 'password'}></input>
          <img className="img1" onClick={toggleResetPassword} src={eye} alt="eye" />  
        </span>
        {confirmPasswordError && <span className="error">{confirmPasswordError}</span>}

        </form>
        <div className="term">
        <span className="para3">  By signing up means you are agree with </span>
          <span className="term1">our agreement term</span>
        </div>
        <div className="BtnContainer">
          <button onClick={onSubmitClick} className="signBtn">Sign Up</button>
        </div>
        <div className="signupContainer">
          <span className="para2">  Doesn't have an account?  </span>
          <span onClick={clickHandler}  className="signup">Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default SignUpModel;
