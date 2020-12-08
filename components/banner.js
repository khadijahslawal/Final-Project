  
import React from 'react'
import styles from './banner.module.css'
import { Button } from '@material-ui/core'

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.banner__info}>
                <h1>
                    Blockchain based real estate investments
                </h1>
                <h5>
                    Invest in real estate properties fast and securely
                </h5>
                <Button variant="outlined">Explore New Properties</Button>
            </div>
        </div>
    )
}

export default Banner