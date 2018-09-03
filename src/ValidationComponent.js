import React from 'react';

const validation = (props) => {

    let validationMessage = 'Text is too short!';

    if (props.inputLength > 5) {
        validationMessage = 'Text is long enough!';
    }

    return (
        <div>
             {validationMessage}
        </div>
    );
};

export default validation;
