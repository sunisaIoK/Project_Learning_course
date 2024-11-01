import React from 'react';
import { data } from '../../../data';
import { useState, useReducer } from 'react';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import reducer from './reducer';

const defaultState = {
  people:data,
  isLoading: false,
}



const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const claerList = () => {
    dispatch({ type: CLEAR_LIST });
  const resetList = () => {
    dispatch({ type: RESET_LIST });
  }}

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {people.length < 1 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          clear items
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={claerList}
        >
          clear items
        </button>
      )}
    </div>
  
  );
};

export default ReducerBasics;
