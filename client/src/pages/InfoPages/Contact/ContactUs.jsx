const ContactUs = () => {
    const inputStyle = {
        width: '60%'
    };

    const fieldContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px'
    };

    const labelStyle = {
        minWidth: '100px',
        textAlign: 'left',
        marginRight: '10px'
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <section style={{ width: '30%', textAlign: 'center' }}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h2>Contact Us</h2>
                    <hr style={{ width: '100%', margin: 'auto', marginBottom: '5rem' }} />
                </div>
                <div style={fieldContainerStyle}>
                    <label
                        htmlFor='contactName'
                        style={labelStyle}>
                        Name:
                    </label>
                    <input
                        type='text'
                        id='contactName'
                        style={inputStyle}
                    />
                </div>
                <div style={fieldContainerStyle}>
                    <label
                        htmlFor='contactEmail'
                        style={labelStyle}>
                        Email:
                    </label>
                    <input
                        type='email'
                        id='contactEmail'
                        style={inputStyle}
                    />
                </div>
                <div style={fieldContainerStyle}>
                    <label
                        htmlFor='contactMessage'
                        style={labelStyle}>
                        Message:
                    </label>
                    <textarea
                        id='contactMessage'
                        style={{ ...inputStyle, height: '100px' }}
                    />
                </div>
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <button
                        style={{
                            backgroundColor: 'lightgrey',
                            color: 'darkslategrey',
                            padding: '10px 15px',
                            border: 'none',
                            borderRadius: '4px',
                            marginTop: '3rem'
                        }}>
                        Send Message
                    </button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button
                        onClick={() => (window.location.href = '/dashboard')}
                        style={{ margin: '5rem' }}>
                        Go to Dashboard
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
