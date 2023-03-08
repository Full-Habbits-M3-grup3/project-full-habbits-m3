import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUserContext } from "../../hooks/useUserContext";
import { StyledMain } from "./style";
import { Link } from "react-router-dom";

interface IUseForm {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email("E-mail deve ser um e-mail válido")
      .required("E-mail é um campo obrigatório"),
    password: yup.string().required("Senha é um campo obrigatório"),
  })
  .required();

export const LoginPage = () => {
  const { loginUser } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUseForm>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IUseForm> = (data) => {
    loginUser(data);
  };

  return (
    <StyledMain>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="heading-2">Login</h1>
        <div className="form-container">
          <label className="text-1" htmlFor="email">
            E-mail
          </label>
          <input type="text" id="email" {...register("email")} />
          <p>{errors.email?.message}</p>

          <label className="text-1" htmlFor="password">
            Senha
          </label>
          <input type="password" id="password" {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit">Entrar</button>
        <div className="register-container">
          <p>Não tem conta?</p>
          <Link className="link-register" to="/register">
            Cadastre-se
          </Link>
        </div>
      </form>
    </StyledMain>
  );
};
