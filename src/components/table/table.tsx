import { useEffect, useState, type FC } from 'react';

import styles from './table.module.css';

export interface ITable {
    header?: string[];
    rows: string[][];
}

export const Table: FC<ITable> = ({ header, rows }) => {
    const [sortedColumn, setSortedColumn] = useState<null | number>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [content, setContent] = useState(rows);

    // Обновляем контент при изменении rows
    useEffect(() => {
        setContent(rows);
    }, [rows]);

    // Сортировка при клике
    useEffect(() => {
        if (sortedColumn === null) return;

        setContent((prev) => {
            const sorted = [...prev].sort((a, b) => {
                const aValue = a[sortedColumn]?.trim() || '';
                const bValue = b[sortedColumn]?.trim() || '';

                // Проверяем, являются ли значения числами
                const aNum = parseFloat(aValue);
                const bNum = parseFloat(bValue);

                if (!isNaN(aNum) && !isNaN(bNum)) {
                    // Числовая сортировка
                    return sortDirection === 'asc' ? aNum - bNum : bNum - aNum;
                } else {
                    // Строковая сортировка
                    return sortDirection === 'asc'
                        ? aValue.localeCompare(bValue, 'ru')
                        : bValue.localeCompare(aValue, 'ru');
                }
            });

            return sorted;
        });
    }, [sortedColumn, sortDirection]);

    const handleSort = (index: number) => {
        if (sortedColumn === index) {
            // Переключаем направление сортировки
            setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
        } else {
            // Новая колонка - сортируем по возрастанию
            setSortedColumn(index);
            setSortDirection('asc');
        }
    };

    const rowsItems = content.map((row, rowIndex) => (
        <tr key={rowIndex} className={styles.tableRow}>
            {row.map((item, itemIndex) => (
                <td key={itemIndex} className={styles.tableItem}>
                    {item}
                </td>
            ))}
        </tr>
    ));

    return (
        <table className={styles.table}>
            {header && (
                <thead>
                    <tr className={styles.tableRow}>
                        {header.map((item, index) => (
                            <th key={index} className={styles.tableHeader}>
                                <div className={styles.tableHeaderContent}>
                                    <div>{item}</div>
                                    <button
                                        className={`${styles.tableHeaderButton} ${
                                            sortedColumn === index && sortDirection === 'desc'
                                                ? styles.flipRotate
                                                : ''
                                        }`}
                                        onClick={() => handleSort(index)}
                                        aria-label={`Сортировать по ${item}`}
                                    />
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
            )}
            <tbody>{rowsItems}</tbody>
        </table>
    );
};
