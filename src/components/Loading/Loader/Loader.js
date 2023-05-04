import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'


const cx = classNames.bind(styles)
const Loader = () => {
 
    return (
        <div className={cx('Loader')}>
        </div>
    )
}

export default Loader