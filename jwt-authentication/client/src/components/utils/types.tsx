export type FormsData = {
  email: string;
  password: string;
};

export type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};
