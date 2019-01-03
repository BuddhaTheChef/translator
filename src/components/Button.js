import React, {Component} from 'react';
import LanguageContext from '../context/LanguageContext';


class Button extends Component {

    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Subit' : '제출하다';
        return (
            <button className="ui button primary">{text}</button>
        )
    }
}

export default Button;