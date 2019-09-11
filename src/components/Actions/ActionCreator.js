import {ACTION_TYPE} from './ActionType';

export function click(arg) {
	    return {
	    	type:ACTION_TYPE,
	    	payload:{count:arg}
	    }
}