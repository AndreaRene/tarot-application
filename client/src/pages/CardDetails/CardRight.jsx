const CardRight = () => {
    return (
        <section style={ { width: '50%', height: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
            <section style={ { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '65%', height: '90%', textAlign: 'center', padding: '5px' } }>
                <div>
                    <h2 style={ { backgroundColor: '#382337', display: 'inline-block', padding: '.5rem', margin: '20px' } }>
                        <i className='fas fa-angle-left fa-lg'></i>
                        <span style={ { backgroundColor: '#4F334A', padding: '.5rem' } }>Prominent Colors</span>
                        <i className='fas fa-angle-right fa-lg'></i>
                    </h2>
                    <section style={ { width: '90%', display: 'grid', gridTemplateColumns: '1fr 3fr' } }>
                        <div style={ { borderRight: '1px solid white' } }>

                        </div>
                        <div style={ { padding: '0 10px' } }>
                            <ul style={ { textAlign: 'left' } }>
                                <li>Lorem: Borp Morp </li>
                                <li>Ipsum: Meep boop</li>
                                <li>Dolor: pling plonk</li>
                                <li>Sit amet: Bloop bloop</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div>
                    <hr />
                    <h3>The deck the card is from</h3>


                    <hr />
                    <div style={ { padding: '0 10px', height: '12rem', overflowX: 'hidden', overflowY: 'scroll' } }>
                        <p style={ { textAlign: 'justify' } }>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi nemo commodi modi rerum dolorem, aspernatur nobis ut ipsam eos reiciendis accusamus repellat vel corrupti pariatur officia consequatur reprehenderit amet.Qui minus adipisci itaque harum consequatur. </p>
                        <p style={ { textAlign: 'justify' } }>Soluta, cum ipsam! Fugit perspiciatis error sapiente exercitationem expedita rerum incidunt laboriosam numquam ad magnam, aspernatur at corporis, quam corrupti aperiam qui autem nam rem dolore laudantium quos eveniet? Atque.</p>
                        <p>Second Column Content</p>
                    </div>
                </div>



            </section>
        </section>
    )
};

export default CardRight;