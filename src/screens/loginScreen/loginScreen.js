import React from 'react';
import './_loginScreen.scss';
function LoginScreen( ) {
    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
                    alt=""
                />
                <button>
                    Login with google
                </button>
                <p>
                    Youtube Clone Project
                </p>
            </div>
        </div>
    );
}

export default LoginScreen;