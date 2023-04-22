import React from 'react'
// import classNames from 'classnames/bind'
// import style from './style.module.scss'
import { FormProvider, useForm } from 'react-hook-form'
import { InputTextField } from 'components/CustomFields/InputTextFiled'
import Save from 'components/Icons/Save'
// const cx = classNames.bind(style)
const Music = () => {
    const { ...methods } = useForm({ mode: 'onChange' });
    return (
        <div className={'wrapper'}>
            <div className='text-header'>BÀI HÁT CỦA CHÚNG MÌNH</div>
            <div className={'content'}>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column", paddingTop: "36px" }}>
                    <FormProvider {...methods}>


                        <div className='mb-5'>
                            <InputTextField
                                name="address"
                                label={''}
                                placeholder={'Link bài hát 1'}
                                // formError={formError}
                                defaultValue={''}
                            />
                        </div>
                        <div className='mb-5'>
                            <InputTextField
                                name="address"
                                label={''}
                                placeholder={'Link bài hát 2'}
                                // formError={formError}
                                defaultValue={''}
                            />
                        </div>
                        <div className='mb-5'>
                            <InputTextField
                                name="address"
                                label={''}
                                placeholder={'Link bài hát 3'}
                                // formError={formError}
                                defaultValue={''}
                            />
                        </div>
                        <div className='mb-5'>
                            <InputTextField
                                name="address"
                                label={''}
                                placeholder={'Link bài hát 4'}
                                // formError={formError}
                                defaultValue={''}
                            />
                        </div>
                        <div className='icon_save'><Save /></div>
                    </FormProvider>

                </div>
            </div>
        </div>
    )
}

export default Music