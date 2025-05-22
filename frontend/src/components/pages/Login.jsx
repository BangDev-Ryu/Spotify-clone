/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Button from "../common/Button";
import Input from "../common/Input";

const Login = () => {
  const [isHovered, setIsHovered] = useState(false); //Hover for button
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    if (!formData.email) {
      setError("Email không được để trống");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Email không hợp lệ");
      return false;
    }
    if (!formData.password) {
      setError("Mật khẩu không được để trống");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Đăng nhập thất bại");
      if (data && data.user && data.user.id) {
        localStorage.setItem("currentUserId", data.user.id.toString());
      } else if (data && data.id) {
        localStorage.setItem("currentUserId", data.id.toString());
      }

      navigate("/");
    } catch (err) {
      setError(err.message || "Đăng nhập thất bại");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold text-white mb-10">
          Đăng nhập vào Spotify
        </h1>

        <form onSubmit={handleSubmit} className="text-left">
          <Input
            label="Email người dùng"
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <Input
            label="Mật khẩu"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          {error && (
            <div className="text-red-500 text-sm mt-2 text-center">{error}</div>
          )}

          <Button
            type="submit"
            variant="primary"
            className="mt-6"
            disabled={isLoading}>
            {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
          </Button>
        </form>

        {/* <Link
          to="/forget-pwd"
          className="block mt-4 text-white hover:underline text-center">
          Quên mật khẩu của bạn?
        </Link> */}

        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#282828]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-black px-4 text-[#a7a7a7]">hoặc</span>
          </div>
        </div>

        <Link
          to="/register"
          className={`block transition duration-200 w-full px-8 py-3 rounded-full font-semibold ${
            isHovered
              ? "bg-[#1ed760] text-black"
              : "bg-transparent text-[#a7a7a7] border border-[#a7a7a7]"
          } hover:bg-[#1ed760] hover:text-black`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}>
          {isHovered ? "Đăng ký Spotify" : "Bạn chưa có tài khoản?"}
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Login;
