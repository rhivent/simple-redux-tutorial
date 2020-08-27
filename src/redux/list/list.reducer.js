import { ADD_ARTICLE } from './list.constant';

const initialState = {
  articles : []
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ARTICLE:
      // filter by user type
      const dataFilter = state.articles.find(x=> x.title === payload.title );
      if(!dataFilter){
        const newData = Object.assign({},state, {
          articles : [...state.articles,{...payload} ]
        });
        // newData will return Object of Array  { key : [...] }
        return newData;
      }
      alert('Data has been recorded !');
      return state;
    default:
      return state;
  }
};

export default rootReducer;
