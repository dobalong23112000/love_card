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
import BRGIMG from 'assets/images/background_home.png'
import { ImMusic } from "react-icons/im";
import Play from 'components/Icons/Play'
import Skip from 'components/Icons/Skip'
import Previous from 'components/Icons/Previous'
import UserApi from 'api/UserApi'
const cx = classNames.bind(style)
const Card = () => {
    const [user, setUser] = useState()
    const { authState } = useContext(AuthContext)
    const [listMusic, setListMusic] = useState([])
    const [audioUrl, setAudioUrl] = useState()
    const [duration, setDuration] = useState(0);
    const getFile = async () => {
        const data = await UserApi.getFile();
        console.log(data);
        const url = window.URL.createObjectURL(new Blob([data.data], { type: 'audio/mpeg' }));
        const audio = new Audio(url);
        audio.addEventListener('loadedmetadata', () => {
            setDuration(audio.duration);
        });
        setAudioUrl(audio);

    }
    console.log({ duration })
    useEffect(() => {
        setUser(authState.user)
        // const {contentMusic} = authState.user?.contentMusic;
        if (authState.user?.contentMusic) {
            setListMusic(JSON.parse(authState.user?.contentMusic))
        }
        getFile();
    }, [authState])
    const handlePlayAudio = () => {
        audioUrl.play();
    };
    console.log({ listMusic })
    return (
        <div className='d-flex justify-content-center' style={{ minHeight: "926px", background: `url('${BRGIMG}')`, backgroundRepeat: "no-repeat", position: "relative", backgroundColor: "#FFE8E8", paddingBottom: "30px" }}>
            <div className={'wrapper'}>
                <div className={cx('heart-count')}>
                    <img src={heart_count} alt='' width={250.47} height={212.99}></img>
                    <div className={cx('text-count')}>{(user?.totalLoveDays ?? '365') + ' DAYS' ?? 'Số ngày yêu nhau'}</div>
                </div>
                <div className={'content'}>
                    <div className={cx('description')}>{user?.description ?? 'Mình đã bên nhau'}</div>
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
                                <img src={getZodiacSign(user?.dobMale) ?? kim_nguu} alt='' ></img>
                            </div>
                            <div className={cx('horoscope', 'w-50 d-flex justify-content-center')}>
                                <img src={getZodiacSign(user?.dobFemale) ?? song_ngu} alt='' ></img>
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
                <div className={cx('sub-content', 'mt-5')}>
                    <div className='text-center mb-3 mt-3' style={{ fontSize: "15px", lineHeight: "20px", color: "#FFABAB", fontWeight: "900" }}><ImMusic /><span className='ms-3 me-3' >Yêu lại từ đầu</span> <ImMusic /></div>
                    <div className='m-auto mb-3 mt-4' style={{ width: "80%" }}>
                        <Progress
                            value={50}
                            barStyle={{
                                backgroundColor: "#FFABAB"
                            }}
                        /></div>
                    <div className='text-center'>
                        <Previous />
                        <Play onClick={handlePlayAudio} />
                        <Skip />

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Card