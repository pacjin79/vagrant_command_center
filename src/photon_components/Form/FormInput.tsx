import * as React from 'react';
import * as classnames from 'classnames';

import {
    IFormInputProps,
} from '../../types';
import {
    Input,
} from 'formsy-react-components';

interface IForminput extends IFormInputProps {
    type?: "email" | "text";
}

class Forminput extends React.Component<IForminput, void> {
    constructor(props: IForminput) {
        super(props);
    }

    render() {
        const {
            name,
            type = "text",
            label,
            value,
            bsSize = "md",
            placeholder
        } = this.props;

        const style = classnames({
            ["formControlSize-"+bsSize]: true
        });

        return (
            <div className={style}>
                <Input
                    name={name}
                    type={(this.props.type === "email") ? "email" : "text"}
                    label={label}
                    layout="vertical"
                    value={value}
                    placeholder={placeholder}
                    />
            </div>
        );
    }
}

export default Forminput;