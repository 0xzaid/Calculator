import React from 'react';

type Props = {
    label: string;
    onClick: () => void;
    type?: 'operator' | 'number' | 'result';
};

function Button(props: Props) {
    let buttonClass;

    switch (props.type) {
        case 'operator':
            buttonClass = 'bg-gray-500 text-white';
            break;
        case 'number':
            buttonClass = 'bg-gray-700 text-white';
            break;
        default:
            buttonClass = 'bg-gray-300 text-gray-800';
    }

    return (
        <button
            className={`w-1/7 h-20 ${buttonClass} text-1xl`}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
}

export default Button;
