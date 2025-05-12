import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import AuthLayout from '../layout/AuthLayout';
import Button from '../common/Button';
import Input from '../common/Input';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <AuthLayout>
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold text-white mb-10">
          Đăng nhập vào Spotify
        </h1>

        <div className="space-y-3">
          <Button 
            variant="social" 
            icon={<FaGoogle />}
          >
            Tiếp tục với Google
          </Button>
          <Button 
            variant="social" 
            icon={<FaFacebook />}
          >
            Tiếp tục với Facebook
          </Button>
          <Button 
            variant="social" 
            icon={<FaApple />}
          >
            Tiếp tục với Apple
          </Button>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#282828]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-black px-4 text-[#a7a7a7]">hoặc</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="text-left">
          <Input
            label="Email hoặc tên người dùng"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          
          <Input
            label="Mật khẩu"
            type="password"
            required
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />

          <Button type="submit" variant="primary" className="mt-6">
            Đăng nhập
          </Button>
        </form>

        <Button variant="link" className="mt-4">
          Quên mật khẩu của bạn?
        </Button>

        <div className="mt-8 pt-8 border-t border-[#282828]">
          <p className="text-[#a7a7a7]">Bạn chưa có tài khoản?</p>
          <Link to="/register">
            <Button variant="outline" className="mt-4">
              Đăng ký Spotify
            </Button>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
