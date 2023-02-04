import React, {useState} from 'react';

export default (props) => {

    const {title} = props;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion">
            <div className="accordion-question" onClick={toggle}>
                <span>{title}</span>
            </div>
            <div className="accordion-answer" aria-expanded={!isOpen}>
                {props.children}
            </div>
        </div>
    );

};
