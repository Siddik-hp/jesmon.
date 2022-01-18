import React, { useState } from "react";

const Contact = () => {

  const [api, setapi] = useState([
    {
      id: 1,
      icon: "fas fa-map-marker-alt",
      p: "GET US HERE",
      h4: `8 No Sector Uttara Dhaka, Bangladesh`,
    },
    {
      id: 2,
      icon: "fas fa-phone",
      p: "CALL US",
      h4: `+1 123 456 7890`,
    },
    {
      id: 3,
      icon: "fas fa-envelope-open",
      p: "Write us",
      h4: `msd569092@gmail.com`,
    },
  ]);
  return (
    <>
      <section id="Contact">
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h5>GET IN TOUCH</h5>
                <h1>Talk or Meet with Us</h1>
                {api.map((e) => {
                  return (
                    <div className="row  mt-4 " key={e.id}>
                      <div
                        className="col-md-2 col-2 my-auto"
                        data-aos="fade-right"
                        data-aos-duration="1300"
                      >
                        <i class={e.icon}></i>
                      </div>
                      <div className="col-md-10 col-10">
                        <p>{e.p}</p>
                        <h4>{e.h4}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-md-6">
                <h5>ESTIMATE PROJECT</h5>
                <h1>Let Us Know Here</h1>
                <form>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name *"
                  />
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your Email *"
                  />
                  <textarea
                    name="message"
                    rows="5"
                    className="form-control"
                    placeholder="Enter your Message *"
                  ></textarea>
                  <button className="btn" data-aos="fade-left">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
