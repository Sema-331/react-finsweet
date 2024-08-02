import React from "react";
import ContactForm from "./ContactForm";

function ContactMain() {
    return(
        <main>
        <section className="form">
            <div className="container">
                <div className="form__block">
                    <div className="form__block-description">
                        <p className="form__description-start">
                            Contact us
                        </p>
                        <h2 className="form__header">
                            Let’s Start a Conversation
                        </h2>
                        <p className="form__description-end">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                        </p>
                    </div>
                    <div className="form__visit">
                        <div className="form__visit-time">
                            <p className="form__visit-time-description">
                                Working hours
                            </p>
                            <h2 className="form__visit-time-header">
                                Monday To Friday
                            </h2>
                            <h2 className="form__visite-time-daily">
                                9:00 AM to 8:00 PM 
                            </h2>
                            <p className="form__description-supporting">
                                Our Support Team is available 24/7
                            </p>
                        </div>
                        <div className="form__block-data">
                            <p className="form__block-data-contact">
                                Contact Us
                            </p>
                            <h2 className="form__header-data-number">
                                020 7993 2905
                            </h2>
                            <p className="form__data-mail">
                                hello@finsweet.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="contact-menu">
            <div className="container">
                <ContactForm />
            </div>
        </section>
    </main>
    )
}

export default ContactMain