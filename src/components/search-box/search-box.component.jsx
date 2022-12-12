import { Component } from 'react';
import './search-box.style.css';

class SearchBox extends Component {
    render() {
        const {onChangeHandler,placeholder,className} = this.props;
        return (
            <input
                type='search'
                className={className}
                placeholder={placeholder}
                onChange={onChangeHandler} />
        );
    }
}

export default SearchBox;