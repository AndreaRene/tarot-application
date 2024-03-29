import CreateReading from '../components/Reading/ReadingCard';
import Header from '../components/Headers/Header';

const Reading = () => {
    return (
        <div>
            <Header />
            <div>
                <h1 className='text-white text-center mb-3 mt-5'>
                    Reading Page
                </h1>
                <CreateReading />
            </div>
        </div>
    );
};

export default Reading;
