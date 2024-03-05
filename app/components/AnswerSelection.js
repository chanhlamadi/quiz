export default function AnswerSelection({ answer, value, checkAnswer, chooseAnswer, selected }) {
    return (
        <button 
            className={`bg-[#9F9F9F] text-white w-[320px] h-[45px] rounded-[10px] text-[20px] ${selected ? 'bg-black' : 'hover:bg-white hover:text-black'}`} 
            onClick={() => chooseAnswer(value)}
        >
            {answer}
        </button>
    )
}
