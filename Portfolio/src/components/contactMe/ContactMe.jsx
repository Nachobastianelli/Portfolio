import useToast from "../../hooks/useToast";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const ContactMe = ({ isVisible, onClose }) => {
  const { showToast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: { error: false, message: "" },
    email: { error: false, message: "" },
    subject: { error: false, message: "" },
    message: { error: false, message: "" },
  });

  const { t, i18n } = useTranslation("contact");

  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const messageRef = useRef(null);
  const subjectRef = useRef(null);
  const formRef = useRef();

  if (!isVisible) {
    return null;
  }

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value.trim());
  };

  const handleSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleMessage = (e) => {
    let message2 = e.target.value;
    setMessage(message2);
  };

  const handleReset = () => {
    setEmail("");
    setName("");
    setSubject("");
    setMessage("");
    setErrors({
      name: { error: false, message: "" },
      email: { error: false, message: "" },
      subject: { error: false, message: "" },
      message: { error: false, message: "" },
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    let formIsValid = true;

    if (name.length === 0) {
      nameRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: {
          error: true,
          message: t("errorName"),
        },
      }));
      formIsValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: {
          error: false,
          message: "",
        },
      }));
    }
    if (email.length === 0) {
      emailRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: {
          error: true,
          message: t("errorEmail"),
        },
      }));
      formIsValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: {
          error: false,
          message: "",
        },
      }));
    }
    if (message.length === 0) {
      messageRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: {
          error: true,
          message: t("errorMessage"),
        },
      }));
      formIsValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: {
          error: false,
          message: "",
        },
      }));
    }
    if (subject.length === 0) {
      subjectRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        subject: {
          error: true,
          message: t("errorSubject"),
        },
      }));
      formIsValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        subject: {
          error: false,
          message: "",
        },
      }));
    }

    if (formIsValid) {
      showToast(t("exito"), true);
      emailjs
        .sendForm("service_twn47xs", "template_5mf4ion", formRef.current, {
          publicKey: "NnywUHhnH32znLbyn",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      const messageEmail = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
      setEmail("");
      setName("");
      setSubject("");
      setMessage("");
      onClose();
    }
  };

  return (
    <div
      id="contact-modal"
      tabIndex="-1"
      className="bg-black/50 overflow-y-auto h-full overflow-x-hidden fixed top-0 right-0 left-0 z-[999] -scroll-my-96 items-center justify-center flex"
    >
      <div className="relative p-4 w-full  max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow">
          <button
            onClick={onClose}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="#c6c7c7"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close popup</span>
          </button>
          <div className="p-5 max-h-[80%] overflow-y-auto">
            <div className="text-center pb-6">
              <h1 className="text-3xl text-gray-600">{t("concat")}</h1>
              <p className="text-gray-500">{t("fill")}</p>
            </div>

            <form onSubmit={submitFormHandler} ref={formRef}>
              <div className="flex mb-4 space-x-2">
                <div className="w-full">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    {t("name")}
                  </label>
                  <input
                    ref={nameRef}
                    onChange={handleName}
                    value={name}
                    name="name"
                    className={`shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.name.error ? "border-red-500" : ""
                    }`}
                    id="name"
                    type="text"
                    placeholder={t("phN")}
                  />
                  {errors.name.error && (
                    <p className="text-red-500 text-xs italic">
                      {errors.name.message}
                    </p>
                  )}
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    {t("email")}
                  </label>
                  <input
                    ref={emailRef}
                    onChange={handleEmail}
                    value={email}
                    name="email"
                    className={`shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.email.error ? "border-red-500" : ""
                    }`}
                    id="email"
                    type="text"
                    placeholder={t("phE")}
                  />
                  {errors.email.error && (
                    <p className="text-red-500 text-xs italic">
                      {errors.email.message}
                    </p>
                  )}
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    {t("subject")}
                  </label>
                  <input
                    ref={subjectRef}
                    onChange={handleSubject}
                    value={subject}
                    name="subject"
                    className={`shadow appearance-none border rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.subject.error ? "border-red-500" : ""
                    }`}
                    id="subject"
                    type="text"
                    placeholder={t("phS")}
                  />
                  {errors.subject.error && (
                    <p className="text-red-500 text-xs italic">
                      {errors.subject.message}
                    </p>
                  )}
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    {t("message")}
                  </label>
                  <textarea
                    className={`shadow appearance-none border rounded  w-full py-2 px-3 text-gray-700 resize-none leading-tight focus:outline-none focus:shadow-outline ${
                      errors.message.error ? "border-red-500" : ""
                    }`}
                    placeholder={t("phM")}
                    name="message"
                    rows={4}
                    ref={messageRef}
                    onChange={handleMessage}
                    value={message}
                  ></textarea>
                  {errors.message.error && (
                    <p className="text-red-500 text-xs italic">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-between">
                <input
                  onClick={handleReset}
                  className="shadow cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="reset"
                  value={t("buttonR")}
                />
                <input
                  className="shadow bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value={t("buttonS")}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
