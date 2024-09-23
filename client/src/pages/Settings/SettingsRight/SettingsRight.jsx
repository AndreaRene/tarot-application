import Appearance from './Appearance';
import Notifications from './Notifications';
import AdvancedSecurity from './AdvancedSecurity';
import './SettingsRight.css';
import '../Settings.css';
import '../ThemeConfig';
import { useTheme } from '../ThemeContext';

const SettingsRight = () => {
    const { theme } = useTheme();
    return (
        <section className='right-set-container'
            style={{ borderLeft: `1px solid ${theme.borderLeftColor}` }}
        >
            <section className='right-set-content'>
                <Appearance />

                <Notifications />

                <AdvancedSecurity />
            </section>
        </section>
    );
};

export default SettingsRight;
