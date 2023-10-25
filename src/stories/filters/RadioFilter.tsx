import React, { useState } from 'react';

interface RadioFilterProps {
    items: string[];
}

export const RadioFilter: React.FC<RadioFilterProps> = ({ items }) => {
    const [filterText, setFilterText] = useState('');
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(filterText.toLowerCase())
    );

    const handleItemClick = (item: string) => {
        setSelectedItem(item === selectedItem ? null : item);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Filter items..."
                value={filterText}
                onChange={e => setFilterText(e.target.value)}
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li
                        key={index}
                        className={selectedItem === item ? 'selected' : ''}
                        onClick={() => handleItemClick(item)}
                    >
                        <label>
                            <input
                                type="radio"
                                checked={selectedItem === item}
                                readOnly
                            />
                            {item}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};
