import React, { useEffect, useState } from 'react';
import './HeroFour.css';

const HeroSectionFour = ({ selectedDescription }) => {
    const [initialDescription, setInitialDescription] = useState('');

    useEffect(() => {
        // Set the initial description when the component mounts
        if (selectedDescription) {
            setInitialDescription(selectedDescription);
        }
    }, [selectedDescription]);

    return (
        <div>
            <div>
                <h1 className='text-white text-center mb-3 mt-5'>
                    {initialDescription}
                </h1>
            </div>
        </div>
    );
};

export default HeroSectionFour;
