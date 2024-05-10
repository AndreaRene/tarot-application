import './Dashboard.css';

const DashboardCarousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
        ;
    }

    return (
        <div className='carousel-container'>
            <i
                className='fas fa-angle-left fa-lg'
                style={{ marginRight: '30px' }}
                onClick={goToPrevious}
            ></i>
            {items.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`item-${index === currentIndex ? 'active' : ''}`}
                />
            ))}
            <i
                className='fas fa-angle-right fa-lg'
                style={{ marginLeft: '30px' }}
                onClick={goToNext}
            ></i>

        </div>
    );
};

export default DashboardCarousel;