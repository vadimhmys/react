export const initialState = [
  {id: 0, message: 'Hello', isSelected: true},
  {id: 1, message: 'Hello', isSelected: false},
  {id: 2, message: 'Hello', isSelected: false},
];

export function messengerReducer(state, action) {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
        message: '',
      };
    }
    case 'edited_message': {
      return {
        ...state,
        message: action.message,
      };
    }
    case 'sent_message': {
      return {
        ...state,
        message: '',
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
