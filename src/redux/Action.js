
export const ADD_MENU = 'ADD_MENU';
export const ADD_CHILD = 'ADD_CHILD';
export const DELETE_MENU = 'DELETE_MENU';
export const DELETE_CHILD = 'DELETE_CHILD';
export const EDIT_MENU = 'EDIT_MENU';
export const EDIT_CHILD = 'EDIT_CHILD';
export const ADD_CHILD2 = 'ADD_CHILD2';
export const ADD_CHILDCHILD = 'ADD_CHILDCHILD';



export const addMenu = (payload) => ({
  type: ADD_MENU,
  payload,
  
});

export const addChild = (id, item) => ({
  type: ADD_CHILD,
payload:{
  id,
  item,
}
});
export const addChild2 = (id, item) => ({
  type: ADD_CHILD2,
payload:{
  id,
  item,
}
});

export const addChildchild = (Id,id, item) => ({
  type: ADD_CHILDCHILD,
payload:{
  Id,
  id,
  item,
}
});


export const deleteMenu = (menuIndex) => ({
  type: DELETE_MENU,
  payload: {
    menuIndex,
  },
});



export const deleteChild = (menuIndex, childIndex) => ({
  type: DELETE_CHILD,
  payload: {
    menuIndex,
    childIndex,
  },
});


export const editMenu = (menuIndex, newName) => ({
  type: EDIT_MENU,
  payload: {
    menuIndex,
    newName,
  },
});

export const editChild = (menuIndex, childIndex, newName) => ({
  type: EDIT_CHILD,
  payload: {
    menuIndex,
    childIndex,
    newName,
  },
});


