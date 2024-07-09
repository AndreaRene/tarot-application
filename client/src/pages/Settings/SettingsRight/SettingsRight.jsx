import Appearance from './Appearance';
import Notifications from './Notifications';
import AdvancedSecurity from './AdvancedSecurity';
import '../Settings.css';

const SettingsRight = () => {
    return (
        <section
            style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderLeft: '1px solid lightgrey'
            }}>
            <Appearance />
            <Notifications />
            <AdvancedSecurity />
        </section>
    );
};

export default SettingsRight;
