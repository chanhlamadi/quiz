'use client'
// Import necessary modules
import { useRouter } from "next/navigation";
import RootLayout from "@/layouts/RootLayout";
import { SmallLogo } from "@/components/Logo";
import QuestionsCard from "../components/QuestionsCard";
import AnswerSelection from "../components/AnswerSelection"; // Import AnswerSelection component
import { NextButton, SubmitButton } from "../components/Buttons";
import Timer from "../components/Timer";
import { useEffect, useState } from "react";
import QLoading from "../components/QLoading";

// Function to fetch data from the server
async function fetchData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/questions/random`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

// Function to send data to the server
async function sendDataToServer(data) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/answers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            throw new Error('Failed to submit answers');
        }

        const responseData = await res.json();
        return responseData._id
    } catch (error) {
        console.error('Error submitting answers:', error);
    }
}

// Main component
export default function Answers() {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [checkAnswer, setCheckAnswer] = useState();
    const router = useRouter();

    // Fetch data when component mounts
    useEffect(() => {
        const fetchDataAndSetData = async () => {
            try {
                const fetchedData = await fetchData();
                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchDataAndSetData();
    }, []);

    // Function to handle clicking on the next button
    const clickNextButton = () => {
        setIndex(index + 1);
        setAnswers(prevAnswers => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers.push(parseInt(checkAnswer));
            return updatedAnswers;
        });
        setCheckAnswer(undefined);
        
        // Check if it's the last question, and automatically submit if it is
        if (index === data.length - 1) {
            clickSubmitButton();
        }
    };

    // Function to handle clicking on the submit button
    const clickSubmitButton = async () => {
        setAnswers(prevAnswers => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers.push(parseInt(checkAnswer));
            return updatedAnswers;
        });
        
        if (answers.length === data.length) {
            try {
                const questions = data.map(i => i._id);
                const answerId = await sendDataToServer({ questions, answers });
                if (answerId) {
                    router.push(`/results/${answerId}`);
                } else {
                    console.error('Response ID not found in responseData');
                }
            } catch (error) {
                console.error('Error submitting answers:', error);
            }
        } else {
            console.log('Please answer all questions before submitting.');
        }
    };

    if (!data) {
        return <QLoading/>
    }

    // Function to choose an answer
    const chooseAnswer = (ans) => {
        setCheckAnswer(ans);
    };

    // Render the component
    return (
        <RootLayout>
            <div className="grid px-6 grid-rows-[10vh 90vh]">
                <div className="flex justify-between items-center">
                    <SmallLogo />
                    <div>
                        <Timer initialSeconds={60} runSubmit={() => {
                            const filledAnswers = answers.concat(Array.from({ length: data.length - answers.length }, () => null));
                            const questions = data.map(i => i._id);
                            sendDataToServer({ questions, answers: filledAnswers })
                                .then(answerId => {
                                    if (answerId) {
                                        router.push(`/results/${answerId}`);
                                    } else {
                                        console.error('Response ID not found in responseData');
                                    }
                                })
                                .catch(error => console.error('Error submitting answers:', error));
                        }} />
                    </div>
                </div>
                <div className="mx-auto gap-[20px] flex flex-col items-center">
                    <QuestionsCard question={data[index]?.question} />
                    <div className="flex flex-col gap-[10px]">
                        {/* Map through answers and render AnswerSelection component */}
                        {data[index]?.answers?.map((answer, index) => (
                            <AnswerSelection key={index} answer={answer} value={index} selected={index === checkAnswer} checkAnswer={checkAnswer} chooseAnswer={() => chooseAnswer(index)} />
                        ))}
                    </div>
                    {/* Conditional rendering of buttons */}
                    {index === data.length - 1 ? (
                        <SubmitButton clickSubmitButton={clickSubmitButton} />
                    ) : (
                        <NextButton clickNextButton={clickNextButton} />
                    )}
                </div>
            </div>
        </RootLayout>
    );
}
