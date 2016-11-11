import * as _ from 'lodash';

import {
    IFormsyOption,
} from 'formsy-react-components';

interface IBox {
    label: string;
    key: string;
}

interface IBoxProviders {
    provider: string,
    boxes: Array<IBox>
}
const boxProviders: Array<IBoxProviders> = [{
    provider: "hasicorp",
    boxes: [{
        label: "Ubuntu 14.04LTS",
        key: "trusty64"
    }, {
        label: "Ubuntu 12.05LTS",
        key: "precise64"
    }]
}]
export const OSLookup: IFormsyOption[] = [
    { value: "deb", label: "Debian" },
    { value: "red", label: "Redhat" }
];

export const OSBoxLookup: IFormsyOption[] =
    _.flatten(_.map(boxProviders, (bp: IBoxProviders) => {
        return _.map(bp.boxes, (box: IBox) => {
            return { value: box.key, label: box.label }
        });
    }));


export const OSVersionLookup: IFormsyOption[] = [
    { value: "1.0", label: "1.0" },
    { value: "1.1", label: "1.1" }
]