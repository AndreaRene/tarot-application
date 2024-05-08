import { useLocation } from 'react-router-dom';
import QuickUserInfo from '../AsidePane/QuickUserInfo/QuickUserInfo';
import QuickLinks from '../AsidePane/QuickLinks';
import AppUpdates from '../AsidePane/AppUpdates';
import AccordionSection from '../AsidePane/AccordionSection';

const AsideContainer = () => {
    const location = useLocation();

    const routeToAsideComponents = {
        '/dashboard': () => (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '200px' }}>
                <QuickUserInfo />
                <QuickLinks />
                <AppUpdates />
            </div>
        ),
        '/settings': () => (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '200px' }}>
                <QuickUserInfo />
                <QuickLinks />
                <AppUpdates />
            </div>
        ),
        '/newReading': () => (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '200px' }}>
                <AccordionSection title="Spreads" />
                <AccordionSection title="Decks" />
            </div>
        ),
        '/community': () => (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '200px' }}>
                <QuickUserInfo />
                <QuickLinks />
                <AppUpdates />
            </div>
        ),
        '/cardInfo': () => (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '200px' }}>
                <QuickUserInfo />
                <QuickLinks />
                <AppUpdates />
            </div>
        )
    };


    const AsideComponents = routeToAsideComponents[location.pathname];

    return (
        <aside style={{ backgroundColor: "#4F3052" }} >
            {AsideComponents && <AsideComponents />
            }
        </aside >
    );
};

export default AsideContainer;
