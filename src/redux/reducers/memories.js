import * as Actions from '../actions/constants';

var initalStore = {
    memories: []
};


//Helper functions.
function addMemory (store,action){
    var updatedStore = {
        ...store,
        memories: [...store.memories , action.memory]
    }

    return updatedStore;
}

export function memories (store = initalStore , action){
    switch(action.type){
        case Actions.ADD_MEMORY: return addMemory (store,action);

        default: return store;
    }
}