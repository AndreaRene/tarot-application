const ProfileLeft = () => {
    return (
        <section style={ { width: '50%', height: '80%', display: 'flex', justifyContent: 'center' } }>
            <section style={ { width: '65%', textAlign: 'center', padding: '20px' } }>
                <div style={ { textAlign: 'center', marginBottom: '20px' } }>
                    <h2>User Information</h2>
                    <hr style={ { width: '60%' } } />
                </div>
                <div style={ { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' } }>
                    <label htmlFor="username">Username:</label>
                    <div id="username">JohnDoe</div>
                </div>
                <div style={ { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' } }>
                    <label htmlFor="name">Name:</label>
                    <div id="name">John Doe</div>
                </div>
                <div style={ { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' } }>
                    <label htmlFor="birthday">Birthday:</label>
                    <div id="birthday">01/01/1990</div>
                </div>
                <div style={ { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' } }>
                    <label htmlFor="email">Email:</label>
                    <div id="email">johndoe@example.com</div>
                </div>
                <div style={ { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' } }>
                    <label htmlFor="discord">Discord Tag:</label>
                    <div id="discord">JohnDoe#1234</div>
                </div>
                <div style={ { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' } }>
                    <label htmlFor="phone">Phone Number:</label>
                    <div id="phone">123-456-7890</div>
                </div>

                <div style={ { textAlign: 'center', marginTop: '30px', marginBottom: '20px' } }>
                    <h2>Reset Password</h2>
                    <hr style={ { width: '60%' } } />
                </div>
                <div style={ { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' } }>
                    <label htmlFor="currentPassword">Current Password:</label>
                    <input type="password" id="currentPassword" />
                </div>
                <div style={ { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' } }>
                    <label htmlFor="newPassword">New Password:</label>
                    <input type="password" id="newPassword" />
                </div>
                <div style={ { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' } }>
                    <label htmlFor="confirmPassword">Confirm New Password:</label>
                    <input type="password" id="confirmPassword" />
                </div>
                <div style={ { textAlign: 'center', marginTop: '4rem' } }>
                    <button onClick={ () => console.log( 'Reset Password button clicked' ) } style={ { backgroundColor: 'lightgrey', color: 'darkslategrey' } }>Reset Password</button>
                </div>
                <div style={ { textAlign: 'center', marginTop: '10px' } }>
                    <a href="#reset-email" style={ { color: 'whitesmoke', textDecoration: 'underline' } }>Reset via Email</a>
                </div>
            </section>
        </section>
    );
};

export default ProfileLeft;
