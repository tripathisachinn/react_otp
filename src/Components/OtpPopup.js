import React from 'react'
import "../Components/Otp.css"

const OtpPopup = () => {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <h2>Click Here To Open OTP PopUp</h2>
    <button type="button" class="btn btn-success mt-5 btn-active" data-toggle="modal" data-target="#exampleModal">
      Click Me!
    </button>
    {/* <!-- Modal --> */}
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title " id="exampleModalLabel">OTP Dialog-Box</h5>
            <button type="button" className="close btn btn-danger " data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {/* Body */}
          <div class="modal-body">
            {/* Popup Body */}
          <div className="container">
            <h3>Phone Verification</h3>
            <hr />
            <p>Enter OTP recieved on your Phone</p>
            
    
            {/* OTP Input Part */}
                    <div className="inputbox">
              <input
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              <input
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              <input
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              <input
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              {/* <input
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              <input
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              /> */}
            </div>

    
            <div className="linkbutton">
              <div>
                <a className='underline' href="/">Change Number</a>
              </div>
              <div>
                <a className='underline' href="/">Re-send OTP</a>
              </div>
            </div>
            <span><button className="btn btn-success btn-active">Verify Phone Number</button></span>
          </div>
          <div>
            
        </div>
          </div>
          
        </div>
      </div>
    </div>
        </div>
    )
    
}

export default OtpPopup
