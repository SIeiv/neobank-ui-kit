import { type FC } from 'react';
import styles from './accordion.module.css';
import { Paragraph } from '../paragraph';

interface IAccordion {
    title: string;
    text: string;

    isOpen: boolean
    setOpenedIndex: (s: number) => void
    index: number
}

export const Accordion: FC<IAccordion> = ({ title, text, isOpen, setOpenedIndex, index }) => {

    return (
        <div className={`${styles.accordion}  ${isOpen ? styles.opened : ''}`}>
            <button className={styles.header} onClick={() => {setOpenedIndex(isOpen ? -1 : index)}}>
                <Paragraph style={{ margin: 0 }} size="large" weight="semibold">
                    {title}
                </Paragraph>
                <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>&#8964;</span>
            </button>
            <div className={styles.content}>
                <div className={styles.inner}>
                    <Paragraph style={{ color: '#7B7454', paddingBlock: 24, paddingInline: 32 }}>{text}</Paragraph>
                </div>
            </div>
        </div>
    );
};
