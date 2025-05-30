interface CustomButtonProps {
    name: string,
    isBeam: boolean,
    containerClass: string
}

const CustomButton = ({ name, isBeam = false, containerClass }: CustomButtonProps) => {
    return (
        <button className={`btn ${containerClass}`}>
            {isBeam && (
                <span className="relative flex h-3 w-3">
                    <span className="btn-ping"></span>
                    <span className="btn-ping_dot"></span>
                </span>
            )}
            {name}
        </button>
    );
};

export default CustomButton;