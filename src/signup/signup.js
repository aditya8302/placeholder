import React, { useState } from "react";
import "./signup.css";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import {doc,setDoc} from "firebase/firestore";
import { auth,db } from '../firebase';
// import { type } from "@testing-library/user-event/dist/type";
 
const SignUp = () => {

  const [data, SetData] = useState({
    name:"",
    email:"",
    mobile: "",
    password: "",
    repassword:"",
    type:"Resturant",
    typename:""
  });

  const [err,seterr]=useState("");

  let name, value;
  const handleInputs = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;
    SetData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    let location;
    navigator.geolocation.getCurrentPosition((position)=>{
      location={
        lat:position.coords.latitude,
        long:position.coords.longitude
      }
      });

      console.log(data);
      if(data.name.length===0)
      {
        seterr("Name is missing");
        return;
      }

      if(data.email.length===0 || data.email.search("@")===-1)
      {
        seterr("Enter a valid Email");
        return;
      }
      if(data.mobile.length < 10)
      {
        seterr("Enter a valid phone number");
        return;
      }

      if(data.password.length<6)
      {
        seterr("Password length should be greater than 6");
        return;
      }
      if(data.password!==data.repassword)
      {
        seterr("Passwords are not matching");
        return;
      }
     
      await createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;
            // const usercollection=collection(db, "users");
            setDoc(doc(db,"users",user.uid), {     
              name: data.name,
              email: data.email,
              location: location,
              mobile:data.mobile,
              type:data.type,
              typename:data.typename
              }).then(() => { 
              // Data saved successfully!
              console.log('data submitted');  
              localStorage.setItem('name',data.name);
              localStorage.setItem('uid',user.uid);
              if(data.type==="Resturant")
                window.location="/resturant";
              else
                window.location='/foodbank';
        
            }).catch((error) => {
              seterr("Email already Registered");
              console.log(error);
            });
        })
        .catch((error) => {
            console.log(error);
        });
 
  };

    return (
      <section id="signup">
        {/* <div style={{height:'200px'}}></div> */}
        <div className="signup-card">
              <div className="card-heading">Sign Up</div>
              <div className="card-body">
                <div className="signup-error">{err}</div>
                <form>
                  <div className="form-row">
                    <div className="signup-row-title">Full name</div>
                    <div className="signup-value">
                      <input
                        className="signup-input"
                        type="text"
                        name="name"
                        onChange={handleInputs}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="signup-row-title">Mobile No.</div>
                    <div className="signup-value">
                        <input
                          className="signup-input"
                          type="number"
                          name="mobile"
                          placeholder="9999999999"
                          onChange={handleInputs}
                        />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="signup-row-title">Resturant/Food Bank Name</div>
                    <div className="signup-value">
                        <input
                          className="signup-input"
                          type="text"
                          name="typename"
                          placeholder="Indian Resturant"
                          onChange={handleInputs}
                        />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="signup-row-title">Type</div>
                    <select className="signup-value" onChange={handleInputs} name="type" value={data.type}>
                      <option value="Resturant">Resturant</option>
                      <option value="Food bank">Food Bank</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <div className="signup-row-title">Email</div>
                    <div className="signup-value">
                        <input
                          className="signup-input"
                          type="text"
                          name="email"
                          placeholder="name@example.com"
                          onChange={handleInputs}
                        />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="signup-row-title">Password</div>
                    <div className="signup-value">
                        <input
                          className="signup-input"
                          type="password"
                          name="password"
                          onChange={handleInputs}
                        />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="signup-row-title">Retype-Password</div>
                    <div className="signup-value">
                        <input
                          className="signup-input"
                          type="password"
                          name="repassword"
                          onChange={handleInputs}
                        />
                    </div>
                  </div>
                </form>
              <div className="card-footer">
                <button
                  className="signup-button"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign Up
                </button>
              </div>
              <div className="signuptext" style={{textAlign:'center'}}>Have an account? <a href="/login">Login</a></div>
        </div>
        </div>
      </section>
    );
};

export default SignUp;
