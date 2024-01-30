import Container from "../components/Container";
import FormWrap from "../components/products/FormWrap";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <Container>
      <FormWrap>
        <RegisterForm />
      </FormWrap>
    </Container>
  );
};

export default RegisterPage;
