import React from "react";
function CreateTicket(){
    return(
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
                <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
                <div className="col-4 p-5 mt-5 mb-5">
                    <h4 className=""><i className="fa fa-plus-circle" aria-hidden="true"></i>Account Opening</h4>
                    <a href="" style={{textDecoration:"none"}}>Online Account Opening</a><br/>
                    <a href="" style={{textDecoration:"none"}}>Offline Account Opening</a><br/>
                    <a href="" style={{textDecoration:"none"}}>Company,Partnership and HUF o0Account</a><br/>
                    <a href="" style={{textDecoration:"none"}}>Opening</a><br/>
                    <a href="" style={{textDecoration:"none"}}>NRI Account Opening</a><br/>
                    <a href="" style={{textDecoration:"none"}}>Charges  at Zerodha</a><br/>
                    <a href="" style={{textDecoration:"none"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a><br/>
                    <a href="" style={{textDecoration:"none"}}>Getting Started</a><br/>
                </div>
            </div>
        </div>
    );
}
export default CreateTicket;