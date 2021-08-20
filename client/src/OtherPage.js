import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <div>
            Im other page
            <Link to="/">go home</Link>
        </div>
    );
}