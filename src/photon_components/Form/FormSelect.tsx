import * as React from 'react';
import * as classnames from 'classnames';

import {
    IFormInputProps,
    ISelectOption,
} from '../../types';
import {
    IFormsySelectProps,
    Select,
} from 'formsy-react-components';

interface IFormSelectProps extends IFormsySelectProps {
    bsSize?: string;
}

const FormSelect: React.StatelessComponent<IFormSelectProps> = (props: IFormSelectProps) => {
    const {
        bsSize = "md"
    } = props;
      const style = classnames({
            ["formControlSize-"+bsSize]: true
        });
    return (
        <div className={style}>
            <Select {...props} 
                layout="vertical"
            />
        </div>
    );
}
export default FormSelect;