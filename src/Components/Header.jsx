import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/Global.module.css';

const Header = () => {
    return (
        <div className={styles.Header}>
            <Link to="/">
                <img src="codewexy logo.png" alt="" width="200px" height="100px" />
            </Link>
            <h1 className={styles.Heading}>Welcome to our Page</h1>
        </div>
    );
};

export default Header;