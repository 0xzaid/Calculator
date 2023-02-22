export const handleButtonClick = (label: string, displayValue: string, setDisplayValue: React.Dispatch<React.SetStateAction<string>>) => {
    switch (label) {
        case 'DEL':
            // Delete last character from displayValue
            setDisplayValue(prevValue => {
                if (prevValue.length > 1) {
                    return prevValue.slice(0, -1);
                } else {
                    return '0';
                }
            });
            break;

        case 'AC':
            setDisplayValue('0');
            break;


        case '=':
            // Evaluate expression in displayValue

            if (displayValue.includes('!')) {
                const factorial = (n: number) => {
                    if (n === 0 || n === 1)
                        return 1;
                    for (var i = n - 1; i >= 1; i--) {
                        n *= i;
                    }
                    return n;
                }
                const result = factorial(Number(displayValue.slice(0, -1)));
                setDisplayValue(result.toString());
            }


            if (displayValue.includes('√')) {
                // the display value can be √9 OR √(9) -- must be able to answer both
                let result = 0;

                if (displayValue.includes('(')) {
                    const displayValueWithoutParentheses = displayValue.slice(2, -1);
                    result = Math.sqrt(Number(displayValueWithoutParentheses));
                } else {
                    result = Math.sqrt(Number(displayValue.slice(1)));
                }

                setDisplayValue(result.toString());
            }

            if (displayValue.includes('Log')) {
                const result = Math.log10(Number(displayValue.slice(3)));
                setDisplayValue(result.toString());
            }

            if (displayValue.includes('cos')) {
                const result = Math.cos(Number(displayValue.slice(3)));
                setDisplayValue(result.toString());
            }

            if (displayValue.includes('sin')) {
                const result = Math.sin(Number(displayValue.slice(3)));
                setDisplayValue(result.toString());
            }

            if (displayValue.includes('ln')) {
                if (displayValue.includes('ln(')) {
                    const result = Math.log(Number(displayValue.slice(3, -1)));
                    setDisplayValue(result.toString());
                } else {
                    const result = Math.log(Number(displayValue.slice(2)));
                    setDisplayValue(result.toString());
                }
            }
            try {
                const result = Math.round((eval(displayValue) + Number.EPSILON) * 100) / 100
                setDisplayValue(result.toString());
            } catch (error) {
                console.error('Invalid expression');
            }

            break;

        case 'π':
            setDisplayValue(prevValue => {
                if (prevValue === '0') {
                    return Math.PI.toFixed(4).toString();
                } else {
                    return prevValue + Math.PI.toFixed(4).toString();
                }
            });
            break;

        case 'sin':
            setDisplayValue(prevValue => {
                if (prevValue === '0') {
                    return 'sin ';
                } else {
                    return 'sin(' + prevValue + ')';
                }
            });
            break;

        case 'cos':
            setDisplayValue(prevValue => {
                if (prevValue === '0') {
                    return 'cos ';
                } else {
                    return 'cos(' + prevValue + ')';
                }
            });
            break;

        case 'ln':
            setDisplayValue(prevValue => {
                if (prevValue === '0') {
                    return 'ln ';
                } else {
                    return 'ln(' + prevValue + ')';
                }
            });
            break;

        case 'Log':
            setDisplayValue(prevValue => {
                if (prevValue === '0') {
                    return 'Log';
                } else {
                    return 'Log' + prevValue;
                }
            });
            break;

        case '^':
            setDisplayValue(prevValue => {

                if (prevValue === '0') {
                    return '0';
                } else {
                    return prevValue + '**';
                }
            });
            break;

        case '!':
            setDisplayValue(prevValue => {
                if (prevValue === '0') {
                    return '0';
                } else {
                    return prevValue + '!';
                }
            });
            break;


        case '√ ':
            setDisplayValue(prevValue => {
                if (prevValue === '0') {
                    return '√';
                } else {
                    return '√(' + prevValue + ')';
                }
            });
            break;



        default:
            // Append clicked button label to displayValue
            setDisplayValue(prevValue => {
                if (prevValue === '0') {
                    return label;
                } else {
                    return prevValue + label;
                }
            });
    }
};