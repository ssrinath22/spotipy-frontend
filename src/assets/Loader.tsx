import React from 'react';
import YourSVG from './loader1.svg'; // Adjust the path accordingly

type MySVGProps = {
    color: string;
}

const Loader: React.FC<MySVGProps> = ({ color }) => {
    return (
        <div style={{ color: color }}>
            <YourSVG />
        </div>
    );
}

export default Loader;