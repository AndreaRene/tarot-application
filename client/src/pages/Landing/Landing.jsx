import Carousel from './PanelCarousel';
import './Landing.css';
import { ModalProvider } from './ModalContext';

const Landing = () => {
    return (
        <div>
            <ModalProvider>
                <Carousel />
            </ModalProvider>
        </div>
    );
};

export default Landing;
