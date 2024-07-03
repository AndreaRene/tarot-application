import UserInformation from './UserInformation';
import PasswordReset from './PasswordReset';
import EmailReset from './EmailReset';
import '../Settings.css';
import './SettingsLeft.css';

const SettingsLeft = () => {
    return (
        <section className='left-set-container'>
            <section
                className='left-set-content'
            // style={{ width: '65%', textAlign: 'center', padding: '20px' }}
            >
                <UserInformation />

                <EmailReset />

                <PasswordReset />
            </section>
        </section>
    );
};

export default SettingsLeft;
