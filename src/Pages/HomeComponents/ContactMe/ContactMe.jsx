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

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    text: "Raipur - 3710, Lakshmipur, Bangladesh",
    type: "map",
    link: "https://www.google.com/maps/place/Raipur+Upazila/@22.9841042,90.7408355,12z",
  },
  {
    icon: <FaPhoneAlt />,
    text: "+880 1746-136858",
    type: "tel",
    link: "tel:+8801746136858",
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

const ContactMe = () => {
  const form = useRef();
  const [mapOpen, setMapOpen] = useState(false);
  const [loadingMap, setLoadingMap] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
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
          console.error(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section className="bg-base-100/90 text-white pt-24 px-4">
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-10">
          Contact With Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Sidebar */}
          <div className="flex flex-col gap-6">
            {contactInfo.map((info, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (info.type === "map") {
                    setMapOpen(true);
                    setLoadingMap(true);
                  } else window.open(info.link, "_blank");
                }}
                className="shadow-md border border-gray-700 p-5 rounded-lg flex items-center gap-4 hover:bg-gray-800 transition text-left"
              >
                <div className="text-accent text-2xl">{info.icon}</div>
                <div className="text-sm font-medium">{info.text}</div>
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
                className="md:col-span-2 w-full btn btn-sm md:btn-xl btn-outline border-accent rounded-full text-accent hover:bg-accent hover:text-base-100 transition flex items-center gap-2 justify-center"
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
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          onClick={() => setMapOpen(false)}
        >
          <div
            className="bg-gray-900 rounded-lg w-11/12 md:w-3/4 lg:w-1/2 h-96 md:h-[500px] relative overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setMapOpen(false)}
              className="absolute top-2 right-2 bg-black/60 text-white rounded-full w-10 h-10 flex justify-center items-center text-2xl z-50 hover:bg-black/80 transition"
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d257.8631359510821!2d90.76821389767686!3d23.037118803905333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754e97137fdd501%3A0x46029bb35aa8284f!2sRaipur%20Lakshmipur!5e1!3m2!1sen!2sus!4v1755173411429!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Raipur Map"
              onLoad={() => setLoadingMap(false)}
            />

          </div>
        </div>
      )}
    </section>
  );
};

export default ContactMe;
