import React, { useContext, useState } from 'react'
import { AiOutlineMail, AiFillPhone, AiFillLock, AiOutlineUser } from "react-icons/ai";
import { Form, FormGroup, Input, Button } from 'reactstrap';
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { useForm } from 'react-hook-form';
import AuthApi from 'api/AuthApi';
import Swal from 'sweetalert2';
import { AuthContext } from 'contexts/AuthContext';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loader from 'components/Loading/Loader/Loader';
import Loading from 'components/Loading';
import GetMessageValidate from 'helpers/GetMessageValidate';
import successGif from '../../assets/images/done.gif'
const cx = classNames.bind(styles)
const Auth = () => {
    const { state } = useLocation();
    const { loginUser, authState } = useContext(AuthContext)
    const [isLogin, setIsLogin] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const { register: registerRegister, handleSubmit: handleSubmitRegister, reset: resetRegister, watch: watchRegister } = useForm();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigate();
    // Form đăng nhập
    const onSubmitLogin = async (data) => {
        const { email, password } = data;
        setLoading(true)
        setErrors()

        try {
            const response = await loginUser({
                email,
                passWord: password
            });
            if (response?.status === 200) {
                navigation('/home');
            } else {
                GetMessageValidate('Email hoặc mật khẩu không chính xác')
                // Swal.fire({
                //     position: 'center',
                //     icon: 'error',
                //     title: 'Email hoặc mật khẩu không chính xác',
                //     showConfirmButton: true
                // })
            }
        } catch (e) {
            GetMessageValidate('Có lỗi xảy ra')

        }

        setLoading(false)
    };

    const [errors, setErrors] = useState()
    const email = register('email', {
        required: 'Email không được bỏ trống'
    })
    // const phone = register('phone', { required: 'Số điện thoại không được bỏ trống' })
    const password = register('password', { required: 'Mật khẩu không được bỏ trống', })
    const onError = (errors) => {
        setErrors(errors)
    };

    // form đăng ký
    const email_register = registerRegister('email_register', {
        required: 'Email không được bỏ trống',
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Email không đúng định dạng"
        }
    })
    const phone_register = registerRegister('phone_register', {
        required: 'Số điện thoại không được bỏ trống', validate: (data) => {
            let check = new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/).test(data)
            if (!check) {
                return "Số điện thoại sai định dạng";
            }
        },
    })
    const password_register = registerRegister('password_register', {
        required: 'Mật khẩu không được bỏ trống',
        minLength: {
            value: 8,
            message: 'Mật khẩu có ít nhất 8 ký tự' // JS only: <p>error message</p> TS only support string
        },
    })
    const username = registerRegister('username', {
        required: 'Tên tài khoản không được bỏ trống',
        minLength: {
            value: 5,
            message: 'Tên tài khoản có ít nhất 5 ký tự' // JS only: <p>error message</p> TS only support string
        },
        validate: (data) => {
            let check = new RegExp(/^[a-zA-Z0-9]+$/).test(data)
            if (!check) {
                return "Tên tài khoản sai định dạng";
            }
        },
    })
    const confirm_password_register = registerRegister('confirm_password_register', {
        required: 'Nhập lại mật khẩu không được bỏ trống',

        validate: (data) => {
            if (watchRegister('password_register') !== data) {
                return "Mật khẩu nhập lại không chính xác";
            }
        },
    })
    //submit đăng ký
    const onSubmitRegister = async (data) => {
        setErrors();
        setLoading(true)
        if (state?.uuid) {
            const { email_register, password_register, phone_register, username } = data
            let dataRegister = {
                email: email_register,
                telephone: phone_register,
                passWord: password_register,
                nickName: username,
                uuid: state?.uuid,
            }
            try {
                const response = await AuthApi.register(dataRegister);
                if (response?.data?.status === 200) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `<div style="color: rgb(225, 143, 143); font-weight: bold">Đăng ký thành công</div>`,
                        imageUrl: successGif,
                        background: 'linear-gradient(to top, white, #FFABAB)',
                        showConfirmButton: true,
                        confirmButtonColor: '#FFABAB',
                        confirmButtonText: '<div style="color: white;font-weight: bold;width: 135px;height: 30px;display: flex;align-items: center;justify-content: center;font-size: 18px">Đóng</div>',
                    }).then(() => {
                        setIsLogin(true);
                    })
                    resetRegister();
                } else {
                    // Swal.fire({
                    //     position: 'center',
                    //     icon: 'error',
                    //     title: response?.data?.message,
                    //     showConfirmButton: true
                    // })
                    GetMessageValidate(response?.data?.message)

                }
            } catch (e) {
                GetMessageValidate('Có lỗi xảy ra')
                // Swal.fire({
                //     position: 'center',
                //     icon: 'error',
                //     title: 'Có lỗi xảy ra',
                //     showConfirmButton: true
                // })
            }
        } else {
            // Swal.fire({
            //     position: 'center',
            //     icon: 'error',
            //     title: 'Bạn chưa được cấp mã thẻ',
            //     showConfirmButton: true
            // })
            GetMessageValidate('Bạn chưa được cấp mã thẻ')

        }
        setLoading(false)

    }

    if (authState.isAuthenticated) {
        return <Navigate to='/home' replace={true} />
    }
  
    return (
        <>
            {(authState.authLoading) && <Loader />}
            {(loading) && <Loading />}
            <div className={`${cx('wrapper')} ${isLogin ? "login_background" : "register_background"}`}>
                <div className={`${cx('login-text')} mt-5 ${isLogin ? "active-text-login" : "nonactive-text-login"}`} onClick={() => {
                    setIsLogin(true);
                    resetRegister()
                    setErrors()
                }}>ĐĂNG NHẬP</div>

                <div className={`${!isLogin ? 'active-form-register' : 'active-form-login'}`}>
                </div>
                {isLogin && (<Form className={`
            d-flex justify-content-center align-items-center flex-column
            ${!isLogin ? 'active-form' : 'nonactive-form'}`}
                    name='login_form'
                    style={{ position: "absolute", top: "190px", marginTop: "60px" }}
                >
                    <FormGroup className={cx('form_group')}
                    >
                        <div style={{ position: "absolute", top: '15px', left: "18px", color: '#FFABAB', fontWeight: 600, zIndex: 1 }}>
                            <AiOutlineMail size={12} />
                        </div>
                        <Input
                            id="exampleEmail"
                            placeholder="Email"
                            type="email"
                            name={email.name}
                            onChange={email.onChange}
                            onBlur={email.onBlur}
                            innerRef={email.ref}
                            className={errors?.email && `input-error`}
                        />
                        <div className='text-error mt-1 ps-4'>{errors?.email?.message}</div>

                    </FormGroup>
                    {/* <FormGroup className={`${cx('form_group')}`}>
                        <div style={{ position: "absolute", top: '15px', left: "18px", color: '#FFABAB', fontWeight: 600, zIndex: 1 }}>
                            <AiFillPhone size={12} />
                        </div>
                        <Input
                            id="examplePhone"
                            placeholder="Số điện thoại"
                            type="text"
                            name={phone.name}
                            onChange={phone.onChange}
                            onBlur={phone.onBlur}
                            innerRef={phone.ref}
                            className={errors?.phone && `input-error`}
                        />
                        <div className='text-error mt-1 ps-4'>{errors?.phone?.message}</div>
                    </FormGroup> */}
                    <FormGroup className={cx('form_group')}>
                        <div style={{ position: "absolute", top: '15px', left: "18px", color: '#FFABAB', fontWeight: 600, zIndex: 1 }}>
                            <AiFillLock size={12} />
                        </div>
                        <Input
                            id="examplePassword"
                            placeholder="Mật khẩu"
                            type="password"
                            name={password.name}
                            onChange={password.onChange}
                            onBlur={password.onBlur}
                            innerRef={password.ref}
                            className={errors?.password && `input-error`}
                        />
                        <div className='text-error mt-1 ps-4'>{errors?.password?.message}</div>

                    </FormGroup>
                    <FormGroup className='text-center'
                        onClick={handleSubmit(onSubmitLogin, onError)}
                    >
                        <Button className={cx('button_submit')} type='submit'>
                            Let's go
                        </Button>
                    </FormGroup>
                </Form>)
                }
                {!isLogin && (<Form className={`d-flex justify-content-center align-items-center flex-column ${!!isLogin ? 'active-form' : 'nonactive-form'}`} style={{ position: "absolute", top: "230px" }} name='register_form'>
                    <FormGroup className={cx('form_group')}>
                        <div style={{ position: "absolute", top: '15px', left: "18px", color: '#FFABAB', fontWeight: 600, zIndex: 1 }}>
                            <AiOutlineMail size={12} />
                        </div>
                        <Input
                            id="exampleEmail"
                            placeholder="Email"
                            type="email"
                            name={email_register.name}
                            onChange={email_register.onChange}
                            onBlur={email_register.onBlur}
                            innerRef={email_register.ref}
                            className={errors?.email_register && `input-error`}
                        />
                        <div className='text-error mt-1 ps-4'>{errors?.email_register?.message}</div>
                    </FormGroup>
                    <FormGroup className={cx('form_group')}>
                        <div style={{ position: "absolute", top: '15px', left: "18px", color: '#FFABAB', fontWeight: 600, zIndex: 1 }}>
                            <AiFillPhone size={12} />
                        </div>
                        <Input
                            id="examplePhone"
                            placeholder="Số điện thoại"
                            type="text"
                            name={phone_register.name}
                            onChange={phone_register.onChange}
                            onBlur={phone_register.onBlur}
                            innerRef={phone_register.ref}
                            className={errors?.phone_register && `input-error`}
                        />
                        <div className='text-error mt-1 ps-4'>{errors?.phone_register?.message}</div>
                    </FormGroup>
                    <FormGroup className={cx('form_group')}>
                        <div style={{ position: "absolute", top: '15px', left: "18px", color: '#FFABAB', fontWeight: 600, zIndex: 1 }}>
                            <AiOutlineUser size={12} />
                        </div>
                        <Input
                            id="exampleUsername"
                            placeholder="Tên tài khoản"
                            type="text"
                            name={username.name}
                            onChange={username.onChange}
                            onBlur={username.onBlur}
                            innerRef={username.ref}
                            className={errors?.username && `input-error`}
                        />
                        <div className='text-error mt-1 ps-4'>{errors?.username?.message}</div>
                    </FormGroup>
                    <FormGroup className={cx('form_group')}>
                        <div style={{ position: "absolute", top: '15px', left: "18px", color: '#FFABAB', fontWeight: 600, zIndex: 1 }}>
                            <AiFillLock size={12} />
                        </div>
                        <Input
                            id="examplePassword"
                            placeholder="Mật khẩu"
                            type="password"
                            name={password_register.name}
                            onChange={password_register.onChange}
                            onBlur={password_register.onBlur}
                            innerRef={password_register.ref}
                            className={errors?.password_register && `input-error`}
                        />
                        <div className='text-error mt-1 ps-4'>{errors?.password_register?.message}</div>
                    </FormGroup>
                    <FormGroup className={cx('form_group')}>
                        <div style={{ position: "absolute", top: '15px', left: "18px", color: '#FFABAB', fontWeight: 600, zIndex: 1 }}>
                            <AiFillLock size={12} />
                        </div>
                        <Input
                            id="exampleConfirmPassword"
                            placeholder="Nhập lại mật khẩu"
                            type="password"
                            name={confirm_password_register.name}
                            onChange={confirm_password_register.onChange}
                            onBlur={confirm_password_register.onBlur}
                            innerRef={confirm_password_register.ref}
                            className={errors?.confirm_password_register && `input-error`}
                        />
                        <div className='text-error mt-1 ps-4'>{errors?.confirm_password_register?.message}</div>
                    </FormGroup>
                    <FormGroup className='text-center'
                        style={{ zIndex: 10 }}
                        onClick={handleSubmitRegister(onSubmitRegister, onError)}
                    >

                        <Button className={cx('button_submit')}>
                            Let's go
                        </Button>
                    </FormGroup>
                </Form>)}
                <div className={`${cx('footer-register')} ${!isLogin ? 'nonactive-footer' : 'active-footer'}`} onClick={() => {
                    setIsLogin(false)
                }}>


                </div>
                <div className={`${!isLogin ? "active-text-register" : "nonactive-text-register"} ${cx('register-text')}`} onClick={() => {
                    setIsLogin(false);
                    reset();
                    setErrors()

                }}>ĐĂNG KÝ</div>
            </div>
        </>


    )
}

export default Auth