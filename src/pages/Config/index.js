import React, { useContext, useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import style from './style.module.scss'
import { FormProvider, useForm } from 'react-hook-form'
import { InputTextField } from 'components/CustomFields/InputTextFiled'
import Save from 'components/Icons/Save'
import moment from 'moment/moment'
import UserApi from 'api/UserApi'
import Loading from 'components/Loading'
import Swal from 'sweetalert2'
import { AuthContext } from 'contexts/AuthContext'
import { Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { FaRegEdit } from "react-icons/fa";
import AvatarEditor from 'react-avatar-editor';

const cx = classNames.bind(style)
const Config = () => {
    const [errors, setErrors] = useState()
    const { authState, loadUser } = useContext(AuthContext)
    const { ...methods } = useForm({ mode: 'onChange' });
    const [isLoading, setIsLoading] = useState(false);
    const [avatarMale, setAvatarMale] = useState('')
    const [avatarFemale, setAvatarFemale] = useState('')
    const [avatarEdit, setAvatarEdit] = useState({
        avatar: '',
        type: 1
    })
    const defaultValue = {
        nameMale: "",
        dobMale: "",
        descriptionMale: "",
        avatarMale: "",
        nameFemale: "",
        dobFemale: "",
        descriptionFemale: "",
        avatarFemale: "",
        dobStartLove: "", // Để định dạng dd-MM-yyyy nhé
        description: "",
        contentMusic: ""
    }
    const { setValue } = methods;
    const onSubmit = async (data) => {
        setErrors()
        setIsLoading(true);
        if (!avatarMale || !avatarFemale) {
            setErrors({

            })
        }
        try {
            let dataSend = {
                ...data,
                avatarMale,
                avatarFemale,
            }
            const response = await UserApi.update(dataSend);
            if (response?.data?.status === 200) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Lưu thông tin thành công',
                    showConfirmButton: true
                })
                await loadUser()
            }
            else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Có lỗi xảy ra',
                    showConfirmButton: true
                })
            }
        } catch (e) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Có lỗi xảy ra',
                showConfirmButton: true
            })
        }
        setIsLoading(false);
    }
    const onError = (errors) => {
        setErrors(errors)
    }
    useEffect(() => {
        if (authState.isAuthenticated) {
            const { nameMale,
                dobMale,
                descriptionMale,
                avatarMale,
                nameFemale,
                dobFemale,
                descriptionFemale,
                avatarFemale,
                dobStartLove, // Để định dạng dd-MM-yyyy nhé
                description, } = authState.user
            setValue('nameMale', nameMale)
            setValue('dobMale', dobMale)
            setValue('descriptionMale', descriptionMale)
            setValue('avatarMale', avatarMale)
            setValue('dobFemale', dobFemale)
            setValue('nameFemale', nameFemale)
            setValue('descriptionFemale', descriptionFemale)
            setValue('avatarFemale', avatarFemale)
            setValue('dobStartLove', dobStartLove)
            setValue('description', description)
            setAvatarMale(avatarMale)
            setAvatarFemale(avatarFemale)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getBase64AvatarMale = file => {
        return new Promise(resolve => {
            //   let fileInfo;
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                baseURL = reader.result;
                setAvatarMale(baseURL);
                // setPreViewAvatar(baseURL)
            };
        });
    };
    const getBase64AvatarFemale = file => {
        return new Promise(resolve => {
            //   let fileInfo;
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                baseURL = reader.result;
                setAvatarFemale(baseURL);
                // setPreViewAvatar(baseURL)
            };
        });
    };
    const [isOpenModalEditAvatar, setIsOpenModalEditAvatar] = useState(false)
    const toggleModalEditAvatar = () => {
        setIsOpenModalEditAvatar(false)
    }
    const cropRef = useRef(null);
    return (
        <>
            {isLoading && <Loading />}
            <div className={'wrapper'}>
                <div className='text-header'>CÀI ĐẶT</div>
                <div className={'content'}>
                    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", paddingTop: "36px" }}>
                        <FormProvider {...methods}>
                            <div className='mb-4'>
                                <InputTextField
                                    name="nameMale"
                                    label={''}
                                    placeholder={'Nick name bạn 1'}
                                    // formError={formError}
                                    defaultValue={defaultValue.nameMale}
                                    rules={{
                                        required: 'Nick name bạn 1 không được bỏ trống'
                                    }}

                                />
                                <div className='text-error mt-1 ps-4'>{errors?.nameMale?.message}</div>

                            </div>
                            <div className='mb-4'>
                                <InputTextField
                                    name="dobMale"
                                    label={''}
                                    placeholder={'Ngày-tháng-năm sinh'}
                                    // formError={formError}
                                    defaultValue={defaultValue.dobMale}
                                    rules={{
                                        required: 'Ngày-tháng-năm sinh sinh không được bỏ trống', validate: (data) => {
                                            const date = moment(data, 'DD-MM-YYYY', true);
                                            if (!date.isValid()) {
                                                return "Ngày-tháng-năm sinh sinh không đúng định dạng hoặc không tồn tại";
                                            }
                                        }
                                    }}

                                />
                                <div className='text-error mt-1 ps-4'>{errors?.dobMale?.message}</div>

                            </div>
                            <div className='mb-4'>
                                <InputTextField
                                    name="descriptionMale"
                                    label={''}
                                    placeholder={'Text mô tả 1'}
                                    // formError={formError}
                                    defaultValue={defaultValue.descriptionMale}
                                    rules={{ required: 'Text mô tả 1 không được bỏ trống' }}

                                />
                                <div className='text-error mt-1 ps-4'>{errors?.descriptionMale?.message}</div>

                            </div>
                            <div className='mb-4'>
                                <Label className="file-input-label" for="file-input">
                                    <span className="placeholder">Chọn Avatar bạn 1</span>
                                    <Input type="file" name="avatarMale" id="file-input" style={{ opacity: 0 }} onChange={(e) => {
                                        let img = e.target.files[0];
                                        if (img) {
                                            getBase64AvatarMale(img)
                                        }
                                    }} />
                                </Label>
                                {avatarMale && <div className={cx('avatar', 'mt-3')}>
                                    <img src={avatarMale} alt='' width={"100%"} height={"100%"}></img>
                                    <div className={(cx('wrap_icon'))} onClick={() => {
                                        setAvatarEdit({ avatar: avatarMale, type: 1 });
                                        setIsOpenModalEditAvatar(true)
                                    }}>
                                        <FaRegEdit size={24} color='white' />
                                    </div>
                                </div>}
                                <div className='text-error mt-1 ps-4'>{errors?.descriptionMale?.message}</div>
                            </div>
                            <div className='mb-4'>
                                <InputTextField
                                    name="nameFemale"
                                    label={''}
                                    placeholder={'Nick name bạn 2'}
                                    // formError={formError}
                                    defaultValue={defaultValue.nameFemale}
                                    rules={{ required: 'Nick name bạn 2 không được bỏ trống' }}

                                />
                                <div className='text-error mt-1 ps-4'>{errors?.nameFemale?.message}</div>

                            </div>
                            <div className='mb-4'>
                                <InputTextField
                                    name="dobFemale"
                                    label={''}
                                    placeholder={'Ngày-tháng-năm sinh'}
                                    // formError={formError}
                                    defaultValue={defaultValue.dobFemale}
                                    rules={{
                                        required: 'Ngày-tháng-năm sinh không được bỏ trống', validate: (data) => {
                                            const date = moment(data, 'DD-MM-YYYY', true);
                                            if (!date.isValid()) {
                                                return "Ngày-tháng-năm sinh không đúng định dạng hoặc không tồn tại";
                                            }
                                        }
                                    }}

                                />
                                <div className='text-error mt-1 ps-4'>{errors?.dobFemale?.message}</div>

                            </div>
                            <div className='mb-4'>
                                <InputTextField
                                    name="descriptionFemale"
                                    label={''}
                                    placeholder={'Text mô tả 2'}
                                    // formError={formError}
                                    defaultValue={defaultValue.descriptionFemale}
                                    rules={{ required: 'Text mô tả 2 sinh không được bỏ trống' }}
                                />
                                <div className='text-error mt-1 ps-4'>{errors?.descriptionFemale?.message}</div>

                            </div>
                            <div className='mb-4'>
                                <Label className="file-input-label" for="file-input-avatarFemale">
                                    <span className="placeholder">Chọn Avatar bạn 2</span>
                                    <Input type="file" name="avatarFemale" id="file-input-avatarFemale" style={{ opacity: 0 }} onChange={(e) => {
                                        let img = e.target.files[0];
                                        if (img) {
                                            getBase64AvatarFemale(img)
                                        }
                                    }} />

                                </Label>
                                {avatarFemale && <div className={cx('avatar', 'mt-3')}>
                                    <img src={avatarFemale} alt='' width={"100%"} height={"100%"}></img>
                                    <div className={(cx('wrap_icon'))} onClick={() => {
                                        setAvatarEdit({ avatar: avatarFemale, type: 2 });
                                        setIsOpenModalEditAvatar(true)
                                    }}>
                                        <FaRegEdit size={24} color='white' />

                                    </div>
                                </div>}

                            </div>
                            <div className='mb-4'>
                                <InputTextField
                                    name="dobStartLove"
                                    label={''}
                                    placeholder={'Ngày-tháng-năm yêu'}
                                    // formError={formError}
                                    defaultValue={defaultValue.dobStartLove}
                                    rules={{
                                        required: 'Ngày-tháng-năm yêu sinh không được bỏ trống', validate: (data) => {
                                            const date = moment(data, 'DD-MM-YYYY', true);
                                            if (!date.isValid()) {
                                                return "Ngày-tháng-năm yêu sinh không đúng định dạng hoặc không tồn tại";
                                            }
                                        }
                                    }}
                                />
                                <div className='text-error mt-1 ps-4'>{errors?.dobStartLove?.message}</div>

                            </div>
                            <div className='mb-4'>
                                <InputTextField
                                    name="description"
                                    label={''}
                                    placeholder={'Text mô tả'}
                                    // formError={formError}
                                    defaultValue={defaultValue.description}
                                    rules={{ required: 'Text mô tả không được bỏ trống' }}
                                />
                                <div className='text-error mt-1 ps-4'>{errors?.description?.message}</div>

                            </div>
                            <div className='icon_save' onClick={methods.handleSubmit(onSubmit, onError)}><Save /></div>
                        </FormProvider>

                    </div>
                </div>
                <Modal isOpen={isOpenModalEditAvatar} toggle={toggleModalEditAvatar} centered>
                    <ModalHeader toggle={toggleModalEditAvatar} ><span style={{ fontSize: "24px", fontWeight: "900", color: 'rgb(225, 143, 143)' }}>Chỉnh sửa Avatar</span></ModalHeader>
                    <ModalBody className='m-auto'>
                        <AvatarEditor
                            ref={cropRef}
                            image={avatarEdit?.avatar}
                            width={300}
                            height={300}
                            color={[255, 255, 255, 0.6]} // RGBA
                            scale={1.2}
                            rotate={0}
                            borderRadius={150}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{ background: 'rgb(225, 143, 143)', fontSize: '15px', borderColor: 'rgb(225, 143, 143)', width:"100px", height:'35px' }} onClick={async () => {
                            if (cropRef) {
                                const dataUrl = cropRef.current.getImage().toDataURL();
                                if (avatarEdit?.type === 1) {
                                    setAvatarMale(dataUrl)
                                } else {
                                    setAvatarFemale(dataUrl)
                                }
                            }
                            setIsOpenModalEditAvatar(false)
                        }}>
                            Lưu
                        </Button>{' '}
                        <Button style={{width:"100px", height:'35px', fontSize: '15px'}} onClick={toggleModalEditAvatar}>
                            Hủy
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </>

    )
}

export default Config