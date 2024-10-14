import './InfoPages.css';
import Button from 'react-bootstrap/Button';
import '../Settings/SettingsLeft/SettingsLeft.css';

const ContactUs = () => {
    return (
        <section className='infoSections'>
            <div className='infoHeader'>
                <h2>Contact Us</h2>
                <hr style={{ width: '80%' }} />
            </div>
            <h2>Have questions or need help? We're here for you!</h2>
            <p>
                Whether you're curious about a tarot reading, need assistance, or ran into a hiccup, feel free to reach
                out. We're here to guide you on your tarot journey and ensure a smooth experience with our app.
            </p>
            <div className='form-section'>
                <div className='field-container'>
                    <label
                        htmlFor='contactName'
                        className='label-style'>
                        Name:
                    </label>
                    <input
                        type='text'
                        id='contactName'
                        className='fields-input input-field'
                    />
                </div>
                <div className='field-container'>
                    <label
                        htmlFor='contactEmail'
                        className='label-style'>
                        Email:
                    </label>
                    <input
                        type='email'
                        id='contactEmail'
                        className='fields-input input-field'
                    />
                </div>
                <div className='field-container message'>
                    <label
                        htmlFor='contactMessage'
                        className='label-style'>
                        Message:
                    </label>
                    <textarea
                        id='contactMessage'
                        className='fields-input input-field textarea-field'
                    />
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <Button className='button'>Send Message</Button>
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                    onClick={() => (window.location.href = '/dashboard')}
                    className='button'>
                    Go to Dashboard
                </button>
            </div> */}
        </section>
    );
};

export default ContactUs;
