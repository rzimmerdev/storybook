import React, {useEffect, useState} from 'react';

interface TagFilterProps {
    selectedTags: string[];
    tags: string[];
    limited: boolean;
    sampleTags: string[];
    onTagsChanged: (tags: string[]) => void;
}

export const TagFilter: React.FC<TagFilterProps> = (
    {
        selectedTags,
        tags,
        limited,
        sampleTags,
        onTagsChanged,
    }
) => {
    const [tagInput, setTagInput] = useState('');
    const [_, setSelectedTagsState] = useState<string[]>(selectedTags);
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [showSuggestionsTag, setShowSuggestionsTag] = useState(sampleTags.length === 0);

    useEffect(() => {
        if (showSuggestionsTag || tagInput.length === 0) {
            setFilteredSuggestions(sampleTags);
        } else if (tagInput.length === 0) {
            setFilteredSuggestions([]);
        }
    }, [showSuggestionsTag, tagInput, sampleTags]);

    const handleTagInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputText = event.target.value;
        setTagInput(inputText);

        if (tags) {
            setFilteredSuggestions(
                tags.filter((tag) => tag.toLowerCase().includes(inputText.toLowerCase()))
            );
        }

        setShowSuggestionsTag(tagInput.length === 0);
    };

    const handleTagInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' || event.key === ',') {
            event.preventDefault();
            addTags(tagInput);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        addTags(suggestion);
    };

    const addTags = (tagsToAdd: string) => {
        if (tagsToAdd === '') {
            return;
        }
        let newTags = tagsToAdd
            .split(',')
            .map((tag) => tag.trim())
            .filter((tag) => tag !== '');

        if (newTags.length > 0) {
            // Test if the new tags are already in the list
            if (tags) {
                newTags = newTags.filter((tag) => !selectedTags.includes(tag));
            }

            // If limited, only add tags that are in tags list
            if (limited) {
                newTags = newTags.filter((tag) => tags.includes(tag));
            }

            const updatedTags = [...selectedTags, ...newTags];
            onTagsChanged(updatedTags);
            setTagInput('');
            setShowSuggestionsTag(false);
            setSelectedTagsState(updatedTags);
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        const updatedTags = tags.filter((tag) => tag !== tagToRemove);
        onTagsChanged(updatedTags);
        setSelectedTagsState(updatedTags);
    };

    return (
        <div>
            <div className="tag-container">
                {selectedTags.map((tag, index) => (
                    <span key={index} className="tag">
            {tag}
                        <button onClick={() => handleRemoveTag(tag)} className="remove-tag">
              X
            </button>
          </span>
                ))}
            </div>
            <input
                type="text"
                placeholder="Add tags (separated by commas)"
                value={tagInput}
                onChange={handleTagInputChange}
                onKeyUp={handleTagInputKeyPress}
            />
            {showSuggestionsTag && sampleTags.length > 0 && (
                <div className="suggestions-tag">
                    Sample Tags:
                    <ul>
                        {sampleTags.map((suggestion, index) => (
                            <li
                                key={index}
                                onClick={() => addTags(suggestion)}
                                className="suggestion"
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {filteredSuggestions.length > 0 && !showSuggestionsTag && (
                <div className="suggestions-tag">
                    Suggestions:
                    <ul>
                        {filteredSuggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="suggestion"
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};