
import emailjs from '@emailjs/browser';

export default function Contact() {

    function sendMail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement)

        const name = formData.get("name")
        const email = formData.get("email")
        const message = formData.get("message")

        const templateParams = {
            from_name: name,
            to_name: 'Anmol Paweriya',
            from_email: email,
            to_email: 'paweriyaanmol@gmail.com',
            message: message,
        }

        emailjs.send(import.meta.env.VITE_APP_EMAILJS_SERVICE_KEY!, import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID!, templateParams, import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY!)
            .then((response) => {
                alert("Email sent successfully")

                console.log('Email sent successfully!', response.status, response.text);
            })
            .catch((error) => {
                console.error('Failed to send email. Error:', error);
            });

        e.currentTarget.reset()

    }

    return (
        <section id="contact" className="w-full c-space my-20 flex justify-center items-center flex-col min-h-screen relative">
            <img src="/assets/terminal.png"
                className="min-h-screen absolute inset-0 z-[-1]"
                alt="" />

            <div className="contact-container ">
                <h1 className="head-text  ">Let's Talk</h1>


                <p className="text-lg text-white-600 mt-3">
                    Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.</p>

                <form
                    onSubmit={sendMail}
                    className="flex flex-col gap-7 mt-16">
                    <label className="space-y-2">
                        <p className="field-label">Full Name</p>
                        <input
                            name="name"
                            required
                            type="text"
                            className="field-input"
                            placeholder="John Doe" />
                    </label>
                    <label className="space-y-2">
                        <p className="field-label">Email address</p>
                        <input
                            type="email"
                            name="email"
                            required
                            className="field-input" placeholder="johndoe@gmail.com"
                        />
                    </label>
                    <label className="space-y-2">
                        <p className="field-label">Your message</p>
                        <textarea
                            name="message"
                            className="field-input" placeholder="Share your thoughts or inquiries..."
                            rows={5}
                        />
                    </label>

                    <button className="field-btn">Send Message
                        <img src="/assets/arrow-up.png"
                            className="field-btn_arrow"
                            alt="" />

                    </button>


                </form>

            </div>



        </section>
    )
}
