import { createContext, useContext, useState, ReactNode } from "react";
// import { useHistory } from "react-router-dom"
import axios from "axios";

interface IAuth {
  email: string;
  password: string;
}

interface IContextProps {
  children: ReactNode;
}

interface AuthProviderData {
  authToken: string;
  signIn: (userData: IAuth, history: any) => void;
  Logout: (history: any) => void;
}
export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

export const AuthProvider = ({ children }: IContextProps) => {
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const signIn = (userData: IAuth, history: any) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", userData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setAuthToken(res.data.token);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err, "Error"));
  };

  const Logout = (history: any) => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };
  return (
    <AuthContext.Provider value={{ authToken, Logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
//  export const useAuth = () => createContext<AuthProviderData>({} as AuthProviderData);
