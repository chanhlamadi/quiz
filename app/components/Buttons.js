// 👇 import local font
import localFont from 'next/font/local'

//👇 Configure our local font object
const myFont = localFont({ src: './../../public/technoraceitalic.otf' })

const NormalButton = ({ bgColor, textColor, value }) => {
    return (
        <button className={`bg-${bgColor} text-${textColor} w-[343px] h-[67px] rounded-[10px] text-[32px] ${myFont.className}`}>
            {value}
        </button>
    )
}

const LogInButton = () => {
    return(
        <button className={`bg-deepTeal text-white w-[320px] h-[62px] rounded-[10px] text-[32px] ${myFont.className}`}>
            LogIn
        </button>
    )
}

const SignUpButton = () => {
    return(
        <button className={`bg-white text-deepTeal w-[343px] h-[67px] rounded-[10px] text-[32px] ${myFont.className}`}>
            SignUp
        </button>
    )
}

export {
    SignUpButton,
    LogInButton,
    NormalButton
}
