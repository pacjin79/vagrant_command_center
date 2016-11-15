declare module "formsy-react-components" {
    import React = require("react");


    interface IFormsyRowProps {
        label?: React.ReactNode|string;
        rowClassName?: string|Array<string>|_.Dictionary<any>;
        labelClassName?: string|Array<string>|_.Dictionary<any>;
        htmlFor?:string;
        layout?: "horizontal" | "vertical" | "elementOnly";
    }

    interface IFormsyGeneralProps {
        name: string;
        label?: string;
        layout?: string;
        style?: any;
        value?: any;
        className?: string;
        required?: boolean;
        validatePrestine?: boolean;
        disabled?: boolean;
        labelClassName?: string | Array<string>;
        elementWrapperClassName?: string | Array<string>;
        rowClassName?: string | Array<string>;
        help?: string;        
    }

    type FormsyInputType = "text" | "email";


    interface IFormsyInputProps extends IFormsyGeneralProps {
        type: FormsyInputType;
        placeholder?: string;
        addonBefore?: string | React.ReactNode;
        addonAfter?: string | React.ReactNode;
        bottonBefore?: string | React.ReactNode;
        bottonAfter?: string | React.ReactNode;
    }
    
    interface IFormsyOption {
        value: string;
        label: string;
    }
    interface IFormsySelectProps extends IFormsyGeneralProps {
        options: Array<IFormsyOption>;
    }

    interface IFormsyCheckboxGroupProps extends IFormsySelectProps {
    }

    interface IFormsyCheckboxProps extends IFormsyGeneralProps {
        rowLabel?: string;
    }

    interface IFormsyTexareaProps extends IFormsyGeneralProps {
        rows?: number;
        cols?: number;
    }

    var Input: React.ClassicComponentClass<IFormsyInputProps>;
    var Checkbox: React.ClassicComponentClass<IFormsyCheckboxProps>;
    var CheckboxGroup: React.ClassicComponentClass<IFormsyCheckboxGroupProps>;
    var Textarea: React.ClassicComponentClass<IFormsyTexareaProps>;
    var Row: React.ClassicComponentClass<IFormsyRowProps>;
    var Select: React.ClassicComponentClass<IFormsySelectProps>;
    
}