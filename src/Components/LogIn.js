import { useState } from "react";

function LogIn() {
  const [email, setEmail] = useState("");
  const [pword, setPword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [pwordError, setPwordError] = useState("");

  function emailValid(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    return regex.test(email);
  }

  function pwordValid(password) {
    if (password.length > 7) {
      return true;
    } else {
      return false;
    }
  }

  const handelLogin = () => {
    let isEmailValid = emailValid(email);
    let isPwordValid = pwordValid(pword);

    console.log(isEmailValid, isPwordValid);

    if (isEmailValid) {
      setEmailError(" ");
    } else {
      setEmailError("Enter a Valid Email");
    }

    if (isPwordValid) {
      setPwordError(" ");
    } else {
      setPwordError("Min. 8 Characters");
    }
  };

  return (
    <div className="my-5">
      <div className="container mt-3">
        <div className="row mt-3">
          <div className="col-3"></div>

          <div className="col-6 my-5">
            <div className="container login-bg my-5 bg-light">
              <h1 className="py-5 text-center"><b>Login</b></h1>
            <div className="mx-4">
              <input
                type="email"
                className=" form-control mt-3"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="text-danger px-4">{emailError}</div>
              <input
                type="password"
                className="form-control mt-3"
                placeholder="Password"
                onChange={(e) => setPword(e.target.value)}
              />
              <div className="text-danger px-4">{pwordError}</div>
            
              <div className="text-center py-5">
                <button
                  type="button"
                  className="btn btn-dark btn-lg btn-block"
                  onClick={(e) => handelLogin()}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3"></div>
      </div>
    </div>
  </div>
  )
}
export default LogIn;
