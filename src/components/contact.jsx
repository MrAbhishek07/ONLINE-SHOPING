import React from 'react'
import { useState, useEffect } from 'react';
const Contact = () => {

    const initialValues = { fullname: "", email: "", textarea: "" };
    const [formvalues, setFormValues] = useState(initialValues);
    const [forErrors, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formvalues, [name]: value })

        // console.log(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validate(formvalues));
        setIsSubmit(true);
        // validate(formvalues);
      
    };




    useEffect(() => {
        console.log(forErrors);
        if (Object.keys(forErrors).length === 0 && isSubmit) {
            console.log(formvalues);
        }
    }, [forErrors])


    const validate = (values) => {
        const errors = {}
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

        if (!values.fullname) {
            errors.fullname = "Full name is Required"
        }
        
        if (!values.email) {
            errors.email = "Email  is Required"
        }
        else if (!regex.test(values.email)) {
            errors.email = "this is not valid Email id!!"
        }
        
        if (!values.textarea) {
            errors.textarea = "text Something here"
        }
        return errors;
    }



    return (
        <div>
            <div className="contact mb-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Have Some Quetion?</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md 5">
                    <img src="asset/contact.jpg" alt="Contact Us" />
                </div>
                <div className="col-md-6">

                    {/* ******FORM */}
                    {/* {Object.keys(forErrors).length === 0 && isSubmit ? (<div className='ui messeage success'>Message sent Succeessfully</div>) :
                    (  
                    <pre>{JSON.stringify(formvalues, undefined, 2)}</pre>

                    )  } */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="exampleForm" className="form-label">Full Name</label>
                            <input type="text" class="form-control" id="exampleForm" name="fullname" value={formvalues.fullname} onChange={handleChange} />
                        </div>
                        <p>{forErrors.fullname}</p>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" name="email" placeholder="name@example.com" value={formvalues.email} onChange={handleChange} />
                        </div>
                        <p>{forErrors.email}</p>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" name="textarea" rows="5" value={formvalues.textarea} onChange={handleChange} ></textarea>
                        </div>
                        <p>{forErrors.textarea}</p>
                        <button data-testId="" type="submit" className="btn btn-outline-primary">Send Message</button>






                    </form>
                </div>

            </div>
        </div>
    );
}

export default Contact;