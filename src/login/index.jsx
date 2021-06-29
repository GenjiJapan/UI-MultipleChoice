import React from 'react';
import './login.css'

function Login(props) {
    return (
        <section>
      <div class="container">
        <div class="user signinBx">
          <div class="formBx" id="login">
            <form action="">
              <h2>Login</h2>

              <div class="inputBox">
                <input  type="text"  required spellcheck="false" />
                <span class="text">User Name or Email</span>
              </div>

              <div id="toggle" onclick="showHide();" style={{display: 'none'}}></div>

              <div class="inputBox">
                <input  type="password"  id="password" onkeydown="showHidePass(event);" required />
                <span class="text">Password</span>
              </div>
              
              <input type="submit" value="Login" />
              <p class="signup">
                Dont have account ?<a href onclick="toggleForm();"
                  >Signup.</a
                >
              </p>
              <p class="signup">
                Forget password ?<a href onclick="Form()">Click here.</a>
              </p>
              <div class="text-area">
                <p class="or"><span class="or">Or Login</span></p>
                <a href><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href><i class="fa fa-google" aria-hidden="true"></i></a>
              </div>
            </form>
          </div>
        </div>

        <div class="user signupBx">
          <div class="formBx">
            <form action="">
              <h2>Register</h2>
              <div class="inputBox">
                <input type="text" required spellcheck="false" />
                <span class="text">User Name</span>
              </div>
              <div class="inputBox">
                <input type="email" required spellcheck="false" />
                <span class="text">Your Email</span>
              </div>
              <div class="inputBox">
                <input type="text" required />
                <span class="text">Your Phone</span>
              </div>
              
              <div id="toggle" onclick="showHide();"></div>

              <div class="inputBox">
                <input type="password" required />
                <span class="text">New Password</span>
              </div>
              
              <div class="inputBox">
                <input type="password" required />
                <span class="text">Confirm Password</span>
              </div>
            
              <input type="submit" value="Login " onclick="toggleForm()" />
              <input type="button" value="Submit" />
              <p class="signup">
                Already have account ?<a href="#" onclick="toggleForm()"
                  >LogIn.</a
                >
              </p>
              {/* <!-- <div class="text-area">
                <p class="or"><span class="or">Or Signup</span></p>
                <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href=""><i class="fa fa-google" aria-hidden="true"></i></a>
              </div> --> */}
            </form>
          </div>
        </div>

        <div class="user forgotBx">
          <div class="formBx">
            <form action="">
              <h2>Reset</h2>
              <div class="inputBox">
                <input type="text" required spellcheck="false" />
                <span class="text">User Name</span>
              </div>
              <div class="inputBox">
                <input type="email" required spellcheck="false" />
                <span class="text">Your Email</span>
              </div>
              <div class="inputBox">
                <input type="text" required />
                <span class="text">Your Phone</span>
              </div>
              
              <div id="toggle" onclick="showHide();"></div>

              <div class="inputBox">
                <input type="password" required />
                <span class="text">New Password</span>
              </div>
              
              <div class="inputBox">
                <input type="password" required />
                <span class="text">Confirm Password</span>
              </div>
              
              <div id="toggle" onclick="showHide();"></div>
              
              <input type="submit" value="Login " onclick="Form()" />
              <input type="button" value="Submit" />
              {/* <!-- <p class="signup">
                Already have account ?<a href="#" 
                  >LogIn.</a
                >
              </p>
              <div class="text-area">
                <p class="or"><span class="or">Or Signup</span></p>
                <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href=""><i class="fa fa-google" aria-hidden="true"></i></a>
              </div> --> */}
            </form>
          </div>
        </div>
      </div>
    </section>

    );
}

export default Login;