import React, { useContext, useEffect, useState } from 'react'
// import classNames from 'classnames/bind'
// import style from './style.module.scss'
import { FormProvider, useForm } from 'react-hook-form'
import { InputTextField } from 'components/CustomFields/InputTextFiled'
import Save from 'components/Icons/Save'
import Loading from 'components/Loading'
import UserApi from 'api/UserApi'
import { AuthContext } from 'contexts/AuthContext'
import { Input, Label } from 'reactstrap'
import moment from 'moment'
import getMessageSuccess from 'helpers/getMessageSuccess'
import GetMessageValidate from 'helpers/GetMessageValidate'
// const cx = classNames.bind(style)
const Music = () => {
    const { ...methods } = useForm({ mode: 'onChange' });
    const [errors, setErrors] = useState();
    const [isLoading, setIsLoading] = useState(false)
    const defaultValue = {
        musicName: "",
        uuidFile: ""
    }
    const { authState, loadUser } = useContext(AuthContext)
    const { setValue } = methods;
    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState('')
    useEffect(() => {
        if (authState.isAuthenticated) {
            const { musicName, uuidFile } = authState.user
            setValue('musicName', musicName)
            setFileName(uuidFile)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const onSubmit = async (data) => {
        setErrors()
        setIsLoading(true);
        const formData = new FormData();
        if (file) {
            formData.append('file', file);

        } else {
            const emtyFile = new File([new ArrayBuffer(0)], 'empty-file.txt', { type: 'text/plain' })
            formData.append('file', emtyFile);
            console.log(emtyFile)
        }
        formData.append('fileName', fileName)
        formData.append('musicName', data.musicName)

        try {
            const response = await UserApi.updateMusic(formData);
            if (response?.data?.status === 200) {

                getMessageSuccess('Lưu thông tin thành công')
                await loadUser()
            }
            else {
                // Swal.fire({
                //     position: 'center',
                //     icon: 'error',
                //     title: 'Có lỗi xảy ra',
                //     showConfirmButton: true
                // })
                GetMessageValidate(response?.data?.message)

            }
        } catch (e) {
            // Swal.fire({
            //     position: 'center',
            //     icon: 'error',
            //     title: 'Có lỗi xảy ra',
            //     showConfirmButton: true
            // })
            GetMessageValidate('Có lỗi xảy ra')

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
                                    name="musicName"
                                    label={''}
                                    placeholder={'Tên bài hát 1'}
                                    // formError={formError}
                                    defaultValue={defaultValue.musicName}
                                    rules={{
                                        required: 'Tên bài hát 1 không được bỏ trống'
                                    }}
                                />
                                <div className='text-error mt-1 ps-4'>{errors?.musicName?.message}</div>

                            </div>

                            <div className='mb-5'>
                                <Label className="file-input-label" for="file-input-mp3">
                                    <div className="placeholder ">
                                        <div className='text-truncate'>
                                            {fileName ?? 'Chọn file nhạc chúng mình '}
                                        </div></div>
                                    <Input type="file" accept="audio/mp3" name="mp3" id="file-input-mp3" style={{ opacity: 0 }} onChange={(e) => {
                                        let mp3file = e.target.files[0];
                                        const nameFileOld = fileName.split(".")[0];
                                        var currentDate = moment().unix();
                                        let newName = `${nameFileOld}${currentDate}.mp3`;
                                        const newFile = new File([mp3file], newName, { type: mp3file.type });
                                        setFile(newFile)
                                        setFileName(newFile.name)

                                    }} />

                                </Label>

                            </div>

                            <div className='icon_save' onClick={methods.handleSubmit(onSubmit, onError)}><Save /></div>
                        </FormProvider>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Music