import React, {useState} from 'react';
import classes from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
    const {
        initialInputValue,
        ...otherProps
    } = props;

    const [textValue, setTextValue] = useState('' || initialInputValue)

    const onTextChange = (e) => {
        setTextValue(e.target.value)
    }


    return (
        <input
            onChange={onTextChange}
            ref={ref}
            className={classes.myInput}
            value={textValue}
            {...otherProps}
        />
    );
});

export default MyInput;