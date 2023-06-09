import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import style from './style.module.scss'
// import { IoMusicalNotesOutline, IoSettingsOutline, IoHeartOutline } from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';
import Config from 'components/Icons/Config';
import Music from 'components/Icons/Music';
import HeartFooter from 'components/Icons/HeartFooter';
const cx = classNames.bind(style)
const Footer = () => {
    const navigation = useNavigate();
    const location = useLocation(); // React Hook
    const [activeItem, setActiveItem] = useState(1);
    useEffect(() => {
        if (location.pathname === '/config') {
            setActiveItem(2)
        } else if (location.pathname === '/music') {
            setActiveItem(3)

        } else {
            setActiveItem(1)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className={cx('footer')}>
            <div className={cx('wrapper')}>
                <ul>
                    <li className={activeItem === 1 ? cx('active-item') : ''} onClick={() => {
                        navigation('/home')
                        setActiveItem(1)
                    }}>
                        <HeartFooter />
                    </li>
                    <li>
                    </li>
                    <li className={activeItem === 2 ? cx('active-item') : ''} onClick={() => {
                    navigation('/config')
                    setActiveItem(2)

                }}>
                        <Config />
                    </li>
                    <li>
                    </li>
                    <li className={activeItem === 3 ? cx('active-item') : ''} onClick={() => {
                    navigation('/music')
                    setActiveItem(3)

                }}>
                        <Music />
                    </li>
                    <div className={cx('indicator')}></div>
                </ul>
                {/* <div className={activeItem === 1 ? cx('active-item') : ''} onClick={() => {
                    navigation('/home')
                    setActiveItem(1)
                }}>
                    <HeartFooter />
                </div>
                <div className={activeItem === 2 ? cx('active-item') : ''} onClick={() => {
                    navigation('/config')
                    setActiveItem(2)

                }}>
                    <Config size={27} color='#BE6E6E' />
                </div>
                <div className={activeItem === 3 ? cx('active-item') : ''} onClick={() => {
                    navigation('/music')
                    setActiveItem(3)

                }}>
                    <Music size={27} color='#BE6E6E' />
                </div> */}

            </div>
        </div>
    )
}

export default Footer