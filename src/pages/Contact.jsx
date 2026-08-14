import SectionTitle from "../components/SectionTitle";
import './Contact.css';

function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Thank you! Your message has been submitted.");
    };

    return (
        <main>

            <section className="page-hero">

                <h1>Let's Connect and discuss about the Event </h1><h2>Contact Me</h2>

                <p>
                    
                </p>

            </section>


            <section className="section">

                <SectionTitle
                    
                />

                <div className="contact">

                    <div className="contact-info">

                        <h3>Get In Touch</h3>
                        <p>
                            Speaker Name:Vivek Bindra
                        </p>
                        <p>
                            Specialization:Leadership & Motivation
                        </p>
                        <p>
                            Available For:Conferences,Coroporate Events Workshops and seminars in colleges
                        </p>
                        <p>
                            Session Format:Keynote/workshop/ pannel Discussion
                        </p>

                        <p>
                            Email: Vivekbindra390@gmail.com
                        </p>

                        <p>
                            Phone: +91 1239874566
                        </p>

                        

                    </div>


                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                        />
                        <input
                        type="text"
                        placeholder=" Company Organization"
                        />
                        <input
                        type="text"
                        placeholder="event type"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                        />

                        <textarea
                            placeholder="Tell us about your event"
                            rows="6"
                            required
                        ></textarea>

                        <button type="submit">
                            Send Booking Inquiry
                        </button>

                    </form>

                </div>

            </section>

        </main>
    );
}

export default Contact;