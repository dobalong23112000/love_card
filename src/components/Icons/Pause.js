import React from 'react'

const Pause = (props) => {


    return (
        <svg width={60} height={59} viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g filter="url(#filter0_d_85_246)">
                <g clipPath="url(#clip0_85_246)">
                    <rect x={4} y={4} width={48} height={48} rx={24} fill="url(#paint0_linear_85_246)" />
                    <g filter="url(#filter1_i_85_246)">
                        <path d="M35.1562 17H21.1771C20.3345 17 19.5264 17.3347 18.9305 17.9305C18.3347 18.5264 18 19.3345 18 20.1771V34.1562C18 34.9989 18.3347 35.807 18.9305 36.4028C19.5264 36.9986 20.3345 37.3333 21.1771 37.3333H35.1562C35.9989 37.3333 36.807 36.9986 37.4028 36.4028C37.9986 35.807 38.3333 34.9989 38.3333 34.1562V20.1771C38.3333 19.3345 37.9986 18.5264 37.4028 17.9305C36.807 17.3347 35.9989 17 35.1562 17ZM33.25 32.25H23.0833V22.0833H33.25V32.25Z" fill="#BE6E6E" />
                    </g>
                </g>
            </g>
            <defs>
                <filter id="filter0_d_85_246" x={0} y={0} width={60} height={60} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx={2} dy={2} />
                    <feGaussianBlur stdDeviation={3} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_85_246" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_85_246" result="shape" />
                </filter>
                <filter id="filter1_i_85_246" x={18} y={17} width="20.3333" height="24.3333" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy={4} />
                    <feGaussianBlur stdDeviation={2} />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_85_246" />
                </filter>
                <linearGradient id="paint0_linear_85_246" x1={4} y1={28} x2={55} y2={28} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFDADA" />
                    <stop offset={1} stopColor="#FEB2B2" />
                </linearGradient>
                <clipPath id="clip0_85_246">
                    <rect x={4} y={4} width={48} height={48} rx={24} fill="white" />
                </clipPath>
            </defs>
        </svg>




    )
}

export default Pause

