// ./pages/results/[id].js
'use client'
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import RootLayout from "@/layouts/RootLayout";
import { SmallLogo } from "@/components/Logo";
import { NormalButton, HomeButton } from "@/components/Buttons";

export default function Results() {
    const params = useParams();
    const { id } = params;
    const [data, setData] = useState(null);

    useEffect(() => {
        if (id) {
            fetchData();
        }
    }, [id]);

    const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API}/answers/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <RootLayout>
            <div className="grid px-6 grid-rows-[10vh 90vh]">
                <div className="flex justify-between items-center">
                    <SmallLogo />
                </div>
                <div className="mx-auto gap-[40px] flex flex-col items-center">
                    <div className="rounded-full bg-gray-500 w-[178px] h-[178px] border-deepTeal border-[2px] text-[61px] flex items-center justify-center">
                        {data?.marks}/10
                    </div>
                    <div className="flex items-center justify-center gap-[10px]">
                        <div className="bg-deepTeal w-[178px] h-[110px] flex flex-col item-center justify-center text-[32px] text-white rounded-[14px]">
                            <h5 className="text-center">{data?.marks}</h5>
                            <h5 className="text-center">Marks</h5>
                        </div>
                        <div className="bg-deepTeal w-[178px] h-[110px] flex flex-col item-center justify-center text-[32px] text-white rounded-[14px]">
                            <h5 className="text-center">{data?.duration}</h5>
                            <h5 className="text-center">Duration</h5>
                        </div>
                    </div>
                    <a href={`/answers/${id}`}><NormalButton value="View Answers"/></a>
                    <a href="/home"><HomeButton/></a>
                </div>
            </div>
        </RootLayout>
    );
}
