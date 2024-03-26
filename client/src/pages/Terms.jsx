import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import '../components/Footer/Footer.css';
import './Landing/Landing.css';
import '../components/Hero/Assets/Hero.css';
import '../../src/index.css';

const Terms = () => {
    return (
        <div className='privacy-container'>
            <Navbar />
            <h2 className='privacy text-center display-2 display-md-5 display-lg-6 mb-3'>
                Terms of Service
            </h2>
            <img
                src='/Up_moon.png'
                alt='Moon decorative element'
                className='img-fluid img-sm mt-1'
            />
            <h3 className='mt-5'>
                Effective Date: 3/19/2024
            </h3>
            <p className='privacy-terms'>
                These Terms of Service ("Terms") act as an agreement between you and TarotDeck ("TarotDeck", “we”, “us”, or “our”) that governs your use of our platform at (tarotdeck website) on any computer, mobile phone, tablet, console, or other device. By accessing or using TarotDeck, you signify that you have read, understand, and agree to be bound by these Terms. If you disagree with any part of the Terms, you may not use the TarotDeck. <br />
                <br />
                We reserve the right to make changes to these Terms. Prior to the effective date of any changes, we will notify you via email or by posting a notice on the platform. Additionally, the effective date of the changes will be displayed at the top of this page. Your continued use of TarotDeck will be considered your acceptance of the revised Terms of Service. If you do not agree with the updated Terms, please discontinue use of TarotDeck.
            </p>

            <h3>Use of the App</h3>
            <p className='privacy-terms'>
                TarotDeck provides tarot card reading services for entertainment and personal insight purposes only. The readings provided by the App are not a substitute for professional advice or guidance. <br />
                <br />
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h3>User Consent</h3>
            <p className='privacy-terms'>
                You retain ownership of any content you submit or upload to TarotDeck, including feedback, reviews, and comments ("User Content"). By submitting User Content, you grant the Company a worldwide, non-exclusive, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate, and distribute your User Content in any medium. You agree not to submit User Content that is unlawful, defamatory, obscene, offensive, or infringes upon the rights of others.
            </p>

            <h3>Intellectual Property</h3>
            <p className='privacy-terms'>
                All intellectual property rights in TarotDeck and its content, including but not limited to text, graphics, logos, and images, are owned by the Company or its licensors. You may not use, reproduce, modify, or distribute any content from TarotDeck without the Company's prior written consent.
            </p>

            <h3>Disclaimer of Warranties</h3>
            <p className='privacy-terms'>
                TarotDeck is provided on an "as is" and "as available" basis, without any warranties of any kind, express or implied. The Company does not guarantee the accuracy, reliability, or completeness of any tarot card readings provided by TarotDeck.
            </p>

            <h3>Limitation of Liability</h3>
            <p className='privacy-terms'>
                In no event shall TarotDeck be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the App.
            </p>

            <h3>Governing Law</h3>
            <p className='privacy-terms'>
                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
            </p>

            <h3>Payment and Subscription Terms</h3>
            <p className='privacy-terms'>
                TarotDeck may offer certain features or services that require payment, such as premium tarot card readings or subscription plans. By purchasing any paid features or subscribing to TarotDeck, you agree to pay all fees and charges associated with your account. Payments will be processed through third-party payment processors. By providing payment information, you represent and warrant that you have the legal right to use the payment method. All fees are non-refundable unless otherwise stated in the Terms or required by law. Failure to pay fees or charges may result in the suspension or termination of your account.
            </p>

            <h3>Refund Policy</h3>
            <p className='privacy-terms'>
                TarotDeck may offer refunds under certain circumstances, such as technical errors or dissatisfaction with paid features. Refund requests must be submitted within a specified timeframe and are subject to review by the Company. We reserve the right to refuse refunds for reasons including but not limited to misuse of the App, violation of the Terms of Service, or abuse of the refund policy.
            </p>

            <h3>Termination</h3>
            <p className='privacy-terms'>
                We reserve the right to terminate or suspend your access to TarotDeck immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use TarotDeck will immediately cease. If your account is terminated due to misuse, you may be barred from accessing the App in the future. <br />
                <br />
                Misuse includes, but is not limited to, the following: Violation of the Terms of Service; Engaging in fraudulent or unlawful activities; Attempting to disrupt or interfere with the operation of TarotDeck; and Any behavior deemed harmful or abusive to other users or the Company.
            </p>
            <h3>Contact Us</h3>
            <p className='privacy-terms'>
                If you have any questions about these Terms, please contact us at&nbsp; <a href='mailto:tarotreaderappcontact@gmail.com' target='_blank'> tarotreaderappcontact@gmail.com</a>.
            </p>

            <div className='footer-container mt-5'>
                <Footer />
            </div>
        </div>
    );
};

export default Terms;