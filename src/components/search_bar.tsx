import { useState } from 'react';

type Props = {
    onSearchTermChange: (value: string) => void;
};

export function SearchBar(props: Props) {
    const [term, setTerm] = useState('');

    const onInputChange = (term: string) => {
        setTerm(term);

        props.onSearchTermChange(term);
    };

    return (
        <div className='search-bar'>
            <input
                value={term}
                onChange={(event) => onInputChange(event.target.value)}
            />
        </div>
    );
}
