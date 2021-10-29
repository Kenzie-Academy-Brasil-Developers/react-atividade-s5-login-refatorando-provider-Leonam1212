import { Container, Content } from "./style";
import { useForm} from "react-hook-form";
import { useHistory } from "react-router-dom"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@material-ui/core";
import { AuthContext } from "../../Providers/Auth";
import { useContext } from "react";

interface IUserData {
  email: string;
  password: string;
  data: any;
}
const Login = () => {
  const history = useHistory()
  const { signIn } = useContext(AuthContext);
  
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Minimo de 6 caracteres.")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserData>({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: IUserData) => {
    console.log(data)
    signIn(data, history);
  };

  return (
    <Container>
      <Content>
        <form onSubmit = {handleSubmit(onSubmitFunction)}>
          <h2>Log<span>In</span></h2>
          <div>
            <TextField
              label="Email"
              margin="normal"
              variant="standard"
              size="small"
              color="primary"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </div>
          <div>
            <TextField
              label="Senha"
              margin="normal"
              type = "password"
              variant="standard"
              size="small"
              color="primary"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </div>
          <Button type="submit" variant="outlined" color="primary">
            Login
          </Button>
        </form>
      </Content>
    </Container>
  );
};
export default Login;
