import { NormalButton, LogInButton, SignUpButton } from "./components/Buttons";
import RootLayout from "./layouts/RootLayout";
import { LargeLogo } from '@/components/Logo';

export default function Home() {
    return(
        <RootLayout>
        {/*<div className="min-h-screen flex items-center justify-center">
                <LargeLogo/>
            </div>*/}
            <div className="min-h-screen grid grid-rows-2 items-center justify-center">
                <div className="">
                    <LargeLogo/>
                </div>
                <div className="w-full flex flex-col gap-[30px]">
                    <LogInButton/>
                    <SignUpButton/>
                </div>
            </div>
        </RootLayout>
    )
}
