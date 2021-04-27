import React,{useState} from "react";

const Contact = () => {
  const [data,setData] =  useState({
    fullname: '',
    phone: '',
    email:'',
    msg: ''
  });
  const InputEvent = (event) =>{
      const {name,value} = event.target;

      setData((preVal) => {
        return {
          ...preVal,
          [name] : value
        }
      })
  }
  const formSubmit = (e) =>{
      e.preventDefault();
      alert(`My name is ${data.fullname}. My mobile number is ${data.phone}`)
  }
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center text-white">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label
                  for="exampleInputEmail1"
                  className="form-label text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby=""
                  placeholder="Enter your name"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label
                  for="exampleInputPassword1"
                  className="form-label text-white"
                >
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Mobile number"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label text-white">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="name@example.com"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="text-white">
                  Message
                </label>
                <textarea 
                className="form-control"
                name="msg"
                value={data.msg}
                onChange={InputEvent}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
