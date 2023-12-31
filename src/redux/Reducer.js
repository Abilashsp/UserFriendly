import {
  ADD_MENU,
  ADD_CHILD,
  DELETE_MENU,
  DELETE_CHILD,
  EDIT_MENU,
  EDIT_CHILD,
  ADD_CHILD2,
  ADD_CHILDCHILD
} from "./Action";
import { BiItalic, BiText } from "react-icons/bi";
import { IoImages } from "react-icons/io5";
import { VscTable } from "react-icons/vsc";


let iidd=0;
const initialState = {
  navigation: [
    {
      id: 8220,
      name: "History",
      children: [
        {
          id:iidd,
          Child: []
        }
      ],
    },
  ],
  

  buttons: [{ id: 1, icon: <BiText />},
            {id:2,icon:<IoImages/>},
            {id:3,icon:<VscTable/>},],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MENU:
      return {
        ...state,
        navigation: [
          ...state.navigation,
          { name: action.payload.name, children: [] },
        ],
      };
      case ADD_CHILD:
        return {
          ...state,
          navigation: state.navigation.map((menu,index) => {
            if ( index === action.payload.id){
              return {
                ...menu,
                children: [
                  ...menu.children,
                  { name: action.payload.item },
                ],
              };
            }
            return menu;
            
          }),
        };


        case ADD_CHILD2:
          iidd++;
          console.log(iidd)
          return {
            ...state,
            navigation: state.navigation.map((menu) => {
              if ( menu.id === action.payload.id){
                return {
                  ...menu,
                  children: [
                    ...menu.children,
                    { name: action.payload.item,Child:[],id:iidd },
                  ],
                };
              }
              
              return menu;
            }),
          };





          case ADD_CHILDCHILD:
            return {
              ...state,
              navigation: state.navigation.map((menu) => {
                if (menu.id === action.payload.Id) {
                  return {
                    ...menu,
                    children: menu.children.map((child) => {
                      if (child.id === action.payload.id) {
                        return {
                          ...child,
                          Child: [
                            { name: action.payload.item },
                          ],
                        };
                      }
                      return child;
                    }),
                  };
                }
                return menu;
              }),
            };
          

      

     

        
      

    case DELETE_MENU:
      return {
        ...state,
        navigation: state.navigation.filter(
          (_, menuIndex) => menuIndex !== action.payload.menuIndex
        ),
      };

    case DELETE_CHILD:
      return {
        ...state,
        navigation: state.navigation.map((menu, menuIndex) =>
          menuIndex === action.payload.menuIndex
            ? {
                ...menu,
                children: menu.children.filter(
                  (_, childIndex) => childIndex !== action.payload.childIndex
                ),
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
