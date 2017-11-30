import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const ex1 = store.dispatch(addExpense({description: 'rent', amount: 100, createdAt: -2000}));
const ex2 = store.dispatch(addExpense({description: 'coffee', amount: 500, createdAt: -1000}));
const ex3 = store.dispatch(addExpense({description: 'coffee', amount: 200, createdAt: 500}));

// store.dispatch(setTextFilter('rent'));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
