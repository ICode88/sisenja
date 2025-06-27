import { User, ListUserRequest } from "@/model/user";
import { Action, Paginate, State } from "@/model/rest";
import { create } from "zustand";

export interface ListState extends State {
  request: ListUserRequest;
  users: User[];
  paginate: Paginate;
}

interface ListAction extends Action {
  updateUser: (user: User) => void;
  removeUser: (user: User) => void;
  pushUser: (user: User) => void;
  setRequest: (request: ListState["request"]) => void;
  setUsers: (users: ListState["users"]) => void;
  setPaginate: (paginate: ListState["paginate"]) => void;
}

export const initialStateListUser: ListState = {
  loading: false,
  error: "",
  request: {
    page: 0,
    size: 10,
  },
  users: [],
  paginate: {
    page: 1,
    size: 10,
    totalItem: 0,
    totalPage: 0,
  },
};

export const useListUserStore = create<ListState & ListAction>((set, get) => ({
  ...initialStateListUser,
  updateUser: (user) => {
    const users = get().users;
    const newUsers = users.map((value) => {
      if (value.id === user.id) {
        return user;
      }
      return value;
    });
    set(() => ({ users: newUsers }));
  },
  pushUser: (user) => {
    const users = get().users;
    users.push(user);
    set(() => ({ users }));
  },
  removeUser: (user: User) => {
    const users = get().users;
    const newUsers = users.filter((value) => value.id !== user.id);
    set(() => ({ users: newUsers }));
  },
  setRequest: (request) => set(() => ({ request })),
  setUsers: (users) => set(() => ({ users })),
  setPaginate: (paginate) => set(() => ({ paginate })),
  setLoading: (loading) => set(() => ({ loading })),
  setError: (error) => set(() => ({ error })),
}));

interface CreateState extends State {
  onCreate: boolean;
  user: User | null;
}

interface CreateAction extends Action {
  setOnCreate: (onCreate: CreateState["onCreate"]) => void;
  setUser: (user: CreateState["user"]) => void;
}

export const useCreateUserStore = create<CreateState & CreateAction>(
  (set, get) => ({
    onCreate: false,
    loading: false,
    error: "",
    user: null,
    setOnCreate: (onCreate) => set(() => ({ onCreate })),
    setUser: (user) => set(() => ({ user })),
    setLoading: (loading) => set(() => ({ loading })),
    setError: (error) => set(() => ({ error })),
  })
);

interface UpdateState extends State {
  onUpdate: boolean;
  user: User | null;
}

interface UpdateAction extends Action {
  setOnUpdate: (onUpdate: UpdateState["onUpdate"]) => void;
  setUser: (user: UpdateState["user"]) => void;
}

export const useUpdateUserStore = create<UpdateState & UpdateAction>(
  (set, get) => ({
    onUpdate: false,
    loading: false,
    error: "",
    user: null,

    setOnUpdate: (onUpdate) => set(() => ({ onUpdate })),
    setUser: (user) => set(() => ({ user })),
    setLoading: (loading) => set(() => ({ loading })),
    setError: (error) => set(() => ({ error })),
  })
);

interface DeleteState extends State {
  onDelete: boolean;
  user: User | null;
}

interface DeleteAction extends Action {
  setOnDelete: (onUpdate: DeleteState["onDelete"]) => void;
  setUser: (user: DeleteState["user"]) => void;
}

export const useDeleteUserStore = create<DeleteState & DeleteAction>((set) => ({
  onDelete: false,
  loading: false,
  error: "",
  user: null,
  setOnDelete: (onDelete) => set(() => ({ onDelete })),
  setUser: (user) => set(() => ({ user })),
  setLoading: (loading) => set(() => ({ loading })),
  setError: (error) => set(() => ({ error })),
}));
