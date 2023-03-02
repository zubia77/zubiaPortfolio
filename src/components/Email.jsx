import { useState } from "react";
import ContactPopup from "./ContactPopup";
import emailjs from "emailjs-com";
import { Icon } from "@iconify/react";

function Email(props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4r7vkah",
        "template_frrjkep",
        e.target,
        "3odoJyRZO0aka8ePv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    togglePopup();
  }
  return props.trigger ? (
    <div className="absolute">
      <div className="emailPopup w-full h-full flex justify-center items-center">
        <form
          onSubmit={sendEmail}
          className="w-[80vw] lg:w-[60vw] xl:w-[45vw]  py-8 flex justify-center rounded-2xl shadow-outer"
        >
          <div className="text-7xl absolute left-10 text-color-10" onClick={() => props.setTrigger(false)}>
            <Icon icon="line-md:close-circle" />
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <input
                type="text"
                required
                className="w-96 h-10 p-4 rounded-full bg-color-10 text-color-20 placeholder:text-color-20/50 font-10 text-2xl outline-none"
                placeholder="name..."
                name="from_name"
              />
            </div>
            <div className="m-6">
              <input
                type="email"
                required
                className="w-96 h-10 p-4 rounded-full bg-color-10 placeholder:text-color-20/50 font-10 text-2xl  outline-none"
                placeholder="emailadress..."
                name="reply_to"
              />
            </div>
            <div className="m-6">
              <textarea
                type="text"
                required
                className="w-96 h-40 p-2 rounded-2xl bg-color-10 text-color-20 placeholder:text-color-20/50 font-10 text-2xl  outline-none"
                name="message"
                id=""
                cols={3}
                rows={10}
                placeholder="your message..."
              ></textarea>
            </div>
            <div className="m-6 relative">
              <input
                type="submit"
                className="submitBtn w-72 h-16 p-2 rounded-full bg-color-10 text-color-20 border-4 border-color-20 shadow-outer font-10 text-4xl flex items-center justify-center active:shadow-none active:bg-color-20 active:text-color-10 active:border-2 active:border-color-10"
                value="submit"
              />
              <div className="absolute bottom-40 bg-color-20 rounded-xl">
                {isOpen && (
                  <ContactPopup
                    content={
                      <>
                        <b className="text-3xl font-10">
                          Thank You for your message!
                        </b>
                        <p className="text-2xl mt-12 font-10">
                          I will reply soon.
                        </p>
                      </>
                    }
                    handleClose={togglePopup}
                  />
                )}
              </div>
            </div>
          </div>
        </form>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Email;
