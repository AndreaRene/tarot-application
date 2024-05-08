import CardFront from '../../assets/00_Cursed_Fool.jpg';

const CardRight = () => {
    return (
        <section style={ { width: '50%', height: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
            <section style={ { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '65%', height: '90%', textAlign: 'center', padding: '5px' } }>
                <div>

                    <section style={ { width: '90%', display: 'grid', gridTemplateColumns: '1fr 3fr' } }>
                        <div style={ { borderRight: '1px solid white' } }>
                            <img src={ CardFront } style={ { height: '200px' } } />
                        </div>

                        <div style={ { padding: '0 10px' } }>
                            <h2 style={ { backgroundColor: '#382337', display: 'inline-block', padding: '.5rem', margin: '20px' } }>
                                <i className='fas fa-angle-left fa-lg'></i>
                                <span style={ { backgroundColor: '#4F334A', padding: '.5rem' } }>Prominent Colors</span>
                                <i className='fas fa-angle-right fa-lg'></i>
                            </h2>
                            <ul style={ { textAlign: 'left' } }>
                                <li>Lorem: Borp Morp </li>
                                <li>Ipsum: Meep boop</li>
                                <li>Dolor: pling plonk</li>
                                <li>Sit amet: Bloop bloop</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <hr />

                <h2 style={ { width: '100%', textAlign: 'left' } }>A heading from the journey...</h2>
                <div style={ { padding: '0 10px', height: '40%', overflowX: 'hidden', overflowY: 'scroll' } }>


                    <p style={ { textAlign: 'justify' } }>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi nemo commodi modi rerum dolorem, aspernatur nobis ut ipsam eos reiciendis accusamus repellat vel corrupti pariatur officia consequatur reprehenderit amet.Qui minus adipisci itaque harum consequatur. </p>
                    <p style={ { textAlign: 'justify' } }>Soluta, cum ipsam! Fugit perspiciatis error sapiente exercitationem expedita rerum incidunt laboriosam numquam ad magnam, aspernatur at corporis, quam corrupti aperiam qui autem nam rem dolore laudantium quos eveniet? Atque.</p>
                </div>




            </section>
        </section >
    )
};

export default CardRight;