

const Contact = () => {

    return (
        <main className="section"> 

            <div className="contact-form"> 
                <form className="contact-form">
                    <h2>Contact me!</h2>
                    <input 
                        type="text" 
                        required 
                        value='Name'
                    />
                    <input 
                        type="text" 
                        required 
                        value='Email'
                    />
                    <input 
                        type="text" 
                        required 
                        value='Message'
                    />
                    <button 
                        className="contact-form-submit"
                        style={{ width: '100%' }}>
                        Send a message 
                    </button>
                </form>
            </div>


            <div className="container">
                    <h1 className="title-1">Contacts</h1>                                                                                                                                                                                                              

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>

                            <p>Sofia, Bulgaria</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram / WhatsApp</h2>
                            <p><a href="tel:+">+123 456 789 123</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:"></a>email</p>
                        </li>
                    </ul>

            </div>
        </main>
    );
}
 
export default Contact;