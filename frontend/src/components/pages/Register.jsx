import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Button from "../common/Button";
import Input from "../common/Input";

const Register = () => {
  const [isHovered, setIsHovered] = useState(false); //Hover for button

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    username: "",
    birthdate: "",
  });

  // Kiểm tra dữ liệu đầu vào (sai->báo lỗi; đúng->gửi lên django)
  const validateForm = () => {
    if (!formData.email) {
      alert("Email không được để trống");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Email không hợp lệ");
      return false;
    }
    if (!formData.password) {
      alert("Mật khẩu không được để trống");
      return false;
    }
    if (formData.password.length < 6) {
      alert("Mật khẩu phải có ít nhất 6 ký tự");
      return false;
    }
    if (formData.password !== formData.password_confirmation) {
      alert("Mật khẩu xác nhận không khớp");
      return false;
    }
    if (!formData.username) {
      alert("Tên người dùng không được để trống");
      return false;
    }
    if (!formData.birthdate) {
      alert("Ngày sinh không được để trống");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const payload = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.password_confirmation,
      date_of_birth: formData.birthdate,
    };

    try {
      const res = await fetch("http://localhost:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      // Thông báo và chuyển hướng đến trang đăng nhập nếu thành công
      if (res.ok) {
        alert("Đăng ký thành công!");
        window.location.href = "/login";
      } else {
        // Hiển thị lỗi từ backend
        alert(data?.email || data?.password || "Đăng ký thất bại");
      }
    } catch {
      alert("Có lỗi xảy ra!");
    }
  };

  return (
    <AuthLayout>
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold text-white mb-10">
          Đăng ký miễn phí để nghe nhạc
        </h1>

        <form onSubmit={handleSubmit} className="text-left">
          <Input
            label="Email của bạn"
            type="email"
            required
            placeholder="Nhập email của bạn"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <Input
            label="Tạo mật khẩu"
            type="password"
            required
            placeholder="Tạo mật khẩu"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
          />

          <Input
            label="Nhập lại mật khẩu"
            type="password"
            required
            placeholder="Nhập lại mật khẩu"
            value={formData.password_confirmation}
            onChange={(e) =>
              setFormData({
                ...formData,
                password_confirmation: e.target.value,
              })
            }
          />
          <Input
            label="Tên người dùng của bạn"
            type="text"
            required
            placeholder="Nhập tên người dùng"
            value={formData.username}
            onChange={(e) =>
              setFormData({
                ...formData,
                username: e.target.value,
              })
            }
          />
          <label className="block mb-2 text-sm font-bold text-white">
            Ngày sinh của bạn
          </label>
          <Input
            type="date"
            required
            value={formData.birthdate}
            onChange={(e) =>
              setFormData({
                ...formData,
                birthdate: e.target.value,
              })
            }
          />

          <Button type="submit" variant="primary">
            Đăng ký
          </Button>
        </form>

        <div className="relative my-6" s>
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#282828]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-black px-4 text-[#a7a7a7]">hoặc</span>
          </div>
        </div>

        <Link
          to="/login"
          className={`block transition duration-200 w-full px-8 py-3 rounded-full font-semibold ${
            isHovered
              ? "bg-[#1ed760] text-black"
              : "bg-transparent text-[#a7a7a7] border border-[#a7a7a7]"
          } hover:bg-[#1ed760] hover:text-black`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}>
          {isHovered ? "Về trang đăng nhập" : "Bạn đã có tài khoản"}
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Register;
