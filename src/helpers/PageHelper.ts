import {} from '../types';

import * as Immutable from 'immutable';

import {SERVICES} from '../services';
import {ServiceConstants} from '../constants';

namespace PageHelper {
    export function createSaveAppStateRequest(){
         return {
                [ServiceConstants.CALL_SERVICE]: {
                    serviceId: SERVICES.appService.id,
                    operation: SERVICES.appService.operations.saveAppState
                }
            };
    }
}

export default PageHelper;