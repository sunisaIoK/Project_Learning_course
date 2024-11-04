export type CounterState = {
  count: number;
  status: string;
};
type CounterAction = UpdateCountAction | SetStatusAction;

type UpdateCountAction = {
  type: "increment" | "decrement" | "reset";
};
export const initialState: CounterState = {
  count: 0,
  status: "Pending...",
};

type SetStatusAction = {
  type: "setStatus";
  payload: "active" | "inactive";
};
export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "setStatus":
      return { ...state, status: action.payload };
    default:
      const unhandledActionType: never = action;
      throw new Error(
        `Unexpected action type: ${unhandledActionType}. Please double check the counter reducer.`
      );
  }
};