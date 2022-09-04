export const Reducer = (
  state = {
    Info: [],
  },
  action
) => {
  if (action.type === "ADD_VALUE") {
    return {
      ...state,
      Info: [...state.Info, action.data],
    };
  }
  return state;
};
