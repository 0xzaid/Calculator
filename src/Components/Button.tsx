import React from 'react';

type Props = {
    label: string;
    onClick: () => void;
    type?: 'operator' | 'number' | 'result' | string;
};

function Button(props: Props) {
    let buttonClass;

    switch (props.type) {
        case 'operator':
            buttonClass = 'bg-gray-700 text-xs font-light text-gray-400';
            break;
        case 'number':
            buttonClass = 'bg-gray-700 font-bold text-xl text-white';
            break;
        default:
            buttonClass = 'bg-gray-300 text-gray-800';
    }
    
    buttonClass += ' rounded-sm btn shadow-[0_9px_0_rgb(24, 22, 22)] hover:shadow-[0_4px_0px_rgb(0,0,0)] bg-gray ease-out hover:translate-y-1 transition-all hover:bg-violet-600 active:bg-green-600 border-solid border border-gray-600';

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
