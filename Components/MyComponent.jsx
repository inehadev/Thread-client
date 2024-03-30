import React, { useEffect, useState } from 'react';

const MyComponent = () => {
    const [token, setToken] = useState('');

    useEffect(() => {
        // Retrieve token from localStorage
        const storedToken = localStorage.getItem("x-auth-token");
        if (storedToken) {
            // Update state with token value
            setToken(storedToken);
        }
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div>
            <p>Token: {token}</p>
        </div>
    );
};

export default MyComponent;
