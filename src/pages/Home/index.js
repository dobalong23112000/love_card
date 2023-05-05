import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import style from './style.module.scss'
import heart_count from 'assets/images/heart_count.png'
import { Progress } from 'reactstrap'
import Heart from 'components/Icons/Heart'
import song_ngu from 'assets/images/song_ngu.png'
import kim_nguu from 'assets/images/kim_nguu.png'
import avatar_male from 'assets/images/avatar_male.jpg'
import avatar_female from 'assets/images/avatar_female.png'
import { AuthContext } from 'contexts/AuthContext'
import getZodiacSign from 'helpers/getZodiacSign'
const cx = classNames.bind(style)
const Home = () => {
  const [user, setUser] = useState()
  const { authState } = useContext(AuthContext)
  useEffect(() => {
    setUser(authState.user)
  }, [authState])
  return (
    <div className={'wrapper'}>
      <div className={cx('heart-count')}>
        <img src={heart_count} alt='' width={250.47} height={212.99}></img>
        <div className={cx('text-count')}>{(user?.totalLoveDays ?? 'LOVE') + ' DAYS' }</div>
      </div>
      <div className={'content'}>
        <div className={cx('description')}>{user?.description ?? 'Mô tả tình yêu của 2 bạn'}</div>
        <div className={cx('timeline', 'd-flex mt-5 justify-content-around align-items-center')}>
          <div className={cx('text-timeline')}>{user?.totalLoveDays ?? '0'} ngày</div>
          <div className='w-50 position-relative'>
            <Progress value={(user?.totalLoveDays ? (Number(user?.totalLoveDays) % 100) : 0)} style={{
              backgroundColor: 'white',
              height: '3px'
            }} barClassName={cx('progress-bar')}>
            </Progress>
            <div style={{ position: "absolute", left: `${(user?.totalLoveDays ? (Number(user?.totalLoveDays) % 100) : 0) - 4}%`, top: '-7px' }}>
              <Heart />
            </div>
          </div>
          <div className={cx('text-timeline')}>{(user?.totalLoveDays ? (user?.totalLoveDays + (100 - (Number(user?.totalLoveDays) % 100))) : '0')} ngày</div>
        </div>
        <div className='mt-5'>
          <div className={cx('d-flex w-100 mb-3 justify-content-evenly')}>
            <div className={cx('avatar')}>
              <img src={user?.avatarMale ?? avatar_male} alt='' width={"100%"} height={"100%"}></img>
            </div>
            <div className={cx('avatar')}>
              <img src={user?.avatarFemale ?? avatar_female} alt='' width={"100%"} height={"100%"} ></img>
            </div>
          </div>

          <div className={cx('d-flex w-100 mb-3 justify-content-evenly')}>
            <div className={cx('name', 'w-50 ps-3 pe-3')}>
              {user?.nameMale ?? 'Tên bạn 1'}
            </div>
            <div className={cx('name', 'w-50 ps-3 pe-3 ')}>
              {user?.nameFemale ?? 'Tên bạn 2'}
            </div>
          </div>

          <div className={cx('d-flex w-100 mb-3 justify-content-evenly')}>
            <div className={cx('horoscope', 'w-50 d-flex justify-content-center')}>
              <img src={getZodiacSign(user?.dobMale) ?? kim_nguu} alt='' width={54} height={59}></img>
            </div>
            <div className={cx('horoscope', 'w-50 d-flex justify-content-center')}>
              <img src={getZodiacSign(user?.dobFemale) ?? song_ngu} alt='' width={54} height={59}></img>
            </div>
          </div>

          <div className={cx('d-flex w-100 justify-content-evenly')}>
            <div className={cx('description_user', 'w-50 ps-3 pe-3  text-center')}>
              {user?.descriptionMale ?? 'Mô tả bạn 1'}
            </div>
            <div className={cx('description_user', 'w-50 ps-3 pe-3 text-center')}>
              {user?.descriptionFemale ?? 'Mô tả bạn 2'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home