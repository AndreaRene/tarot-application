import ProfilePicture from '../../assets/08_Strength.jpg'

const QuickUserInfo = () => {
    // Sample user data (replace with actual data)
    const user = {
        username: 'JohnDoe',
        message: 'Welcome back, John!',
        date: '5-10-2024',
        readingCount: '211'
    };

    return (
        <section style={ { display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3rem' } }>
            <div>{ user.username }</div>
            <img src={ ProfilePicture } alt="Profile" style={ { width: '100px', borderRadius: '50%', border: '6px solid slategrey', marginTop: '1rem', marginBottom:'1rem'} } />
            <div>{ user.message }</div>
            <div>Member since: { user.date }</div>
            <div>Total readings: { user.readingCount }</div>
        </section>
    );
};

export default QuickUserInfo;
