import { useState } from "react";
import ContactPopup from "./ContactPopup";
import emailjs from "emailjs-com";

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
    <div className="absolute" >
      <div className="bg-yellow-500 w-full h-full flex justify-center items-center">
      <form
                    onSubmit={sendEmail}
                    className="w-[80vw] lg:w-[60vw] xl:w-[45vw] bg-gradient-to-b from-color-50 to-color-30 border-8 border-color-40 py-8 flex justify-center rounded-2xl shadow-outer"
                >
                    <div className="flex flex-col items-center">
                        <div className="">
                            <input
                                type="text"
                                required
                              className="w-72 md:w-96 h-10 p-4 rounded-full bg-color-30 border-4 border-color-10  placeholder:text-color-20  outline-none"
                                placeholder="name..."
                                name="from_name"
                            />
                        </div>
                        <div className="m-6">
                            <input
                                type="email"
                                required
                                className="w-72 md:w-96 h-10 p-4 rounded-full bg-color-30 border-4 border-color-10 placeholder:text-color-20  outline-none"
                                placeholder="emailadress..."
                                name="reply_to"
                            />
                        </div>
                        <div className="m-6">
                            <textarea
                                type="text"
                                required
                                className="w-72 md:w-96  h-40 p-4 rounded-2xl bg-color-30 border-4 border-color-10 text-color-50 placeholder:text-color-20  outline-none"
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
                                className="submitBtn w-72 h-10 p-2 rounded-full bg-color-10 text-color-20 border-4 border-color-40"
                                value="submit"
                            />
                            <div className="absolute bottom-40">
                                {isOpen && (
                                    <ContactPopup
                                        content={
                                            <>
                                                <b className="text-3xl font-style16">
                                                    Thank You for your message!
                                                </b>
                                                <p className="text-2xl mt-4 font-style16">
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
