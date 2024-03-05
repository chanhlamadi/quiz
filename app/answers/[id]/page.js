'use client'
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import RootLayout from "@/layouts/RootLayout";
import { SmallLogo } from "@/components/Logo";
import QuestionsCard from "@/components/QuestionsCard";
import ShowAnswer from "@/app/components/ShowAnswer";
import { NextButton, SubmitButton } from "@/components/Buttons";
import QLoading from "@/app/components/QLoading";

async function fetchData(id) {
    const res = await fetch(`${process.env.API}/answers/${id}?populate=questions`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default function Answers() {
    const router = useRouter();
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [checkAnswer, setCheckAnswer] = useState(null);

    useEffect(() => {
        const fetchDataAndSetData = async () => {
            try {
                const fetchedData = await fetchData(id);
                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        if (id) {
            fetchDataAndSetData();
        }
    }, [id]);

    const clickNextButton = () => {
        setIndex(prevIndex => prevIndex + 1);
        setAnswers(prevAnswers => [...prevAnswers, parseInt(checkAnswer)]);
        setCheckAnswer(null);
    };

    const clickSubmitButton = () => {
        router.push(`/results/${id}`)
    };

    const chooseAnswer = (ans) => {
        setCheckAnswer(ans);
    };

    if (!data) {
        return <QLoading/>
    }

    const currentQuestion = data.questions[index];
    const currentAnswers = currentQuestion?.answers;

    return (
        <RootLayout>
            <div className="grid px-6 grid-rows-[10vh 90vh]">
                <div className="flex justify-between items-center">
                    <SmallLogo />
                </div>
                <div className="mx-auto gap-[20px] flex flex-col items-center">
                    <QuestionsCard question={currentQuestion.question} />
                    <div className="flex flex-col gap-[10px]">
                        {currentAnswers.map((answer, i) => (
                            <ShowAnswer
                                key={i}
                                answer={answer}
                                data={data}
                                value={i}
                                index={index}
                                selected={i === checkAnswer}
                                chooseAnswer={chooseAnswer}
                            />
                        ))}
                    </div>
                    {data.answers[index] === null && <h6 className="text-red-400">This question has not been answered</h6>}
                    {index === 9 ? (
                        <SubmitButton clickSubmitButton={clickSubmitButton} />
                    ) : (
                        <NextButton clickNextButton={clickNextButton} />
                    )}
                </div>
            </div>
        </RootLayout>
    );
}
