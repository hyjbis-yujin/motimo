import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isComingSoon, setIsComingSoon] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore(state => state.login);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email.trim() && password.trim()) {
      login({ name: '한유진', email });
      
      const from = location.state?.from || '/';
      navigate(from, { replace: true });
    }
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
          className="w-full h-[56px] mt-2 bg-primary-mint text-white text-[16px] font-bold rounded-[16px] active:bg-primary-dark transition-colors"
        >
          로그인
        </button>
      </form>

      {/* 보조 링크 */}
      <div className="flex flex-col items-center mt-6">
        <div className="flex items-center justify-center gap-3 text-[13px] text-text-secondary font-medium">
          <button 
            type="button" 
            className="active:text-text-dark transition-colors"
            onClick={() => setIsComingSoon(true)}
          >
            아이디 찾기
          </button>
          <span className="text-[#e2e2e2] text-[10px]">|</span>
          <button 
            type="button" 
            className="active:text-text-dark transition-colors"
            onClick={() => setIsComingSoon(true)}
          >
            비밀번호 찾기
          </button>
          <span className="text-[#e2e2e2] text-[10px]">|</span>
          <button 
            type="button" 
            className="active:text-text-dark transition-colors"
            onClick={() => setIsComingSoon(true)}
          >
            회원가입
          </button>
        </div>
        
        {isComingSoon && (
          <p className="mt-4 text-[12px] text-primary-mint font-semibold animate-fade-in">
            서비스 준비 중입니다. 잠시만 기다려주세요.
          </p>
        )}
      </div>

    </div>
  );
}
