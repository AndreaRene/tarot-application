export const deckContainer = (modalData) => {
    return (
        <div className='deckModalImgContainer'>
            <img
                className='deckModalImg'
                alt='image1'
                src={modalData.imageUrl}
            />
            <img
                className='deckModalImg middleImg'
                alt='image2'
                src={modalData.imageUrl}
            />
            <img
                className='deckModalImg'
                alt='image3'
                src={modalData.imageUrl}
            />
        </div>
    );
};

export const avatarContainer = (modalData) => {
    return (
        <div className='avatarModalContainer'>
            <img
                className='avatarShopModalImgs'
                src={modalData.imageUrl}
                alt={modalData.name}
            />
        </div>
    );
};

export const themeAndBundleContainer = (modalData) => {
    return (
        <div className='themeBundleModalContainer'>
            <img
                className='themeBundleShopModalImgs'
                src={modalData.imageUrl}
                alt={modalData.name}
            />
        </div>
    );
};
