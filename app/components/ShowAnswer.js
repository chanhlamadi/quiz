export default function ShowAnswer(props) {
    const isCorrectIndex = props.data.questions[props.index]?.correctIndex === props.data?.answers[props.index];
    const isCorrectValue = props.data.questions[props.index]?.correctIndex === props.value;
    const isAnswerValue = props.data?.answers[props.index] === props.value;

    console.log('correct index: ', props.data.questions[props.value]?.correctIndex)
    console.log('answer: ', props.data?.answers[props.value])
    console.log('isCorrectIndex: ', isCorrectIndex)
    console.log('isAnswer: ', isAnswerValue)
    console.log('isCorrectValue: ', isCorrectValue)

    let buttonStyle = 'bg-[#9F9F9F] text-white w-[320px] h-[45px] rounded-[10px] text-[20px]';
    if (isCorrectIndex) {
        if (isCorrectValue) {
            buttonStyle += ' bg-green-500 text-white';
        } else {
            buttonStyle
        }
    } else {
        if (isCorrectValue) {
            buttonStyle += ' bg-green-500 text-white';
        } else if (isAnswerValue) {
            buttonStyle += ' bg-red-500 text-white';
        } else {
            buttonStyle += 'bg-red-500 text-white';
        }
    }

    return (
        <button
            className={buttonStyle}
            value={props.value}
        >
            {props.answer}
        </button>
    );
}
