import React from 'react';

type Props = {
    value: string;
};

function Display(props: Props) {
    return (
        <div className="rounded-t w-full h-28 bg-gray-900 flex items-center justify-end pr-4 text-4xl text-white">
            {props.value}
        </div>
    );
}

export default Display;