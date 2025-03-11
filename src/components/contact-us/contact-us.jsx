import { useState } from "react";
import Input from "./input-field";
import { set } from "react-hook-form";

const ContactUs = () => {

    const initialFormState = {
        firstName: "",
        phoneNumber: 0,
        email: "",
    };
    const [formData, setFormData] = useState(initialFormState);

    // Handle input change
    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // Handle button click
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <>
            <h1>Contact Us</h1>
            <form className="container" onSubmit={handleSubmit}>
                <div className="form-container">
                    <Input
                        label="Name"
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        placeholder="Enter Your Name"
                        onChange={handleChange}
                    />

                    <Input
                        label="Email"
                        type="email"
                        id="email"
                        value={formData.email}
                        placeholder="Enter Your Email"
                        onChange={handleChange}
                    />

                    <Input
                        label="Phone Number"
                        type="tel"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        placeholder="Enter Your Phone Number"
                        onChange={handleChange}
                    />

                    <button type="submit">Submit Form</button>
                </div>
            </form>
        </>
    );
};

export default ContactUs;
