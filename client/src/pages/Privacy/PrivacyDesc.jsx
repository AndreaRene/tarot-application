import React from 'react';
import './Privacy.css';

const PrivacyDescription = () => {
    return (
        <div className='privacy-body'>
            <h2 className='privacy text-center display-2 display-md-5 display-lg-6 mb-3'>
                Privacy Policy
            </h2>
            <img
                src='/Down_moon.png'
                alt='Moon decorative element'
                className='img-fluid img-sm mt-1'
            />
            <h3 className='mt-5'>
                Effective Date: 2/27/2024
            </h3>
            <p className='privacy-p'>
                TarotDeck ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our App/Website ("Service").
            </p>

            <h3>Information We Collect</h3>
            <p className='privacy-p'>
                We collect information that is necessary to provide you with the best experience on our Service. This may include personal information you provide when you register for an account, such as your name and email address, as well as usage data that helps us understand how you use our Service, including IP addresses, browser type, and actions taken on the Service.
            </p>

            <h3>How We Use Your Information</h3>
            <p className='privacy-p'>
                We use the information to provide, maintain, and improve our Service; communicate with you about updates, support, and administrative messages; and ensure the security and integrity of our Service.
            </p>

            <h3>How We Protect Your Information</h3>
            <p className='privacy-p'>
                We prioritize your privacy and employ numerous security measures to safeguard your information. This includes encrypting your data within our database, utilizing secure communication protocols, and restricting access to authorized personnel only.
            </p>

            <h3>Sharing Your Information</h3>
            <p className='privacy-p'>
                We do not sell, trade, or otherwise transfer your personal information to third parties, including affiliates. We may share your information with trusted third parties who assist us in operating our Service, conducting our business, or serving our users, provided those parties agree to keep this information confidential.
            </p>

            <h3>Your Consent</h3>
            <p className='privacy-p'>
                By using our Service, you consent to our Privacy Policy.
            </p>

            <h3>Changes to Our Privacy Policy</h3>
            <p className='privacy-p'>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h3>Contact Us</h3>
            <p className='privacy-p'>
                If you have any questions about this Privacy Policy, please contact us at&nbsp; <a href='mailto:tarotreaderappcontact@gmail.com' target='_blank'> tarotreaderappcontact@gmail.com</a>.
            </p>
        </div>
    );
};

export default PrivacyDescription;