import { useEffect, useRef, useState, type FC, type InputHTMLAttributes } from 'react';
import { Paragraph } from '../paragraph';
import styles from './range.module.css';

export interface IRange extends InputHTMLAttributes<HTMLInputElement> {
    customValueState?: number;
    customSetter?: (n: string) => void;
}

export const Range: FC<IRange> = ({
    value,
    min = 0,
    max = 100,
    customValueState,
    customSetter,
    onChange: change,
    ...props
}) => {
    const [_value, _setValue] = useState(value ?? min ?? 0);

    const rangeRef = useRef<HTMLInputElement>(null);

    function updateSlider() {
        if (!rangeRef.current) return;

        const slider = rangeRef.current;

        const min = +slider.min;
        const max = +slider.max;
        const val = +slider.value;
        const percent = ((val - min) / (max - min)) * 100;

        slider.style.background = `linear-gradient(
        to right,
        #5B35D5 0%,
        #5B35D5 ${percent}%,
        #D0D0D0 ${percent}%,
        #D0D0D0 100%
    )`;
    }
    useEffect(() => {
        updateSlider();
    }, [customValueState]);

    return (
        <div>
            <Paragraph style={{ marginBlock: 10 }} weight="semibold">
                {customValueState ?? _value}
            </Paragraph>
            <input
                className={styles.range}
                ref={rangeRef}
                type="range"
                value={customValueState ?? _value}
                onChange={(e) => {
                    if (change) change(e);
                }}
                min={min}
                max={max}
                {...props}
            />
            <div className={styles.minMax}>
                <Paragraph style={{ marginTop: 5, color: '#786D6D' }} weight="semibold">
                    {min}
                </Paragraph>
                <Paragraph style={{ marginTop: 5, color: '#786D6D' }} weight="semibold">
                    {max}
                </Paragraph>
            </div>
        </div>
    );
};
