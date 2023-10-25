import React, { useState } from 'react';

interface FilterProps {
    items: string[];
}

export const TextFilter: React.FC<FilterProps> = ({ items }) => {
    const [filterText, setFilterText] = useState('');

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="TextFilter items..."
                value={filterText}
                onChange={e => setFilterText(e.target.value)}
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
