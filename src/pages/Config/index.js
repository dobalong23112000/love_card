import React from 'react'
// import classNames from 'classnames/bind'
// import style from './style.module.scss'
import { FormProvider, useForm } from 'react-hook-form'
import { InputTextField } from 'components/CustomFields/InputTextFiled'
import Save from 'components/Icons/Save'
// const cx = classNames.bind(style)
const Config = () => {
    const { ...methods } = useForm({ mode: 'onChange' });
    return (
        <div className={'wrapper'}>
            <div className='text-header'>CÀI ĐẶT</div>
            <div className={'content'}>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column", paddingTop: "36px" }}>
                    <FormProvider {...methods}>
                        <div className='mb-4'>
                            <InputTextField
                                name="address"
                                label={''}
                                placeholder={'Nick name bạn 1'}
                                // formError={formError}
                                defaultValue={''}
                            />
                        </div>
                        <div className='mb-4'>
                            <InputTextField
                                name="address"
                                label={''}
                                placeholder={'Ngày/ tháng/ năm sinh'}
                                // formError={formError}
                                defaultValue={''}
                            />
                        </div>
                        <div className='mb-4'>
                            <InputTextField
                                name="address"
                                label={''}
                                placeholder={'Text mô tả 1'}
                                // formError={formError}
                                defaultValue={''}
                            />
                        </div>
                        <div className='mb-4'>
                            <InputTextField
                                name="address"
                                label={''}
                                placeholder={'Nick name bạn 2'}
                                // formError={formError}
                                defaultValue={''}
                            />
                        </div>
                        <div className='mb-4'>
                            <InputTextField
                                name="address"
                                label={''}
                                placeholder={'Ngày/ tháng/ năm sinh'}
                                // formError={formError}
                                defaultValue={''}
                            />
                        </div>
                        <div className='mb-4'>
                            <InputTextField
                                name="address"
                                label={''}
                                placeholder={'Text mô tả 2'}
                                // formError={formError}
                                defaultValue={''}
                            />
                        </div>
                        <div className='mb-4'>
                            <InputTextField
                                name="address"
                                label={''}
                                placeholder={'Ngày/ tháng/ năm yêu'}
                                // formError={formError}
                                defaultValue={''}
                            />
                        </div>
                        <div className='mb-4'>
                            <InputTextField
                                name="address"
                                label={''}
                                placeholder={'Text mô tả'}
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

export default Config