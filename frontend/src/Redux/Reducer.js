import { Variables } from './constant'
import { combineReducers } from 'redux'

const defaultState = {
  items: []
};

const addReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Variables.ADD_ITEM: {
      let data = action.payload;
        let newItem = {status:data.success,message:  data.errors?data.errors.name[0]:data.msg ,listData: [] };
        return newItem;
    }
    default:
      return state;
  }
    
};

const selectReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Variables.SELECT_ITEM: {
      let data = action.payload;
      let newState = {status:data.success,message: '' ,listData: [] };
      return newState;
    }
    default:
      return state;
  }
};

const getReducer = ( state = defaultState, action) => {
  switch (action.type) {
    case Variables.GET_ITEM: {
      let payload = action.payload;
      let newState = {status:payload.success,message: '' ,listData: payload.data };
      return newState;
    }
    default:
      return state;
  }
};

const reducer = combineReducers({addReducer,selectReducer,getReducer})
export default reducer;
