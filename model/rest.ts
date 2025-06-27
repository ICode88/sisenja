export interface Paginate {
  page: number;
  size: number;
  totalItem: number;
  totalPage: number;
}

export interface State {
  loading: boolean;
  error: string;
}

export interface Action {
  setLoading: (loading: State["loading"]) => void;
  setError: (error: State["error"]) => void;
}
