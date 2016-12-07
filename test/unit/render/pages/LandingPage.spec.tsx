import * as React from 'react';
import * as mocha from 'mocha';

import {
    mount,
    shallow,
} from 'enzyme';

import {LandingPage} from '../../../../src/pages/Landing/LandingPage';
import {expect} from 'chai';
import {stub} from 'sinon';

describe('Test Landing Page', function () {
    it('testing', function () {
        const props = {
            configMain: {}
        };
        const saveStub = stub();
        const wrapper = mount(
            <LandingPage
                save={()=>{}}
                removeCluster={()=>{}}
                navigate={() => {}}
                clusters={[]}
                genVagrantFile={() => {}}
                configMain = {() => {}}
                />);

    });
});
