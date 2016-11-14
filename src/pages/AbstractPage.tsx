import * as React from 'react';

import { IMainPageConfig, default as Main } from '../Main';

export interface IAbstractPageProps extends React.Props<any> {
    configMain?: (config: IMainPageConfig) => void;
}

abstract class AbstractPage<P extends IAbstractPageProps> extends React.Component<P, void> {
    constructor(props: P) {
        super(props);

    }

    componentDidMount() {
        const {
            configMain
        } = this.props;
        if (!configMain) {
            throw new Error("configMain public function must be available on parent");
        }
        const config = this.provideConfigMain();
        if (config) {
            configMain(config);
        }
    }

    public abstract provideConfigMain(): IMainPageConfig;
}

export default AbstractPage;