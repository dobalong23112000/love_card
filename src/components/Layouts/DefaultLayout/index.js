import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import BRGIMG from '../../../assets/images/background_home.png'
import CONFIGIMG from '../../../assets/images/config_background.png'
import MUSICIMG from '../../../assets/images/music_background.png'
const DefaultLayout = ({ children }) => {
    const [background,setBackground] = useState(BRGIMG)
    useEffect(()=>{
        const path = window.location.pathname;
        if(path === '/config') {
            setBackground(CONFIGIMG)
        } else if(path === '/music') {
            setBackground(MUSICIMG)
        } else {
            setBackground(BRGIMG)

        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[window.location.pathname])
    return (
        <div className='d-flex justify-content-center container' style={{ minHeight: "100vh", position: "relative", paddingBottom:"150px", backgroundImage: `url('${background}')` }}>
            {children}
            <Footer />
        </div>
    )
}

export default DefaultLayout