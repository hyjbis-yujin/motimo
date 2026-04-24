import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logged in with:", email, password);
    // TODO: 실제 API 연동 시 아래 로직 교체
    navigate('/');
  };

  return (
    <div className="w-full">
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input 
          type="email" 
          placeholder="이메일을 입력해주세요" 
          className="w-full h-[56px] px-4 rounded-[16px] bg-[#fbfbfb] border border-[#eeeeee] text-[15px] outline-none focus:border-primary-mint transition-colors placeholder:text-[#bbbbbb]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="비밀번호를 입력해주세요" 
          className="w-full h-[56px] px-4 rounded-[16px] bg-[#fbfbfb] border border-[#eeeeee] text-[15px] outline-none focus:border-primary-mint transition-colors placeholder:text-[#bbbbbb]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button 
          type="submit" 
          className="w-full h-[56px] mt-2 bg-primary-mint text-white text-[16px] font-bold rounded-[16px] active:bg-[#14b38d] transition-colors"
        >
          로그인
        </button>
      </form>

      {/* 보조 링크 */}
      <div className="flex items-center justify-center gap-3 mt-6 text-[13px] text-text-secondary font-medium">
        <button type="button" className="active:text-text-dark transition-colors">아이디 찾기</button>
        <span className="text-[#e2e2e2] text-[10px]">|</span>
        <button type="button" className="active:text-text-dark transition-colors">비밀번호 찾기</button>
        <span className="text-[#e2e2e2] text-[10px]">|</span>
        <button type="button" className="active:text-text-dark transition-colors">회원가입</button>
      </div>

    </div>
  );
}
