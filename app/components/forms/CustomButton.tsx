interface CustomButtonProps {
    label: string;
    className?: string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    className,
    onClick
}) => {
    return (
        <div
            onClick={onClick}
            className={`py-4 bg-airbnb hover:bg-airbnbDark text-white text-center rounded-xl transition cursor-pointer ${className}`}
        >
            {label}
        </div>
    )
}

export default CustomButton;