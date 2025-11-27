import { Eye, EyeClosed } from "lucide-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export type Tlogin = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

interface TError {
  isError?: boolean;
  message?: string;
}

type formData = {
  username: string;
  password: string;
};

const Login = () => {
  // const [username, setUsername] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  const [formData, setFormData] = useState<formData>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<TError | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {  setIsLogin } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.username.length < 3) {
      setError({
        message: "Username must be at least 3 characters",
        isError: true,
      });
      return;
    } else if (formData.password.length < 3) {
      setError({
        message: "password must be at least 3 characters",
        isError: true,
      });
      return;
    } else if (formData.username !== "admin") {
      setError({ message: "username is incorrect", isError: true });
      return;
    } else if (formData.password !== "admin") {
      setError({ message: "password is incorrect", isError: true });
      return;
    } else {
      toast.success("Login Successful");
      setIsLogin(true);
      navigate("/");

      localStorage.setItem("isLogin", "true");
    }
  };

  return (
    <div className="w-full h-full bg-gray-900 flex flex-col items-center justify-center">
      <img
        loading="lazy"
        className="lazy w-full opacity-40 blur-xl h-full absolute object-center img-fluid object-cover"
        src="https://c4.wallpaperflare.com/wallpaper/330/742/448/trees-monochrome-sunlight-limbo-wallpaper-preview.jpg"
        alt=""
      />

      <form
        action=""
        onSubmit={(e) => {
          formHandler(e);
        }}
        className="flex flex-col z-10 gap-4  p-8 rounded"
      >
        {error?.isError && (
          <div className="w-full p-3 rounded-xl bg-gray-800/80">
            <p className="text-red-500 text font-semibold">{error.message}</p>
          </div>
        )}

        <input
          type="text"
          value={formData.username}
          onChange={(e) => {
            setFormData({ ...formData, username: e.target.value });
          }}
          name="username"
          id=""
          className=" focus:border-gray-500 border-2 focus:outline-none border-gray-700 text-blue-200 bg-gray-800/50 px-4 rounded-xl h-12 w-96 "
          placeholder="Username"
        />
        <div className="relative">
          <input
            type={`${showPassword ? "text" : "password"}`}
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
            name="password"
            id=""
            className="relative focus:border-gray-500 border-2
             focus:outline-none   border-gray-700 text-blue-200
              bg-gray-800/50 px-4 rounded-xl h-12 w-96 "
            placeholder="Password"
          />
          {formData.password.length > 0 &&
            (showPassword ? (
              <EyeClosed
                onClick={() => setShowPassword((prev) => !prev)}
                size={20}
                className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-3"
              />
            ) : (
              <Eye
                onClick={() => setShowPassword((prev) => !prev)}
                size={20}
                className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-3"
              />
            ))}
        </div>

        <button
          className="abs rounded-lg h-12 mt-6  bg-gray-900 hover:bg-blue-950 "
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
