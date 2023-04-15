import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const InputCustom = (props) => {
    let { icon, placeholder } = props;

    return (
        <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: '15px', left: "18px", color: '#FFABAB', fontWeight: 600 }}>
                {icon}
            </div>
            <input className={cx('input')} placeholder={placeholder} {...props}>
            </input>
        </div>

    )
}

export default InputCustom