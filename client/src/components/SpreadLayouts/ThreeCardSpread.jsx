import PropTypes from 'prop-types';
import CardFront from '../../assets/00_The_Fool.png';

const ThreeCardSpread = ({ imgHeight = '250px', margin = '100px' }) => {
    return (
        <section id='threeCardSpread'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'self-end' }}>
                <img
                    src={CardFront}
                    style={{ height: imgHeight, margin: margin }}
                    className='position_one'
                />
                <img
                    src={CardFront}
                    style={{ height: imgHeight, margin: margin }}
                    className='position_two'
                />
                <img
                    src={CardFront}
                    style={{ height: imgHeight, margin: margin }}
                    className='position_three'
                />
            </div>
        </section>
    );
};

ThreeCardSpread.propTypes = {
    imgHeight: PropTypes.string,
    margin: PropTypes.string
};

export default ThreeCardSpread;
