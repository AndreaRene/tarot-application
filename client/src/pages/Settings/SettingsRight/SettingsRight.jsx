import Appearance from './Appearance';
import Notifications from './Notifications';
import AdvancedSecurity from './AdvancedSecurity';
import './SettingsRight.css';
import '../Settings.css';
import '../ThemeConfig';

const SettingsRight = () => {
    return (
        <section className='right-set-container'>
            <section className='right-set-content'>
                <Appearance />

                <Notifications />

                <AdvancedSecurity />
            </section>
        </section>
    );
};

export default SettingsRight;
