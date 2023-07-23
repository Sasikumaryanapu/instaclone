import { Grid } from '@mui/material'
import React, { useState } from 'react'
import "./Loginpage.css"
import { useNavigate } from 'react-router-dom'
import instagram from "../../Images/insta.png"
const Loginpage = () => {

  const [user, setUser] = useState({ email: "", pwd: "" })
  const [flag,setFlag] = useState(false)
  const [error,setError]=useState(false)

  const navigate=useNavigate()

  const sign_in = (user) => {

    if (localStorage?.usersList) {
      let getData = JSON.parse(localStorage?.usersList);
          getData.push(user)
          setFlag(false)
     navigate("/home")
      localStorage.usersList = JSON.stringify(getData);

    } else {
      let setData = [];
      setData.push(user)
      localStorage.usersList = JSON.stringify(setData);
     navigate("/home")

    }

    setFlag(false)

    console.log(localStorage.usersList);
  }

  const log_in=()=>{

    if(user.email && user.pwd != " "){
    let getData = JSON.parse(localStorage?.usersList);
    


    getData?.map(d => {
       if(user.pwd == d.pwd && user.email == d.email){
        sessionStorage.name=user.email
        navigate("/home")
      }
      else{

        setError(true)
        
      }
    
    
    })
  }
  }
  return (

    <div>
    {  
   flag ? ( <Grid container >
      <Grid item xs={3}>

      </Grid>
      <Grid item xs={3}>
        <div className='loginpage_main'>
          <div>
            <div className='loginpage_rightcomp'>
              <img className='loginpagelogo' src={instagram} width="300" height={50} alt='' />
              <div>
                <div className="loginpage_signin">
                  <input className='login_input' type='email' required  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" placeholder='Phone Number ,username or email' onChange={(e) => setUser({ ...user, email: e.target.value })} />
                  <input className='login_input' type='password'  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required placeholder='password' onChange={(e) => setUser({ ...user, pwd: e.target.value })} />
                  <input type="submit" value="sign in"   className='login_btn' onClick={() => sign_in(user)}/>
                </div> 
                <div>
                  <div className='login_divisor'></div>
                  <div className="login_or">OR</div>
                  <div className="login_divider"></div>
                </div>
                <div className="login_fb">
                <a href="https://www.facebook.com/"> login with facebook</a>

                </div>
                <div className="login_forgetpwd">Forgot password?</div>

              </div>
            </div>
            <div className="loginpage_signupopt">
             
              <div className="loginpage_appdwn">
                Get the app
              </div>
              <div className='loginpage_dwsection'>
                {/* <img className='loginpage_dwimg' alt='' src={instagram} width={136} />
                <img className='loginpage_dwimg' alt='' src={instagram} width={136} /> */}
              </div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={3}>

      </Grid>
    </Grid>) :(<Grid container >
      <Grid item xs={3}>

      </Grid>
      <Grid item xs={3}>
        <div className='loginpage_main'>

          <div>
            <div className='loginpage_rightcomp'>
              <img className='loginpagelogo' src={instagram} width="300" height={50} alt='' />
              <div>
                <div className="loginpage_signin">
                  <input className='login_input' type='email' required  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" placeholder='Phone Number ,username or email' onChange={(e) => setUser({ ...user, email: e.target.value })} />
                  <input className='login_input' type='password' required placeholder='password'  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={(e) => setUser({ ...user, pwd: e.target.value })} /> <br/>
                 { error ? <span style={{color:"red"}}>wrong mail or password</span>  : null}
                  <input type="submit" className='login_btn' onClick={() => log_in()} value="log in"  />
                </div>
                <div>
                  <div className='login_divisor'></div>
                  <div className="login_or">OR</div>
                  <div className="login_divider"></div>
                </div>
                <div className="login_fb">
                 <a href="https://www.facebook.com/"> login with facebook</a>
                </div>
                <div className="login_forgetpwd">Forgot password?</div>

              </div>
            </div>
            <div className="loginpage_signupopt">
              <div className="loginpage_signup">
               <button style={{backgroundColor:"white",border:"none"}} onClick={()=>setFlag(!flag)}> Don't have an account?<a>sigin up </a></button>
              </div>
              <div className="loginpage_appdwn">
                Get the app
              </div>
              <div className='loginpage_dwsection'>
                {/* <img className='loginpage_dwimg' alt='' src={instagram} width={136} />
                <img className='loginpage_dwimg' alt='' src={instagram} width={136} /> */}
              </div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={3}>

      </Grid>
    </Grid>)}</div>
  )
}

export default Loginpage