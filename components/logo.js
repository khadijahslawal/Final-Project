import React from 'react';
import logoImage from "../public/images/logo.jpg";
import style from "../components/logo.module.css";

function logo() {
    return (
        <div>
            <img src={logoImage} className={style.logo} />
        </div>
    )
}

export default logo
