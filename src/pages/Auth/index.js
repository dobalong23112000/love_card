import React, { useState } from 'react'
import { AiOutlineMail, AiFillPhone, AiFillLock, AiOutlineUser } from "react-icons/ai";
import { Form, FormGroup, Input, Button } from 'reactstrap';
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { useForm } from 'react-hook-form';
const cx = classNames.bind(styles)
const Auth = () => {
    const [isRegister, setIsRegiser] = useState(false)
    const [isLogin, setIsLogin] = useState(true);
    const { register, handleSubmit, reset } = useForm();
    const { register: registerRegister, handleSubmit: handleSubmitRegister, reset: resetRegister } = useForm();
    // Form đăng nhập
    const onSubmitLogin = (data) => {
        setErrors()
    };

    const [errors, setErrors] = useState()
    const email = register('email', { required: 'Email không được bỏ trống' })
    const phone = register('phone', { required: 'Số điện thoại không được bỏ trống' })
    const password = register('password', { required: 'Mật khẩu không được bỏ trống' })
    const onError = (errors) => {
        setErrors(errors)
    };

    // form đăng ký
    const email_register = registerRegister('email_register', { required: 'Email không được bỏ trống' })
    const phone_register = registerRegister('phone_register', { required: 'Số điện thoại không được bỏ trống' })
    const password_register = registerRegister('password_register', { required: 'Mật khẩu không được bỏ trống' })
    const username = registerRegister('username', { required: 'Tên tài khoản không được bỏ trống' })
    const confirm_password_register = registerRegister('confirm_password_register', { required: 'Nhập lại mật khẩu không được bỏ trống' })
    //submit đăng ký
    const onSubmitRegister = (data) => {
        setErrors()
    }
    return (
        <div className={`${cx('wrapper')} ${isLogin ? "login_background" : "register_background"}`}>
            <div className={`${cx('login-text')} mt-5 ${isLogin ? "active-text-login" : "nonactive-text-login"}`} onClick={() => {
                setIsLogin(true);
                setIsRegiser(false)
                resetRegister()
                setErrors()
            }}>ĐĂNG NHẬP</div>

            <div className={`${isRegister ? 'active-form-register' : 'active-form-login'}`}>
            </div>
            {isLogin && (<Form className={`
            d-flex justify-content-center align-items-center flex-column mt-5 
            ${isRegister ? 'active-form' : 'nonactive-form'}`}
                name='login_form'
                style={{ position: "absolute", top: "282px" }}
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
                <FormGroup className={`${cx('form_group')}`}>
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
                </FormGroup>
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
            {isRegister && (<Form className={`d-flex justify-content-center align-items-center flex-column ${!isRegister ? 'active-form' : 'nonactive-form'}`} style={{ position: "absolute", top: "330px" }} name='register_form'>
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
            <div className={`${cx('footer-register')} ${isRegister ? 'nonactive-footer' : 'active-footer'}`} onClick={() => {
                setIsRegiser(true);
                setIsLogin(false)
            }}>


            </div>
            <div className={`${isRegister ? "active-text-register" : "nonactive-text-register"} ${cx('register-text')}`} onClick={() => {
                setIsRegiser(true);
                setIsLogin(false);
                reset();
                setErrors()

            }}>ĐĂNG KÝ</div>
        </div>

    )
}

export default Auth