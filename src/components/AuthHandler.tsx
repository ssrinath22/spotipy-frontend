import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type AuthHandlerProps = {
    currToken: string | undefined
    setAuth: (arg0: string) => void
}

const AuthHandler: React.FC<AuthHandlerProps> = ({ currToken, setAuth }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const hash = window.location.hash
            .substring(1)
            .split('&')
            .reduce((initial: any, item) => {
                if (item) {
                    let parts = item.split('=');
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                }
                return initial;
            }, {});

        window.location.hash = '';

        if (hash.access_token) {
            setAuth(hash.access_token)
            navigate('/');
        } else {
            console.log(currToken)
            navigate('/home');
        }
    }, [navigate]);

    return <div>Authenticating...</div>;
};

export default AuthHandler;
