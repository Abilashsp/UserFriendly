
import { ADD_MENU,ADD_CHILD,DELETE_MENU, DELETE_CHILD,EDIT_MENU,EDIT_CHILD  } from './Action';

const initialState = {
  navigation: [],
 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MENU:
      return {
        ...state,
        navigation: [...state.navigation, { name:action.payload.name, children: [] }],
      };

      case ADD_CHILD:
        return {
          ...state,
          navigation: state.navigation.map((menu,index) =>
            index === action.payload.id
              ? { ...menu, children: [...menu.children, { name: action.payload.item }] }
              : menu
          ),
        };
        



        case DELETE_MENU:
          return {
            ...state,
            navigation: state.navigation.filter((_, menuIndex) => menuIndex !== action.payload.menuIndex),
          };

          case DELETE_CHILD:
            return {
              ...state,
              navigation: state.navigation.map((menu, menuIndex) =>
                menuIndex === action.payload.menuIndex
                  ? {
                      ...menu,
                      children: menu.children.filter((_, childIndex) => childIndex !== action.payload.childIndex),
                    }
                  : menu
              ),
            };

            case EDIT_MENU:
      return {
        ...state,
        navigation: state.navigation.map((menu, index) =>
          index === action.payload.menuIndex
            ? {
                ...menu,
                name: action.payload.newName,
              }
            : menu
        ),
      };
    case EDIT_CHILD:
      return {
        ...state,
        navigation: state.navigation.map((menu, index) =>
          index === action.payload.menuIndex
            ? {
                ...menu,
                children: menu.children.map((child, childIndex) =>
                  childIndex === action.payload.childIndex
                    ? {
                        ...child,
                        name: action.payload.newName,
                      }
                    : child
                ),
              }
            : menu
        ),
      };


        
    default:
      return state;
  }
};

export default reducer;
