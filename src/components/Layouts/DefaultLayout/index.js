import React from 'react'
import Footer from './Footer'
import BRGIMG from '../../../assets/images/background_home.png'
const DefaultLayout = ({ children }) => {
    return (
        <div className='d-flex justify-content-center' style={{ minHeight: "926px", background: `url('${BRGIMG}')`, backgroundRepeat: "no-repeat", position: "relative", backgroundColor: "#FFE8E8", paddingBottom:"150px" }}>
            {children}
            <Footer />
        </div>
    )
}

export default DefaultLayout