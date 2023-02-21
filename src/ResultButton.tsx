import React from 'react';

type Props = {
    label: string;
    onClick: () => void;
};

function ResultButton(props: Props) {
    return (
        <button
            className="w-32 h-20 bg-orange-500 text-white text-2xl font-bold"
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
}

export default ResultButton;
