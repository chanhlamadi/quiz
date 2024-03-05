import { NextButton, NormalButton } from "./Buttons";

export default function QuestionsCard({question}) {
    return (
        <div className="bg-deepTeal text-white text-center w-[320px] h-[220px] rounded-[10px] flex items-center justify-center text-[20px]">
            <h6>{question}</h6>
        </div>
    )
}