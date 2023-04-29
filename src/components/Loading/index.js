import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)
const Loading = () => {
    return (
        <div className={cx('Loader')}>
            <div className={cx('loading')}></div>
        </div>
    )
}

export default Loading