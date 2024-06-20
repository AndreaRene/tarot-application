import CardFront from '../../assets/00_Cursed_Fool.jpg';

const CardRight = () => {
    return (
        <section
            style={{
                width: '50%',
                height: '95%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderLeft: '1px solid #a89467'
            }}>
            <section
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '65%',
                    height: '95%',
                    textAlign: 'center',
                    padding: '5px'
                }}>
                <div>
                    <section style={{ width: '90%', display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
                        <div>
                            <img
                                src={CardFront}
                                style={{ height: '250px', margin: '20px 10px' }}
                            />
                        </div>

                        <div style={{ padding: '0 10px' }}>
                            <h2
                                style={{
                                    backgroundColor: '#382337',
                                    display: 'inline-block',
                                    padding: '.5rem',
                                    margin: '20px 5px'
                                }}>
                                <i className='fas fa-angle-left fa-lg'></i>
                                <span style={{ backgroundColor: '#4F334A', padding: '.5rem' }}>Prominent Colors</span>
                                <i className='fas fa-angle-right fa-lg'></i>
                            </h2>
                            <ul style={{ textAlign: 'left' }}>
                                <li>Lorem: Borp Morp </li>
                                <li>Ipsum: Meep boop</li>
                                <li>Dolor: pling plonk</li>
                                <li>Sit amet: Bloop bloop</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div style={{ height: '70%', overflow: 'hidden' }}>
                    <hr />

                    <h2 style={{ width: '100%', textAlign: 'left' }}>A heading from the journey...</h2>
                    <div style={{ padding: '0 10px', height: '75%', overflowX: 'hidden', overflowY: 'scroll' }}>
                        <p style={{ textAlign: 'justify' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nam asperiores amet sunt
                            unde optio animi recusandae, pariatur, fugit natus perferendis. Itaque, nihil necessitatibus
                            quis alias repudiandae magni nam ex!
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            Quae, ipsa. Optio asperiores pariatur explicabo expedita suscipit tempora qui dolorum
                            repudiandae odit, repellendus rerum eaque, sit, nesciunt quia commodi architecto.
                            Perferendis consectetur voluptatem ad, voluptatum perspiciatis ab ipsa delectus. Cumque
                            earum quidem reprehenderit nobis error deleniti porro nesciunt perspiciatis? Mollitia quae
                            ducimus nemo quos aliquam! Nulla sapiente laudantium culpa facere quisquam corporis illo
                            praesentium ex. Modi possimus nam molestias.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            Illum dolore itaque laudantium? Hic veritatis, dolor dicta sit tenetur rerum iure, quo
                            voluptate atque delectus consectetur? Esse sequi dicta laborum exercitationem repellendus!
                            Dolorum aperiam est exercitationem atque, recusandae excepturi! Soluta earum consectetur,
                            quo itaque nostrum delectus explicabo officia magnam cupiditate hic, esse suscipit quod
                            reiciendis eius voluptatem pariatur est? Ab incidunt cum delectus dolore, voluptatem quo
                            dolor ipsa voluptatibus.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            Nobis, sed provident non qui placeat aliquid in id sint. Quod itaque ad assumenda nihil
                            nostrum asperiores fuga blanditiis laudantium maiores labore nulla eaque, laborum omnis.
                            Culpa ratione enim deleniti!
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            Accusamus tenetur commodi enim aliquid soluta et doloribus nihil dolor, rem numquam ipsa
                            impedit architecto culpa. Quae magnam fugiat nesciunt possimus culpa reiciendis. Quia soluta
                            dolor neque? Quod, tempore veritatis.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default CardRight;
