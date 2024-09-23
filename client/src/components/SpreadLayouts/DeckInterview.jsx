import PropTypes from 'prop-types';
import CardFront from '../../assets/00_Cursed_Fool.jpg';

const DeckInterview = ({ imgHeight = '250px', lgMargin = '100px', smMargin = '20px' }) => {
    const commonMargin = `${smMargin} ${smMargin} ${lgMargin} ${smMargin}`;
    const reverseMargin = `${lgMargin} ${smMargin} ${smMargin} ${smMargin}`;

    return (
        <section id='interviewSpread'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'self-end' }}>
                <img
                    src={CardFront}
                    style={{ height: imgHeight, margin: reverseMargin, borderRadius: '10%' }}
                    className='position_one'
                />
                <img
                    src={CardFront}
                    style={{ height: imgHeight, margin: commonMargin, borderRadius: '10%' }}
                    className='position_two'
                />
                <img
                    src={CardFront}
                    style={{ height: imgHeight, margin: reverseMargin, borderRadius: '10%' }}
                    className='position_three'
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'self-start' }}>
                <img
                    src={CardFront}
                    style={{ height: imgHeight, margin: commonMargin, borderRadius: '10%' }}
                    className='position_four'
                />
                <img
                    src={CardFront}
                    style={{ height: imgHeight, margin: reverseMargin, borderRadius: '10%' }}
                    className='position_five'
                />
                <img
                    src={CardFront}
                    style={{ height: imgHeight, margin: commonMargin, borderRadius: '10%' }}
                    className='position_six'
                />
            </div>
        </section>
    );
};

DeckInterview.propTypes = {
    imgHeight: PropTypes.string,
    lgMargin: PropTypes.string,
    smMargin: PropTypes.string
};

export default DeckInterview;
