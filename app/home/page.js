import RootLayout from "@/layouts/RootLayout";
import { SmallLogo } from "@/components/Logo";

export default function Home() {
    return (
        <RootLayout>
            <div className="grid px-6 grid-rows-[10vh 90vh]">
                <div className="flex justify-between items-center">
                    <SmallLogo />
                    <div>
                        {/* <span class="inline-block bg-deepTeal rounded-[10px] min-w-[63px] p-[10px] text-[18px] text-white text-center mr-2">27</span> */}
                    </div>
                </div>
                <a href="/answers" className="mx-auto">
                    <div className="mx-auto text-center text-white mt-[200px]">
                        <div className="bg-lemonYellow w-[200px] h-[200px] rounded-full flex justify-center items-center animate-pulse">
                            <svg className="w-[95px] h-[95px] text-mitzvah transform rotate-x-45" fill="#212F45" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z" />
                            </svg>
                        </div>
                        <h3 className="text-[64px]">Play</h3>
                    </div>
                </a>
            </div>
        </RootLayout>
    )
}
