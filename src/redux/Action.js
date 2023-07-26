
export const ADD_MENU = 'ADD_MENU';
export const ADD_CHILD = 'ADD_CHILD';

export const addMenu = (payload) => ({
  type: ADD_MENU,
  payload,
  
});

export const addChild = (menuName, payload) => ({
  type: ADD_CHILD,
  payload: { menuName, name: payload },
});

