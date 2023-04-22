import React from 'react'
import classNames from 'classnames/bind'
import style from './style.module.scss'
import { IoMusicalNotesOutline,IoSettingsOutline ,IoHeartOutline} from "react-icons/io5";
const cx = classNames.bind(style)
const Footer = () => {
    
    return (
        <div className={cx('footer')}>
            <div className={cx('wrapper')}>
                <div className={cx('active-item')}>
                    <IoHeartOutline size={36} color='#BE6E6E' />
                </div>
                <div >
                    <IoSettingsOutline size={36} color='#BE6E6E'/>
                </div>
                <div>
                    <IoMusicalNotesOutline size={36} color='#BE6E6E'/>
                </div>
            </div>
        </div>
    )
}

export default Footer