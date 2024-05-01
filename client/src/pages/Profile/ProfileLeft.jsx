import './Profile.css';

const ProfileLeft = () => {
    return (
        <section className='left-pro-container'>
            <section className='left-pro-content' style={ { width: '65%', textAlign: 'center', padding: '20px' } }>
                <div style={ { textAlign: 'center', marginBottom: '20px' } }>
                    <h2>User Information</h2>
                    <hr className='hr-dash' />
                </div>
                <div className='fields'>
                    <label htmlFor="username">Username:</label>
                    <div id="username">JohnDoe</div>
                </div>
                <div className='fields'>
                    <label htmlFor="name">Name:</label>
                    <div id="name">John Doe</div>
                </div>
                <div className='fields'>
                    <label htmlFor="birthday">Birthday:</label>
                    <div id="birthday">01/01/1990</div>
                </div>
                <div className='fields'>
                    <label htmlFor="email">Email:</label>
                    <div id="email">johndoe@example.com</div>
                </div>
                <div className='fields'>
                    <label htmlFor="discord">Discord Tag:</label>
                    <div id="discord">JohnDoe#1234</div>
                </div>
                <div className='fields'>
                    <label htmlFor="phone">Phone Number:</label>
                    <div id="phone">123-456-7890</div>
                </div>

                <div className='reset'>
                    <h2>Reset Password</h2>
                    <hr className='hr-dash'/>
                </div>
                <div className='fields'>
                    <label htmlFor="currentPassword">Current Password:</label>
                    <input type="password" id="currentPassword" />
                </div>
                <div className='fields'>
                    <label htmlFor="newPassword">New Password:</label>
                    <input type="password" id="newPassword" />
                </div>
                <div className='fields'>
                    <label htmlFor="confirmPassword">Confirm New Password:</label>
                    <input type="password" id="confirmPassword" />
                </div>
                <div className='btn-cont'>
                    <button className='button reset-btn' onClick={ () => console.log( 'Reset Password button clicked' ) }>Reset Password</button>
                </div>
                <div className='reset-link'>
                    <a href="#reset-email" style={ { color: 'whitesmoke', textDecoration: 'underline' } }>Reset via Email</a>
                </div>
            </section>
        </section>
    );
};

export default ProfileLeft;
