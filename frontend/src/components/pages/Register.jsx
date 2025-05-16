import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import AuthLayout from '../layout/AuthLayout';
import Button from '../common/Button';
import Input from '../common/Input';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    birthdate: '',
    gender: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthLayout>
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold text-white mb-10">
          Đăng ký miễn phí để nghe nhạc
        </h1>

        <div className="space-y-3">
          <Button 
            variant="social" 
            icon={<FaGoogle />}
          >
            Đăng ký bằng Google
          </Button>
          <Button 
            variant="social" 
            icon={<FaFacebook />}
          >
            Đăng ký bằng Facebook
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
            label="Email của bạn"
            type="email"
            required
            placeholder="Nhập email của bạn"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          
          <Input
            label="Tạo mật khẩu"
            type="password"
            required
            placeholder="Tạo mật khẩu"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />

          <Input
            label="Họ tên của bạn"
            type="text"
            required
            placeholder="Nhập tên người dùng"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-white">
              Ngày sinh của bạn
            </label>
            <Input
              type="date"
              required
              value={formData.birthdate}
              onChange={(e) => setFormData({...formData, birthdate: e.target.value})}
            />
          </div>

          {/* <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-white">
              Giới tính của bạn là gì?
            </label>
            <div className="flex gap-4">
              {['Nam', 'Nữ', 'Khác'].map(gender => (
                <label key={gender} className="flex items-center gap-2 p-3 border border-[#727272] rounded-md cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    className="text-[#1ed760]"
                  />
                  <span className="text-white">{gender}</span>
                </label>
              ))}
            </div>
          </div> */}

          <Button type="submit" variant="primary">
            Đăng ký
          </Button>
        </form>

        <div className="mt-8 pt-8 border-t border-[#282828]">
          <p className="text-[#a7a7a7]">Bạn đã có tài khoản?</p>
          <Link to="/login">
            <Button variant="outline" className="mt-4">
              Đăng nhập
            </Button>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
