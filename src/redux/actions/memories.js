import * as ActionTypes from './constants';

// Action creators.

export const addMemory = function(memory){
    return ({
        type: ActionTypes.ADD_MEMORY,
        memory: memory
    });
}