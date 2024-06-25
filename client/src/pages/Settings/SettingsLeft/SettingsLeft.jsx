import UserInformation from './UserInformation';
import PasswordReset from './PasswordReset';
import EmailReset from './EmailReset';
import '../Settings.css';

const SettingsLeft = () => {
    return (
        <section className='left-pro-container'>
            <section
                className='left-pro-content'
                style={{ width: '65%', textAlign: 'center', padding: '20px' }}>
                <UserInformation />

                <EmailReset />

                <PasswordReset />
            </section>
        </section>
    );
};

export default SettingsLeft;
