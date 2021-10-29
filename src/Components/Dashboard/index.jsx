import { Button } from "@material-ui/core";
import { Container, Content } from "./style";
import { AuthContext } from "../../Providers/Auth";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
export const Dashboard = () => {
  const history = useHistory();

  const { Logout } = useContext(AuthContext);
  return (
    <Container>
      <img
        src={
          "https://img.freepik.com/free-vector/creative-hand-lettering-quote-welcome_67074-358.jpg?size=626&ext=jpg"
        }
      />
      <Button
        onClick={() => Logout(history)}
        variant="outlined"
        color="primary"
      >
        Logout
      </Button>
    </Container>
  );
};
export default Dashboard;
