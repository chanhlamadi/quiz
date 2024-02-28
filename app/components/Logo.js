// 👇 import local font
import localFont from 'next/font/local'

//👇 Configure our local font object
const myFont = localFont({ src: './../../public/technoraceitalic.otf' })

const LargeLogo = () => {
    return(
        <div className="flex items-baseline justify-center">
            <h1 className={`text-paleMint text-[200px] ${myFont.className}`}>Q</h1>
            <h6 className={`text-lemonYellow text-[64px] ${myFont.className}`}>uiz</h6>
        </div>
    )
}

const SmallLogo = () => {
    return (
        <h1 className={`text-paleMint text-[128px] ${myFont.className}`}>Q</h1>
    )
}

export {
    LargeLogo,
    SmallLogo
}
