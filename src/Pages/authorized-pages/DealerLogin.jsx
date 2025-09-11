

import React, { useState } from 'react';
import { Eye, EyeOff, TrendingUp, Shield, BarChart3,  Settings  } from 'lucide-react';
import logo1 from "../../assets/Logo_SL_W.png"
import { useNavigate } from 'react-router-dom';
import bg from "../../assets/bg.svg"

const IDLCLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [virtualKeyboard, setVirtualKeyboard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
 const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoading(true);
    navigate("/terminal")
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempt:', { username, password, rememberMe, virtualKeyboard });
    }, 2000);
  };

  return (
    <div 
      className="min-h-screen relative flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-200/80 via-blue-900/70 to-red-950/75"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative w-full max-w-md z-10">
        {/* Main Login Card */}
        <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 ">
          
          {/* Logo Section */}
          <div className="text-center mb-8">
            <div className="mb-6">
              {/* IDLC Logo */}
              <div className="inline-block bg-white/5 p-4 rounded-xl mb-4">
                <div className="flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <img src={logo1} alt="IDLC Logo" className="w-40 h-24" />
                  </div>
                </div>
               
              </div>
             
            </div>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            {/* Username Field */}
            <div>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Username"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={virtualKeyboard}
                  onChange={(e) => setVirtualKeyboard(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-500 bg-slate-700/50 text-blue-500 focus:ring-blue-500 focus:ring-2"
                />
                <span className="ml-3 text-sm text-slate-300">Virtual Keyboard</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-500 bg-slate-700/50 text-blue-500 focus:ring-blue-500 focus:ring-2"
                />
                <span className="ml-3 text-sm text-slate-300">Remember me</span>
              </label>
            </div>

            {/* Login Button */}
            <button
              type="button"
              onClick={handleLogin}
              disabled={isLoading || !username || !password}
              className="w-full bg-gradient-to-r from-red-500 to-red-600/90 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Signing In...
                </div>
              ) : (
                'Login'
              )}
            </button>

            {/* Connection Settings */}
            <div className="text-center">
              <button
                type="button"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center mx-auto"
              >
                <Settings className="w-4 h-4 mr-1" />
                Connection Settings
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-slate-400">
          {/* <div className="flex items-center justify-center mb-2">
            <Shield className="w-4 h-4 mr-1" />
            <span>Secure Connection</span>
          </div> */}
          <p>Copyright 2002-2025 DirectFN™ Ltd. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default IDLCLogin;