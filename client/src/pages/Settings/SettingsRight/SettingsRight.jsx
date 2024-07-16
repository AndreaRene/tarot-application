import Appearance from './Appearance';
import Notifications from './Notifications';
import AdvancedSecurity from './AdvancedSecurity';
import './SettingsRight.css';

const SettingsRight = () => {
    return (
        <section className='right-set-container'>
            <Appearance />

            <Notifications />

            <AdvancedSecurity />
        </section>
    );
};

export default SettingsRight;
