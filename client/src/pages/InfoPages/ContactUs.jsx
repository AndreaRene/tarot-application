// import './InfoPages.css';

// const ContactUs = () => {
//     const inputStyle = {
//         width: '60%'
//     };

//     const fieldContainerStyle = {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '10px'
//     };

//     const labelStyle = {
//         minWidth: '100px',
//         textAlign: 'left',
//         marginRight: '10px'
//     };

//     return (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
//             <section style={{ width: '50%', textAlign: 'center' }}>
//                 <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//                     <h2>Contact Us</h2>
//                     <hr style={{ width: '100%', margin: 'auto', marginBottom: '5rem' }} />
//                 </div>
//                 <div style={fieldContainerStyle}>
//                     <label
//                         htmlFor='contactName'
//                         style={labelStyle}>
//                         Name:
//                     </label>
//                     <input
//                         type='text'
//                         id='contactName'
//                         style={inputStyle}
//                     />
//                 </div>
//                 <div style={fieldContainerStyle}>
//                     <label
//                         htmlFor='contactEmail'
//                         style={labelStyle}>
//                         Email:
//                     </label>
//                     <input
//                         type='email'
//                         id='contactEmail'
//                         style={inputStyle}
//                     />
//                 </div>
//                 <div style={fieldContainerStyle}>
//                     <label
//                         htmlFor='contactMessage'
//                         style={labelStyle}>
//                         Message:
//                     </label>
//                     <textarea
//                         id='contactMessage'
//                         style={{ ...inputStyle, height: '100px' }}
//                     />
//                 </div>
//                 <div style={{ textAlign: 'center', marginTop: '30px' }}>
//                     <button
//                        className='button'>
//                         Send Message
//                     </button>
//                 </div>
//                 <div style={{ display: 'flex', justifyContent: 'center' }}>
//                     <button
//                         onClick={() => (window.location.href = '/dashboard')}
//                         className='button'>
//                         Go to Dashboard
//                     </button>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default ContactUs;

import './InfoPages.css';

const ContactUs = () => {
    const inputStyle = {
        width: '40%'
    };

    const fieldContainerStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: '10px'
    };

    const labelStyle = {
        minWidth: '50px',
        textAlign: 'left',
        marginRight: '10px'
    };

    return (
        <section className='infoSections'>
            <div className='infoHeader'>
                <h2>Contact Us</h2>
                <hr style={{ width: '80%' }} />
            </div>
            <h2 className='mt-5'>Have questions or need help? We're here for you!</h2>
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
                        className='input-field'
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
                        className='input-field'
                    />
                </div>
                <div className='field-container'>
                    <label
                        htmlFor='contactMessage'
                        className='label-style'>
                        Message:
                    </label>
                    <textarea
                        id='contactMessage'
                        className='input-field textarea-field'
                    />
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <button className='button'>Send Message</button>
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
