import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { AiOutlineMail } from "react-icons/ai";

const cx = classNames.bind(styles)

const InputCustom = (props) => {
    return (
        <div style={{ position: "relative" }}>
            <AiOutlineMail style={{ position: "absolute", top: '23px', left: "18px", color: '#FFABAB', fontWeight: 600 }} size={12} />
            <input className={cx('input')} placeholder="Email" {...props}>
            </input>
        </div>

    )
}

export default InputCustom