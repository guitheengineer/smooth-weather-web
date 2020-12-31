import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';

enum ActionTypes {
  setIsSearchOpen = 'SET_IS_SEARCH_OPEN',
  setSearch = 'SET_SEARCH',
}

type State = {
  isSearchOpen: boolean;
  search: string;
};

type Actions = {
  type: ActionTypes;
  payload?: any;
};

const Context = createContext<[State, Dispatch<Actions>] | null>(null);

export const useAppInfo = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useAppInfo must be used inside a provider');
  }

  const [state, dispatch] = context;

  const setIsSearchOpen = (isSearchOpen: boolean) => {
    dispatch({ type: ActionTypes.setIsSearchOpen, payload: isSearchOpen });
  };
  const setSearch = (local: string) => {
    dispatch({ type: ActionTypes.setSearch, payload: local });
  };
  const { search, isSearchOpen } = state;
  return {
    search,
    isSearchOpen,
    setSearch,
    setIsSearchOpen,
  };
};

const reducer = (state: State, { type, payload }: Actions) => {
  switch (type) {
    case ActionTypes.setIsSearchOpen:
      return {
        ...state,
        isSearchOpen: payload,
      };
    case ActionTypes.setSearch:
      return {
        ...state,
        search: payload,
      };
  }
};

const initialState: State = {
  isSearchOpen: false,
  search: 'California',
};

const Provider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { state: memoState, dispatch: memoDispatch } = useMemo(
    () => ({ state, dispatch }),
    [state]
  );

  return (
    <Context.Provider value={[memoState, memoDispatch]}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
