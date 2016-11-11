import * as React from 'react';
interface IFormActionBarProps extends React.Props<any>{
}
const FormActionBar:React.StatelessComponent<IFormActionBarProps> = (props:IFormActionBarProps) => {
    return (
        <div className="form-actions">
            {props.children}
        </div>
    );
}
export default FormActionBar;