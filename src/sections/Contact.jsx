import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { motion } from "motion/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const validateForm = () => {
    if (!formData.from_name.trim()) {
      showAlertMessage("danger", "Please enter your name");
      return false;
    }
    if (!formData.from_email.trim() || !formData.from_email.includes("@")) {
      showAlertMessage("danger", "Please enter a valid email address");
      return false;
    }
    if (!formData.message.trim()) {
      showAlertMessage("danger", "Please enter your message");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent:", result.text);
      setIsLoading(false);
      setFormData({ from_name: "", from_email: "", message: "" });
      showAlertMessage("success", "Your message has been sent successfully!");
    } catch (error) {
      console.error("EmailJS error:", error);
      setIsLoading(false);
      showAlertMessage("danger", "Failed to send message. Try again later.");
    }
    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  };

  return (
    <section
      id="contact"
      className="relative flex items-center c-space section-spacing"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <motion.div
        className="flex flex-col items-center justify-center max-w-md p-8 mx-auto border border-white/10 rounded-2xl bg-gradient-to-br from-primary/90 to-midnight/90 backdrop-blur-sm"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="flex flex-col items-start w-full gap-5 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your
            existing platform, or bring a unique project to life, I'm here to
            help.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          className="w-full"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="mb-5">
            <label htmlFor="from_name" className="field-label">
              Full Name
            </label>
            <input
              id="from_name"
              name="from_name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John Doe"
              value={formData.from_name}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="from_email" className="field-label">
              Email
            </label>
            <input
              id="from_email"
              name="from_email"
              type="email"
              className="field-input field-input-focus"
              placeholder="JohnDoe@email.com"
              value={formData.from_email}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus resize-none"
              placeholder="Share your thoughts... "
              value={formData.message}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
          </div>

          <motion.button
            type="submit"
            className={`w-full px-6 py-4 text-lg font-medium text-center rounded-lg transition-all duration-300 ${
              isLoading
                ? "bg-neutral-600 cursor-not-allowed"
                : "bg-gradient-to-r from-royal to-lavender hover:from-lavender hover:to-royal hover:scale-105 hover:shadow-lg hover:shadow-royal/25"
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </motion.form>

        <p className="mt-6 text-sm text-neutral-500">
          Or reach me directly at{" "}
          <a
            href="mailto:abhisheksajwan458@gmail.com"
            className="text-royal hover:text-lavender transition-colors"
          >
            abhisheksajwan458@gmail.com
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
