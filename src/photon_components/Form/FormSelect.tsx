import * as React from 'react';
import * as classnames from 'classnames';

import {
    IFormsySelectProps,
    Select,
} from 'formsy-react-components';

import {
    IFormInputProps,
} from '../../types';

interface IFormSelectProps extends IFormsySelectProps {
    bsSize?: string;
    allowBlanks?: boolean;
}

const FormSelect: React.StatelessComponent<IFormSelectProps> = (props: IFormSelectProps) => {
    const {
        bsSize = "md",
        allowBlanks = false,
        options,
    } = props;
    const style = classnames({
        ["formControlSize-" + bsSize]: true
    });
    let selectOptions = options;
    if(allowBlanks && options.length > 0){
        if(options[0].value !== ''){
            selectOptions = _.concat(
                [{value:"", label: ""}],
                options
            );
        }
    }
    const others = _.omit(props, 'bsSize', 'allowBlanks') as IFormSelectProps;
    return (
        <div className={style}>
            <Select {...others}
                options = {selectOptions}
                layout="vertical"
                />
        </div>
    );
}
export default FormSelect;