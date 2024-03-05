// Button component with custom styling
const Button = ({ value, className, onClick }) => {
    return (
        <button className={`w-[320px] h-[45px] rounded-[10px] text-[20px] ${className}`} onClick={onClick}>
            {value}
        </button>
    );
};

// Button component with custom font and styling
const StyledButton = ({ value, className, onClick }) => {
    return (
        <button className={`w-[320px] h-[62px] rounded-[10px] text-[32px] ${className} `} onClick={onClick}>
            {value}
        </button>
    );
};

// Button components with predefined styles
const NormalButton = ({ value }) => {
    return <Button value={value} className="bg-[#9F9F9F] text-white" />;
};

const NextButton = ({ clickNextButton }) => {
    return <Button value="Next" className="bg-lemonYellow text-black" onClick={clickNextButton} />;
};

const HomeButton = () => {
    return <Button value="Home" className="bg-lemonYellow text-black" />;
};

const SubmitButton = ({ clickSubmitButton }) => {
    return <Button value="Submit" className="bg-lemonYellow text-black" onClick={clickSubmitButton} />;
};

const LogInButton = () => {
    return <StyledButton value="LogIn" className="bg-deepTeal text-white" />;
};

const SignUpButton = () => {
    return <StyledButton value="SignUp" className="bg-white text-deepTeal" />;
};

export {
    SignUpButton,
    LogInButton,
    NormalButton,
    NextButton,
    SubmitButton,
    HomeButton
};
