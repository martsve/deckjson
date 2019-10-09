import initialState from './state';

const reducer = (state, action) => {
    switch(action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: state.count + 1
        };
                              
        case 'DELETEDECK':
          let index = state.decks.findIndex((x) => x.id === action.id); 
          return {
            ...state,
            decks: [
              ...state.decks.slice(0, index),
              ...state.decks.slice(index + 1)
            ]
          };

        case 'SAVEDECK':
          return {
            ...state,
            decks: [
              ...state.decks,
              action.deck
            ]
          };

        case 'RESET':
            localStorage.clear();
          return initialState;

      default:
        return state;
    }
  }
  
  export { reducer };