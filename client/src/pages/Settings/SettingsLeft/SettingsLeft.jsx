import UserInformation from './UserInformation';
import PasswordReset from './PasswordReset';
import EmailReset from './EmailReset';
import './SettingsLeft.css';

const SettingsLeft = () => {
    return (
        <section className='left-set-container'>
            <section
                className='left-set-content'>
                <UserInformation />

                <EmailReset />

                <PasswordReset />
            </section>
        </section>
    );
};

export default SettingsLeft;
