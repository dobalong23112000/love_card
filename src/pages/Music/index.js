import React, { useContext, useEffect, useState } from 'react'
// import classNames from 'classnames/bind'
// import style from './style.module.scss'
import { FormProvider, useForm } from 'react-hook-form'
import { InputTextField } from 'components/CustomFields/InputTextFiled'
import Save from 'components/Icons/Save'
import Loading from 'components/Loading'
import Swal from 'sweetalert2'
import UserApi from 'api/UserApi'
import { AuthContext } from 'contexts/AuthContext'
import { Input, Label } from 'reactstrap'
// const cx = classNames.bind(style)
const Music = () => {
    const { ...methods } = useForm({ mode: 'onChange' });
    const [errors, setErrors] = useState();
    const [isLoading, setIsLoading] = useState(false)
    const defaultValue = {
        name_song_1: "",
        name_song_2: "",
        name_song_3: "",
        link_song_1: "",
        link_song_2: "",
        link_song_3: "",
    }
    const { authState, loadUser } = useContext(AuthContext)
    const { setValue } = methods;
    const [file, setFile] = useState()
    useEffect(() => {
        if (authState.isAuthenticated) {
            const { contentMusic } = authState.user
            if (contentMusic) {
                const {
                    name_song_1,
                    name_song_2,
                    name_song_3,
                    link_song_1,
                    link_song_2,
                    link_song_3
                } = JSON.parse(contentMusic)
                setValue('name_song_1', name_song_1)
                setValue('name_song_2', name_song_2)
                setValue('name_song_3', name_song_3)
                setValue('link_song_1', link_song_1)
                setValue('link_song_2', link_song_2)
                setValue('link_song_3', link_song_3)
            }


        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const onSubmit = async (data) => {
        setErrors()
        setIsLoading(true);
        const formData = new FormData();
        formData.append('file', file);

        console.log({ formData })
        try {
            const response = await UserApi.updateMusic(formData);
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
    return (
        <>
            {isLoading && <Loading />}
            <div className={'wrapper'}>
                <div className='text-header'>BÀI HÁT CỦA CHÚNG MÌNH</div>
                <div className={'content'}>
                    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", paddingTop: "36px" }}>
                        <FormProvider {...methods}>
                            <div className='mt-5 mb-5'>
                                <InputTextField
                                    name="name_song_1"
                                    label={''}
                                    placeholder={'Tên bài hát 1'}
                                    // formError={formError}
                                    defaultValue={defaultValue.name_song_1}
                                    rules={{
                                        required: 'Tên bài hát 1 không được bỏ trống'
                                    }}
                                />
                                <div className='text-error mt-1 ps-4'>{errors?.name_song_1?.message}</div>

                            </div>
                            {/* <div className='mb-5'>
                                <InputTextField
                                    name="link_song_1"
                                    label={''}
                                    placeholder={'Link bài hát 1'}
                                    // formError={formError}
                                    defaultValue={defaultValue.link_song_1}
                                    rules={{
                                        required: 'Link bài hát 1 không được bỏ trống'
                                    }}
                                />
                                <div className='text-error mt-1 ps-4'>{errors?.link_song_1?.message}</div>

                            </div> */}
                            <div className='mb-5'>
                                <Label className="file-input-label" for="file-input-mp3">
                                    <div className="placeholder ">
                                        <div className='text-truncate'>
                                            {file ? file.name : 'Chọn file nhạc chúng mình '}
                                        </div></div>
                                    <Input type="file" accept="audio/mp3" name="mp3" id="file-input-mp3" style={{ opacity: 0 }} onChange={(e) => {
                                        let mp3file = e.target.files[0];
                                        // let newName = '123456' + "." + 'mp3';
                                        // const newFile = new File([mp3file], newName, { type: mp3file.type });
                                        // console.log({ newFile });
                                        // console.log({ mp3file })
                                        setFile(mp3file)
                                        // if (img) {
                                        //     getBase64AvatarFemale(img)
                                        // }
                                    }} />

                                </Label>
                                {/* {<div className={cx('avatar', 'mt-3')}>
                                    <img src={''} alt='' width={"100%"} height={"100%"}></img>
                                    <div className={(cx('wrap_icon'))} onClick={() => {
                                        // setAvatarEdit({ avatar: avatarFemale, type: 2 });
                                        // setIsOpenModalEditAvatar(true)
                                    }}>
                                        <FaRegEdit size={24} color='white' />

                                    </div>
                                </div>} */}

                            </div>
                            {/* <div className='mb-5'>
                                <InputTextField
                                    name="name_song_2"
                                    label={''}
                                    placeholder={'Tên bài hát 2'}
                                    // formError={formError}
                                    defaultValue={defaultValue.name_song_2}
                                    rules={{
                                        required: 'Tên bài hát 2 không được bỏ trống'
                                    }}
                                />
                                <div className='text-error mt-1 ps-4'>{errors?.name_song_2?.message}</div>

                            </div>
                            <div className='mb-5'>
                                <InputTextField
                                    name="link_song_2"
                                    label={''}
                                    placeholder={'Link bài hát 2'}
                                    // formError={formError}
                                    defaultValue={defaultValue.link_song_2}
                                    rules={{
                                        required: 'Link bài hát 2 không được bỏ trống'
                                    }}
                                />
                                <div className='text-error mt-1 ps-4'>{errors?.link_song_2?.message}</div>

                            </div>
                            <div className='mb-5'>
                                <InputTextField
                                    name="name_song_3"
                                    label={''}
                                    placeholder={'Tên bài hát 3'}
                                    // formError={formError}
                                    defaultValue={defaultValue.name_song_3}
                                    rules={{
                                        required: 'Tên bài hát 3 không được bỏ trống'
                                    }}
                                />
                                <div className='text-error mt-1 ps-4'>{errors?.name_song_3?.message}</div>

                            </div>
                            <div className='mb-5'>
                                <InputTextField
                                    name="link_song_3"
                                    label={''}
                                    placeholder={'Link bài hát 3'}
                                    // formError={formError}
                                    defaultValue={defaultValue.link_song_3}
                                    rules={{
                                        required: 'Link bài hát 3 không được bỏ trống'
                                    }}
                                />
                                <div className='text-error mt-1 ps-4'>{errors?.link_song_3?.message}</div>
                            </div> */}


                            <div className='icon_save' onClick={methods.handleSubmit(onSubmit, onError)}><Save /></div>
                        </FormProvider>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Music