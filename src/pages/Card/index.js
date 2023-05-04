import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import style from './style.module.scss'
import heart_count from 'assets/images/heart_count.png'
import { Progress } from 'reactstrap'
import Heart from 'components/Icons/Heart'
import song_ngu from 'assets/images/song_ngu.png'
import kim_nguu from 'assets/images/kim_nguu.png'
import avatar_male from 'assets/images/avatar_male.jpg'
import avatar_female from 'assets/images/avatar_female.png'
import getZodiacSign from 'helpers/getZodiacSign'
import BRGIMG from 'assets/images/background_home.png'
import { ImMusic } from "react-icons/im";
import Play from 'components/Icons/Play'
import Skip from 'components/Icons/Skip'
import Previous from 'components/Icons/Previous'
import NotAuthApi from 'api/NotAuthApi'
import Pause from 'components/Icons/Pause'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from 'components/Loading/Loader/Loader'
const cx = classNames.bind(style)
const Card = () => {
    const { nickName } = useParams()
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [audio, setAudio] = useState()
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlay, setIsPlay] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const handlePlayAudio = () => {
        if (currentTime === duration) {
            setCurrentTime(0)
        }
        audio.play();
        setIsPlay(true);

    };
    const handlePauseAudio = () => {
        audio.pause();
        setIsPlay(false)
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(audio?.currentTime || 0);
        }, 100);

        return () => {
            clearInterval(intervalId);


        };
    }, [audio]);
    const handleTimeUpdate = (e) => {
        audio.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    };
    const getUser = async () => {
        setIsLoading(true)
        try {
            const response = await NotAuthApi.getUser(nickName);
            if (response?.data?.status === 200) {
                setUser(response?.data?.data)
                await getFile()

            }
            else {
                navigate('/error')
            }
        } catch (e) {
            console.log(e)
        }
        setIsLoading(false)


    }
    const getFile = async () => {
        setIsLoading(true)
        const data = await NotAuthApi.getFile(nickName);
        const url = window.URL.createObjectURL(new Blob([data.data], { type: 'audio/mpeg' }));
        const audioElement = new Audio(url);
        audioElement.addEventListener('loadedmetadata', () => {
            setDuration(audioElement.duration);
        });
        audioElement.addEventListener('ended', () => {
            setIsPlay(false)
        });
        setAudio(audioElement);
        setIsLoading(false)
        return () => {
            audioElement.pause();
            audioElement.removeEventListener('loadedmetadata', () => { });
            audioElement.removeEventListener('ended', () => { });
        };
    }
    useEffect(() => {
        getUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            {isLoading ? <Loader /> : (<div className='d-flex justify-content-center' style={{ minHeight: "926px", background: `url('${BRGIMG}')`, backgroundRepeat: "no-repeat", position: "relative", backgroundColor: "#FFE8E8", paddingBottom: "30px" }}>
                <div className={'wrapper'}>
                    <div className={cx('heart-count')}>
                        <img src={heart_count} alt='' width={250.47} height={212.99}></img>
                        <div className={cx('text-count')}>{(user?.totalLoveDays ?? 'LOVE') + ' DAYS'}</div>
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
                    {audio && (
                        <div className={cx('sub-content', 'mt-5')}>
                            <div className='text-center mb-3 mt-3' style={{ fontSize: "15px", lineHeight: "20px", color: "#FFABAB", fontWeight: "900" }}><ImMusic /><span className='ms-3 me-3' >{user?.musicName ?? 'Music name'}</span> <ImMusic /></div>
                            <div className='m-auto mb-3 mt-4' style={{ width: "80%" }}>
                                {/* <Progress
                                value={(currentTime / duration) * 100}
                                barStyle={{
                                    backgroundColor: "#FFABAB"
                                }}
                                onChange={handleProgressBarClick}
                            /> */}
                                <input type="range" className='range2' id="range2" name="range2"
                                    min="0" max={duration} value={currentTime} onChange={handleTimeUpdate}></input>
                            </div>
                            <div className='text-center mt-3'>
                                <Previous />
                                {!isPlay ? <Play onClick={handlePlayAudio} /> :
                                    <Pause onClick={handlePauseAudio} />
                                }
                                <Skip />

                            </div>

                        </div>)
                    }

                </div>
            </div>)}

        </>

    )
}

export default Card