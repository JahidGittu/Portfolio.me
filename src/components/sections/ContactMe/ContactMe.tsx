"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ContactInfoItem {
  icon: React.ReactNode;
  text: string;
  type: "map" | "tel" | "whatsapp" | "mail";
  link: string;
}

const contactInfo: ContactInfoItem[] = [
  {
    icon: <FaMapMarkerAlt />,
    text: "Bogura, Bangladesh",
    type: "map",
    link: "https://www.google.com/maps/place/Bogura,+Bangladesh/@24.8465228,89.3082348,12z",
  },
  {
    icon: <FaPhoneAlt />,
    text: "+880 1640-726858",
    type: "tel",
    link: "tel:+8801640726858",
  },
  {
    icon: <FaWhatsapp />,
    text: "+880 1640-726858",
    type: "whatsapp",
    link: "https://wa.me/8801640726858",
  },
  {
    icon: <FaEnvelope />,
    text: "jahid.hossen.me@gmail.com",
    type: "mail",
    link: "mailto:jahid.hossen.me@gmail.com",
  },
];

const ContactMe: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [mapOpen, setMapOpen] = useState<boolean>(false);
  const [loadingMap, setLoadingMap] = useState<boolean>(true);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          toast("🦄 Email Sent Successful!", {
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
          toast.error("Email Sent Error!", {
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
          console.error(error?.text || error);
        }
      );

    form.current.reset();
  };

  return (
    <section className="bg-base-100/90 text-white pt-24 px-4">
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-3">
          Get In Touch
        </h2>
        <p className="text-center text-accent text-sm md:text-base max-w-md mx-auto mb-10">
          Have a project in mind or want to collaborate? Feel free to reach out directly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Sidebar */}
          <div className="flex flex-col gap-5">
            {contactInfo.map((info, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (info.type === "map") {
                    setMapOpen(true);
                    setLoadingMap(true);
                  } else window.open(info.link, "_blank");
                }}
                className="shadow-md border border-gray-700 p-5 rounded-lg flex items-center gap-4 hover:bg-gray-800 transition text-left cursor-pointer"
              >
                <div className="text-secondary text-2xl">{info.icon}</div>
                <div className="text-sm font-medium text-gray-200">{info.text}</div>
              </button>
            ))}
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="shadow-md text-secondary px-4 py-3 rounded-lg w-full border border-gray-700 focus:outline-none bg-base-200/50"
              />
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="shadow-md text-secondary px-4 py-3 rounded-lg w-full border border-gray-700 focus:outline-none bg-base-200/50"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="shadow-md text-secondary px-4 py-3 rounded-lg w-full border border-gray-700 focus:outline-none bg-base-200/50"
              />
              <input
                type="text"
                name="subject"
                placeholder="Topic / Subject"
                className="shadow-md text-secondary px-4 py-3 rounded-lg w-full border border-gray-700 focus:outline-none bg-base-200/50"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
                className="shadow-md text-secondary px-4 py-3 rounded-lg w-full border border-gray-700 focus:outline-none md:col-span-2 bg-base-200/50"
              ></textarea>
              <button
                type="submit"
                className="md:col-span-2 w-full btn btn-sm md:btn-xl btn-outline border-accent rounded-full text-accent hover:bg-accent hover:text-base-100 transition flex items-center gap-2 justify-center cursor-pointer"
              >
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Maps Modal */}
      {mapOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
          onClick={() => setMapOpen(false)}
        >
          <div
            className="bg-gray-900 rounded-lg w-full max-w-3xl h-96 md:h-[500px] relative overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setMapOpen(false)}
              className="absolute top-2 right-2 bg-black/60 text-white rounded-full w-10 h-10 flex justify-center items-center text-2xl z-50 hover:bg-black/80 transition cursor-pointer"
              aria-label="Close Map"
            >
              &times;
            </button>

            {/* Loading Spinner */}
            {loadingMap && (
              <div className="absolute inset-0 flex justify-center items-center z-40 bg-black/20">
                <div className="w-16 h-16 border-4 border-t-accent border-gray-300 rounded-full animate-spin"></div>
              </div>
            )}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115858.9190137785!2d89.30823485897816!3d24.846522819875453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e7e81df441%3A0x27133ed321c6001!2sBogura%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bogura Map"
              onLoad={() => setLoadingMap(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactMe;
