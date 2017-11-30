import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      console.log("text " + action.text);
      return {
        text: action.text,
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
      };
    case 'SORT_BY_DATE':
      console.log("sort date");
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      console.log("sort amount");
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SET_START_DATE':
      console.log("startDate " + action.startDate);
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      console.log("endDate " + action.endDate);
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};
