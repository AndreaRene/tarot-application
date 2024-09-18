import UserInformation from './UserInformation';
import PasswordReset from './PasswordReset';
import EmailReset from './EmailReset';
import './SettingsLeft.css';
import '../Settings.css';
import '../ThemeConfig';

const SettingsLeft = () => {
    return (
        <section className='left-set-container'>
            <section className='left-set-content'>
                <UserInformation />

                <EmailReset />

                <PasswordReset />
            </section>
        </section>
    );
};

export default SettingsLeft;
