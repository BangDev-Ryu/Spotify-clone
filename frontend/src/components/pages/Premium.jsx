import { useState } from "react";

export default function Premium() {
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const handleChoosePremium = () => {
    setShowPaymentOptions(true);
  };

  const handlePayment = async (method) => {
    try {
      const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
      const res = await fetch("http://127.0.0.1:8000/api/payments/create/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: currentUser.user_id,
          payment_method: method,
          amount: 59000,
        }),
      });
      const data = await res.json();
      if (data && data.success) {
        const updateRes = await fetch(
          `http://127.0.0.1:8000/api/users/update/${currentUser.user_id}/`,
          {
            method: "PATCH", // Thay đổi từ PUT sang PATCH
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_type: "premium" }),
          }
        );

        if (updateRes.ok) {
          const updatedUser = { ...currentUser, user_type: "premium" };
          sessionStorage.setItem("currentUser", JSON.stringify(updatedUser));
          alert("Đăng ký Premium thành công!");
          window.location.reload();
        } else {
          const errorData = await updateRes.json();
          alert(
            `Thanh toán thành công nhưng cập nhật tài khoản thất bại: ${
              errorData.error || "Unknown error"
            }`
          );
        }
      } else {
        alert("Thanh toán thất bại!");
      }
    } catch (err) {
      console.error(err);
      alert("Lỗi kết nối server!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Spotify Premium</h1>
      <div className="bg-white/10 rounded-xl p-8 w-full max-w-md shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">Gói Premium</h2>
        <ul className="mb-6 text-lg list-disc list-inside text-left">
          <li>Nghe nhạc không quảng cáo</li>
          <li>Tải nhạc về thiết bị</li>
          <li>Chất lượng âm thanh cao</li>
          <li>Nghe offline mọi lúc mọi nơi</li>
        </ul>
        <div className="text-3xl font-bold mb-4">59.000đ/tháng</div>
        {!showPaymentOptions ? (
          <button
            onClick={handleChoosePremium}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition"
          >
            Chọn gói Premium
          </button>
        ) : (
          <div className="flex flex-col gap-4 w-full">
            <button
              onClick={() => handlePayment("momo")}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition"
            >
              Thanh toán qua MoMo
            </button>
            <button
              onClick={() => handlePayment("vnpay")}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition"
            >
              Thanh toán qua VNPay
            </button>
            <button
              onClick={() => handlePayment("zalopay")}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition"
            >
              Thanh toán qua ZaloPay
            </button>
          </div>
        )}
      </div>
    </div>
  );
}