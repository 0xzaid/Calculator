import React from 'react';

type Props = {
    label: string;
    onClick: () => void;
};

function ResultButton(props: Props) {
    return (
        <button
            className="rounded-sm btn shadow-[0_9px_0_rgb(24, 22, 22)] hover:shadow-[0_4px_0px_rgb(0,0,0)] bg-gray ease-out hover:translate-y-1 transition-all active:bg-green-600 w-23 h-20 bg-orange-500 text-white text-2xl font-bold"
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
}

export default ResultButton;
