import { ReactNode } from "react";
import { AuthProvider } from "./Auth/index";

interface IProvidersProp {
  children: ReactNode;
}
const Providers = ({ children }: IProvidersProp) => {
  return <AuthProvider>{children}</AuthProvider>;
};
export default Providers