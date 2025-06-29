import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaPaperPlane,
    FaWhatsapp,
} from "react-icons/fa";
import { Bounce, toast, ToastContainer } from "react-toastify";

const contactInfo = [
    {
        icon: <FaMapMarkerAlt />,
        text: "Raipur - 3710, Lakshmipur, Bangladesh",
    },
    {
        icon: <FaPhoneAlt />,
        text: "+880 1746 - 136858",
    },
    {
        icon: <FaWhatsapp />,
        text: "+880 1640 - 726858",
    },
    {
        icon: <FaEnvelope />,
        text: "jahid.hossen.me@gmail.com",
    },
];

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(
                (result) => {
                    toast('🦄 Email Sent Successful!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                },
                (error) => {
                    toast.error('Email Sent Error!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                    console.error(error.text);
                }
            );

        e.target.reset();
    };

    return (
        <section className="bg-base-100/90 text-white py-16 px-4">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-3xl font-bold mb-10">
                    Contact With Me
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Left Sidebar */}
                    <div className="flex flex-col gap-6">
                        {contactInfo.map((info, idx) => (
                            <div
                                key={idx}
                                className="shadow-md border border-gray-700 p-5 rounded-lg flex items-center gap-4"
                            >
                                <div className="text-accent text-2xl">{info.icon}</div>
                                <div className="text-sm font-medium">{info.text}</div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="md:col-span-2">
                        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Your Name"
                                required
                                className="shadow-md text-secondary px-4 py-3 rounded-lg w-full border border-gray-700 focus:outline-none"
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Your Phone"
                                className="shadow-md text-secondary px-4 py-3 rounded-lg w-full border border-gray-700 focus:outline-none"
                            />
                            <input
                                type="email"
                                name="from_email"
                                placeholder="Your Email"
                                required
                                className="shadow-md text-secondary px-4 py-3 rounded-lg w-full border border-gray-700 focus:outline-none"
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Topic / Subject"
                                className="shadow-md text-secondary px-4 py-3 rounded-lg w-full border border-gray-700 focus:outline-none"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="6"
                                required
                                className="shadow-md text-secondary px-4 py-3 rounded-lg w-full border border-gray-700 focus:outline-none md:col-span-2"
                            ></textarea>
                            <button
                                type="submit"
                                className="md:col-span-2 w-full btn btn-sm md:btn-xl btn-outline border-accent rounded-full text-accent hover:bg-accent hover:text-base-100 transition flex items-center gap-2"
                            >
                                Send Message <FaPaperPlane />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
