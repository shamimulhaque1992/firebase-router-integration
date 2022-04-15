import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Thsi is registered</h2>
            <form action="">
                <input type="text" placeholder="Your name" /><br />
                <input type="email" placeholder="Your Email" /><br />
                <input type="password" placeholder="Password" /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;