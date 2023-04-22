import React from 'react'

const Heart = (props) => {


    return (
        <svg width={29} height={26} viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g filter="url(#filter0_d_65_484)">
                <path d="M14.5 17C14.375 17.0007 14.2511 16.977 14.1353 16.9301C14.0196 16.8833 13.9143 16.8143 13.8256 16.727L6.44508 9.40449C5.51929 8.47757 5 7.22614 5 5.92204C5 4.61794 5.51929 3.36651 6.44508 2.43959C7.3781 1.5177 8.64197 1 9.95961 1C11.2772 1 12.5411 1.5177 13.4741 2.43959L14.5 3.45609L15.5259 2.43959C16.4589 1.5177 17.7228 1 19.0404 1C20.358 1 21.6219 1.5177 22.5549 2.43959C23.4807 3.36651 24 4.61794 24 5.92204C24 7.22614 23.4807 8.47757 22.5549 9.40449L15.1744 16.727C15.0857 16.8143 14.9804 16.8833 14.8647 16.9301C14.7489 16.977 14.625 17.0007 14.5 17Z" fill="url(#paint0_linear_65_484)" />
            </g>
            <defs>
                <filter id="filter0_d_65_484" x={0} y={0} width={29} height={26} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy={4} />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_65_484" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_65_484" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_65_484" x1="14.4834" y1={1} x2="14.4834" y2="26.614" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFABAB" />
                    <stop offset={1} stopColor="#FFABAB" />
                </linearGradient>
            </defs>
        </svg>

    )
}

export default Heart
