import React, { useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import NotAuthApi from 'api/NotAuthApi'
import Swal from 'sweetalert2'
const cx = classNames.bind(styles)
const Splash = () => {
  const navigate = useNavigate();
  let { uuid } = useParams();
  const checkUser = async () => {
    try {
      const response = await NotAuthApi.checkUser(uuid)
      if (response?.data?.status === 200) {
        if (response?.data?.data?.nickName) {
          navigate(`/card/${response?.data?.data?.nickName}`)
        } else {
          navigate('/auth', {
            state: {
              uuid: uuid
            }
          })
        }
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: response?.data?.message ?? 'Có lỗi xảy ra',
          showConfirmButton: true
        }).then(() => {
          navigate('/auth')

        })
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    localStorage.removeItem('access_token');

    const timeOut = setTimeout(() => {
      if (uuid) {
        checkUser()
      } else {
        navigate('/auth')
      }
    }, 4000);
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className={cx('splash')}>


    </div>
  )
}

export default Splash