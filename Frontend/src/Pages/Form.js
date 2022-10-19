import emailjs from "emailjs-com";
import React, { Component } from "react";

export class Form extends Component{
    render(){
        function sendEmail(e){
            e.preventDefault();

            emailjs.sendForm('service_meks3en', 'template_noni8yq', e.target, 'f90ntSpGjfhkIp2Ad')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset()
        }
        return(
            <div className="container">
            <header>
            <h3 className="d-flex justify-content-center header-1">Contact Us</h3>
            </header>
            <marquee>Hexaware Technologies pvt.ltd</marquee>
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send message"></input>
                        </div>
                        <div className="col-8 form-group pt-3 mx-auto">

                        <a className="btn btn-info" href="/cards" role="button">Cancel</a>
                        </div>
                    </div>

                </form>
            </div>

        )

    }
}