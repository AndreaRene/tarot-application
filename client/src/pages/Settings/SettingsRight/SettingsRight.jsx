import Appearance from './Appearance';
import Notifications from './Notifications';
import AdvancedSecurity from './AdvancedSecurity';
import '../Settings.css';

const SettingsRight = () => {
    return (
        <section
            className='right-set-container'
            style={{
                width: '50%',
                height: '95%',
                display: 'flex',
                justifyContent: 'stretch',
                alignItems: 'center',
                flexDirection: 'column',
                borderLeft: '1px solid rgb(168, 148, 103)'
            }}>
            <Appearance />

            <Notifications />

            <AdvancedSecurity />
        </section>
    );
};

export default SettingsRight;
