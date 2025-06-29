import React from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaPaperPlane,
    FaWhatsapp,
} from "react-icons/fa";

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
    return (
        <section className="bg-base-100/90 text-white py-16 px-4">
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
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="shadow-md text-secondary px-4 py-3 rounded-lg w-full border border-gray-700 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Your Phone"
                                className="shadow-md text-secondary px-4 py-3 rounded-lg w-full border border-gray-700 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="shadow-md text-secondary px-4 py-3 rounded-lg w-full border border-gray-700 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Topic / Subject"
                                className="shadow-md text-secondary px-4 py-3 rounded-lg w-full border border-gray-700 focus:outline-none"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="6"
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
