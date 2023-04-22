import React from 'react'
import classNames from 'classnames/bind'
import style from './style.module.scss'
import heart_count from 'assets/images/heart_count.png'
import { Progress } from 'reactstrap'
import Heart from 'components/Icons/Heart'
import song_ngu from 'assets/images/song_ngu.png'
import kim_nguu from 'assets/images/kim_nguu.png'
import avatar_male from 'assets/images/avatar_male.jpg'
import avatar_female from 'assets/images/avatar_female.png'
const cx = classNames.bind(style)
const Home = () => {
  return (
    <div className={'wrapper'}>
      <div className={cx('heart-count')}>
        <img src={heart_count} alt='' width={250.47} height={212.99}></img>
        <div className={cx('text-count')}>365 NGÀY</div>
      </div>
      <div className={'content'}>
        <div className={cx('description')}>Mình đã bên nhau</div>
        <div className={cx('timeline', 'd-flex mt-5 justify-content-around align-items-center')}>
          <div className={cx('text-timeline')}>365 ngày</div>
          <div className='w-50 position-relative'>
            <Progress value={70} style={{
              backgroundColor: 'white',
              height: '3px'
            }} barClassName={cx('progress-bar')}>
            </Progress>
            <div style={{ position: "absolute", right: "25%", top: '-7px' }}>
              <Heart />
            </div>
          </div>
          <div className={cx('text-timeline')}>1000 ngày</div>
        </div>
        <div className='mt-5'>
          <div className={cx('d-flex w-100 mb-3 justify-content-evenly')}>
            <div className={cx('avatar')}>
              <img src={avatar_male} alt='' width={"100%"} height={"100%"}></img>
            </div>
            <div className={cx('avatar')}>
              <img src={avatar_female} alt='' width={"100%"} height={"100%"} ></img>
            </div>
          </div>

          <div className={cx('d-flex w-100 mb-3 justify-content-evenly')}>
            <div className={cx('name', 'w-50 ps-3 pe-3')}>
              Sơn Tùng M-TP
            </div>
            <div className={cx('name', 'w-50 ps-3 pe-3')}>
              Hải Tú
            </div>
          </div>

          <div className={cx('d-flex w-100 mb-3 justify-content-evenly')}>
            <div className={cx('horoscope', 'w-50 d-flex justify-content-center')}>
              <img src={kim_nguu} alt='' ></img>
            </div>
            <div className={cx('horoscope', 'w-50 d-flex justify-content-center')}>
              <img src={song_ngu} alt='' ></img>
            </div>
          </div>

          <div className={cx('d-flex w-100 justify-content-evenly')}>
            <div className={cx('description_user', 'w-50 ps-3 pe-3')}>
              Hoàng Dương yêu Thảo Anh nhất trên cuộc đời này, không ai có thể thay thể được
            </div>
            <div className={cx('description_user', 'w-50 ps-3 pe-3')}>
              Thảo Anh đéo yêu Hoàng Dương
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home