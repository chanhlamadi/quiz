// 👇 import local font
import localFont from 'next/font/local'
import { SmallLogo } from '@/components/Logo'
import RootLayout from '@/layouts/RootLayout';
import { SignUpButton } from '../components/Buttons';

//👇 Configure our local font object
const myFont = localFont({ src: './../../public/technoraceitalic.otf' })

export default function SignUp() {
    return(
        <RootLayout>
            <div className="min-h-screen grid gird-rows-[10vh 90vh] justify-center">
                <div className=' flex items-center justify-center'>
                    <SmallLogo/>
                </div>
                <div>
                    <h3 className={`text-[48px] text-lemonYellow ${myFont.className}`}>Create Account</h3>
                    <form>
                        <div className={`flex flex-col items-center gap-[30px]`}>
                            <div>
                                <label className={`text-[24px] text-white ${myFont.className}`}>Username:</label>
                                <div>
                                    <input type="text" className={`w-[320px] h-[62px] border-deepTeal border-[2px] rounded-[10px] outline-none bg-transparent text-white text-[24px]`}/>
                                </div>
                            </div>
                            <div>
                                <label className={`text-[24px] text-white ${myFont.className}`}>Password:</label>
                                <div>
                                    <input type="password" className={`w-[320px] h-[62px] border-deepTeal border-[2px] rounded-[10px] outline-none bg-transparent text-white text-[24px]`}/>
                                </div>
                            </div>
                            <div>
                                <label className={`text-[24px] text-white ${myFont.className}`}>Confirm Password:</label>
                                <div>
                                    <input type="password" className={`w-[320px] h-[62px] border-deepTeal border-[2px] rounded-[10px] outline-none bg-transparent text-white text-[24px]`}/>
                                </div>
                            </div>
                            <SignUpButton/>
                        </div>
                    </form>
                    <span className={`text-white text-[16px] text-center mt-[10px] block w-full ${myFont.className}`}>Already have an account? <a href="/login" className={`text-paleMint underline`}>LogIn</a></span>
                </div>
            </div>
        </RootLayout>
    )
}
