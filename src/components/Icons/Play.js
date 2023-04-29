import React from 'react'

const Play = (props) => {


    return (
        <svg width={60} height={59} viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g filter="url(#filter0_d_397_99)">
                <g clipPath="url(#clip0_397_99)">
                    <rect x={4} y={4} width={48} height={48} rx={24} fill="url(#paint0_linear_397_99)" />
                    <g filter="url(#filter1_i_397_99)">
                        <path d="M28.7931 17.3832C28.2213 16.8563 27.5074 16.5091 26.7399 16.3846C25.9724 16.2602 25.1853 16.364 24.4764 16.6832C23.7882 16.9616 23.1986 17.4389 22.783 18.054C22.3674 18.6691 22.1446 19.3942 22.1431 20.1366V35.8632C22.1446 36.6056 22.3674 37.3307 22.783 37.9458C23.1986 38.5609 23.7882 39.0382 24.4764 39.3166C24.9822 39.546 25.531 39.6653 26.0864 39.6666C27.0872 39.6621 28.0511 39.2882 28.7931 38.6166L37.3331 30.7532C37.715 30.4035 38.02 29.9781 38.2287 29.504C38.4373 29.03 38.5451 28.5178 38.5451 27.9999C38.5451 27.482 38.4373 26.9698 38.2287 26.4957C38.02 26.0217 37.715 25.5963 37.3331 25.2466L28.7931 17.3832ZM26.8331 34.0666V21.9332L33.3897 27.9999L26.8331 34.0666Z" fill="#D17979" />
                    </g>
                </g>
            </g>
            <defs>
                <filter id="filter0_d_397_99" x={0} y={0} width={60} height={60} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx={2} dy={2} />
                    <feGaussianBlur stdDeviation={3} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_397_99" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_397_99" result="shape" />
                </filter>
                <filter id="filter1_i_397_99" x="22.1431" y="16.3335" width="16.4021" height="27.333" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy={4} />
                    <feGaussianBlur stdDeviation={2} />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_397_99" />
                </filter>
                <linearGradient id="paint0_linear_397_99" x1={4} y1={28} x2={55} y2={28} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFDADA" />
                    <stop offset={1} stopColor="#FEB2B2" />
                </linearGradient>
                <clipPath id="clip0_397_99">
                    <rect x={4} y={4} width={48} height={48} rx={24} fill="white" />
                </clipPath>
            </defs>
        </svg>



    )
}

export default Play
