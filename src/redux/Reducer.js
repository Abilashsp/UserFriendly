
import { ADD_MENU,ADD_CHILD } from './Action';

const initialState = {
  navigation: [],
 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MENU:
      return {
        ...state,
        navigation: [...state.navigation, { name: action.payload.name, children: [] }],
      };

      case ADD_CHILD:
        return {
          ...state,
          navigation: state.navigation.map((menu) =>
            menu.name === action.payload.menuName
              ? { ...menu, children: [...menu.children, { name: action.payload.name }] }
              : menu
          ),
        };
        
    default:
      return state;
  }
};

export default reducer;
