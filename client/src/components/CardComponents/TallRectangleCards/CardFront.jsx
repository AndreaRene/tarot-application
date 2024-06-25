import CursedFool from '../../../assets/00_Cursed_Fool.jpg';

const TRCardFront = () => {
    return (
        <div>
            <img
                src={CursedFool}
                alt='cursed fool'
                style={{ width: '100%' }}
            />
            <h2 style={{ textAlign: 'center' }}>The Cursed Fool</h2>
        </div>
    );
};

export default TRCardFront;
