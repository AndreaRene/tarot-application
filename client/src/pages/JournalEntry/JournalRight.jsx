import CardFront from '../../assets/00_Cursed_Fool.jpg';
import ChibiCardFront from '../../assets/01_The_Fool_Edited.png'
import FantasyCardFront from '../../assets/00_The_Fool.png'

const JournalLeft = () => {
    return (
        <section style={ { width: '50%', height: '95%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderLeft: '1px solid whitesmoke' } }>
            <section style={ { width: '65%', textAlign: 'center', padding: '20px' } }>
                <div style={ { textAlign: 'center' } }>
                    <h2 style={ { display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
                        <i className="fas fa-angle-left"></i>
                        <span style={ { margin: '0 20px' } }>Position 1</span>
                        <i className="fas fa-angle-right"></i>
                    </h2>
                    <hr />
                    <h3>What is your most important characteristic?</h3>
                </div>
                <hr />

                {/* <h4>The Cursed Fool - Upright</h4> */}
                <h4>The Fool - Upright</h4>

                <section style={ { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } }>
                    {/* <img src={ CardFront } style={ { height: '200px', border: '5px solid darkslategrey', borderRadius: '10px', margin: '10px' } } /> */}
                    {/* <img src={ ChibiCardFront } style={ { height: '200px', border: '5px solid darkslategrey', borderRadius: '10px', margin: '10px', backgroundColor: 'darkslategrey' } } /> */}
                    <img src={ FantasyCardFront } style={ { height: '200px', border: '5px solid darkslategrey', borderRadius: '10px', margin: '10px', backgroundColor: 'darkslategrey' } } />


                    <div style={ { textAlign: 'justify', padding: '0 5px', fontSize: '.9rem' } }>
                        <p style={{margin: '6px'}}>In the Eclipse of the Soul tarot deck, The Cursed Fool represents a profound journey into the untamed wilderness of the human spirit. It signifies a call to embrace change, to accept the natural cycles of beginnings and endings. This card embodies defiant strength, urging one to step forward fearlessly, to trust in the path laid out by fate, even if it leads through the shadows.  The Fool finds her liberation by venturing into the desolate landscapes that others fear, forging her own path amidst whispers of madness.</p>

                    </div>
                </section>
                <div>
                    <p><strong>Keywords:</strong> Exploration, Defiance, Embracing the Unknown, Solitary Path, True Freedom</p>
                    <p style={ { textAlign: 'justify', padding: '0 5px', fontSize: '.9rem' } }>The Cursed Fool is a complex figure, both defiant and vulnerable. She strides purposefully forward, resolute in her decision to embrace the unknown, even as the skeletal remains of the past loom large behind her. The skeletal tree, a twisted reflection of life itself, serves as a warning of the dangers of stagnation. Yet, the Fool remains undeterred, her spirit embodied in the small figure clinging to her robe – a representation of curiosity and the yearning for something more. The cauldron, a symbol of transformation, hints at the potential for profound growth that lies within the unknown. The Fool's journey may be fraught with hardship, but it is also a necessary step on the path to self-discovery.
                    </p>
                </div>
            </section>

        </section>
    );
};

export default JournalLeft;
