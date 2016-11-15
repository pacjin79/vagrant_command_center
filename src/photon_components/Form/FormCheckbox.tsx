import * as React from 'react';
import * as classnames from 'classnames';

import { Checkbox } from 'formsy-react-components';
import {
    IFormInputProps,
} from '../../types';

interface IFormCheckboxProps extends IFormInputProps {
    rowLabel?:string;
}
const FormCheckbox: React.StatelessComponent<IFormCheckboxProps> = (props: IFormCheckboxProps) => {

    const {
        name,
        label,
        value,
        bsSize = "md",
        rowLabel,
        placeholder
    } = props;

    const style = classnames({
        ["formControlSize-" + bsSize]: true
    });

    return (
        <div className={style}>
            <label className="checkbox-label">{rowLabel}</label>
            <Checkbox
                name={name}
                label={label}
                layout="elementOnly"
                value={value} />
        </div>
    );
}
export default FormCheckbox;