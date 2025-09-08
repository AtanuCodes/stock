import React, { useState } from 'react';
import { Eye, EyeOff, TrendingUp, Shield, BarChart3 } from 'lucide-react';
import logo1 from "../../assets/Group 47.png"
import { useNavigate } from 'react-router-dom';

const LoginInterface = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const getCurrentGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempt:', { username, password, rememberMe });
    }, 2000);
    navigate('/dashboard')
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 via-rose-50 to-gray-00 flex items-center justify-center px-4">
      {/* Subtle Background Pattern */}
      <div className=""></div>
      
      <div className="relative w-full max-w-md">
        {/* Main Login Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
          {/* App Logo and Branding */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 shadow-lg">
              <img src={logo1} className="w-8 h-8" alt="Logo"/>
            </div>
          </div>

          {/* Greeting */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{getCurrentGreeting()}!</h2>
            <p className="text-gray-500 text-sm">Welcome back to your trading dashboard</p>
          </div>

          {/* Login Form */}
          <div className="space-y-5">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username or Email
              </label>
              <div className="relative">
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200"
                  placeholder="Enter your username or email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200 pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 bg-white text-red-500 focus:ring-red-500/20 focus:ring-2"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm text-red-500 hover:text-red-600 transition-colors font-medium"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="button"
              onClick={handleLogin}
              disabled={isLoading || !username || !password}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3
               px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-red-500 hover:to-red-600 
               transform hover:scale-[1.01] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
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
          </div>

       
        </div>

        {/* Market Stats Decoration */}
        {/* <div className="absolute -top-4 -right-4 bg-gradient-to-bl from-red-300 to-red-500 backdrop-blur-sm rounded-full p-3 border border-red-200">
          <BarChart3 className="w-6 h-6   text-white" />
        </div> */}

        {/* Footer */}
        <div className="text-center mt-4 text-xs text-gray-500">
          <p>© 2025 I-Trade. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginInterface;



// import React, { useState } from 'react';
// import { Eye, EyeOff, TrendingUp, Shield, BarChart3 } from 'lucide-react';

// const LoginInterface = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const getCurrentGreeting = () => {
//     const hour = new Date().getHours();
//     if (hour < 12) return 'Good Morning';
//     if (hour < 17) return 'Good Afternoon';
//     return 'Good Evening';
//   };

//   const handleLogin = () => {
//     setIsLoading(true);
//     // Simulate login process
//     setTimeout(() => {
//       setIsLoading(false);
//       console.log('Login attempt:', { username, password, rememberMe });
//     }, 2000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
//       {/* Background Pattern */}
//       <div className=""></div>
      
//       <div className="relative w-full max-w-md">
//         {/* Main Login Card */}
//         <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
//           {/* App Logo and Branding */}
//           <div className="text-center mb-8">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl mb-4 shadow-lg">
//               <TrendingUp className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="text-2xl font-bold text-white mb-2">TradeHub Pro</h1>
//             <p className="text-blue-200 text-sm">Professional Trading Platform</p>
//           </div>

//           {/* Greeting */}
//           <div className="text-center mb-8">
//             <h2 className="text-xl font-semibold text-white mb-1">{getCurrentGreeting()}!</h2>
//             <p className="text-blue-200 text-sm">Welcome back to your trading dashboard</p>
//           </div>

//           {/* Login Form */}
//           <div className="space-y-6">
//             {/* Username Field */}
//             <div>
//               <label htmlFor="username" className="block text-sm font-medium text-blue-200 mb-2">
//                 Username or Email
//               </label>
//               <div className="relative">
//                 <input
//                   id="username"
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
//                   placeholder="Enter your username or email"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-blue-200 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   type={showPassword ? 'text' : 'password'}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 pr-12"
//                   placeholder="Enter your password"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-white transition-colors"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//             </div>

//             {/* Remember Me & Forgot Password */}
//             <div className="flex items-center justify-between">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                   className="w-4 h-4 rounded border-white/20 bg-white/5 text-blue-500 focus:ring-blue-400 focus:ring-2"
//                 />
//                 <span className="ml-2 text-sm text-blue-200">Remember me</span>
//               </label>
//               <button
//                 type="button"
//                 className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
//               >
//                 Forgot Password?
//               </button>
//             </div>

//             {/* Login Button */}
//             <button
//               type="button"
//               onClick={handleLogin}
//               disabled={isLoading || !username || !password}
//               className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
//             >
//               {isLoading ? (
//                 <div className="flex items-center">
//                   <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
//                   Signing In...
//                 </div>
//               ) : (
//                 'Sign In to Dashboard'
//               )}
//             </button>
//           </div>

//           {/* Security Badge */}
//           <div className="flex items-center justify-center mt-6 text-xs text-blue-300">
//             <Shield className="w-4 h-4 mr-1" />
//             <span>256-bit SSL encrypted connection</span>
//           </div>
//         </div>

//         {/* Market Stats Decoration */}
//         <div className="absolute -top-4 -right-4 bg-green-500/20 backdrop-blur-sm rounded-full p-3 border border-green-400/30">
//           <BarChart3 className="w-6 h-6 text-green-400" />
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-8 text-xs text-blue-300/70">
//           <p>© 2025 TradeHub Pro. All rights reserved.</p>
//           <p className="mt-1">Professional trading platform for serious investors</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginInterface;