import {ACTION_TYPE} from '../Actions/ActionType'

const initState = {
	count:0
}

const Appreducer = (state=initState,action) =>{
             
             if(action.type===ACTION_TYPE){
             	  return {...state,...action.payload};
             }

             return {...state};
}

export default Appreducer;