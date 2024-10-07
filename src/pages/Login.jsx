

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get("https://66e7e6bbb17821a9d9da704c.mockapi.io/home");
      const user = response.data.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        onLogin(user);
        navigate("/dashboard");
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        
      
        <div className="text-4xl font-bold mb-8">X</div>
        
     
        <h2 className="text-3xl font-bold mb-6">تسجيل الدخول</h2>

        
        <input
          type="text"
          placeholder="اسم المستخدم"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-gray-800 text-white p-3 rounded-full mb-4"
        />

       
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-gray-800 text-white p-3 rounded-full mb-4"
        />

      
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-3 rounded-full font-bold mb-4"
        >
          تسجيل الدخول
        </button>

     
        <p className="text-gray-500">
          ليس لديك حساب؟{" "}
          <a href="/signup" className="text-blue-500">
            إنشاء حساب جديد
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;






































// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { FaApple } from "react-icons/fa"; // أيقونة Apple
// import { FcGoogle } from "react-icons/fc"; // أيقونة Google

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.get("https://66e7e6bbb17821a9d9da704c.mockapi.io/home");
//       const user = response.data.find(
//         (u) => u.username === username && u.password === password
//       );

//       if (user) {
//         onLogin(user);
//         navigate("/dashboard");
//       } else {
//         alert("Invalid username or password");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-black">
//       <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        
//         {/* شعار X */}
//         <div className="text-4xl font-bold mb-8">X</div>
        
//         {/* العنوان */}
//         <h2 className="text-3xl font-bold mb-6">Sign in to X</h2>

//         {/* خيار تسجيل الدخول مع Google */}
//         <div className="flex items-center justify-center mb-4 bg-gray-800 rounded-full p-2">
//           <FcGoogle className="text-2xl mr-2" />
//           <span className="text-white text-sm">Sign in as Arwa</span>
//         </div>

//         {/* تسجيل الدخول مع Apple */}
//         <button className="w-full flex items-center justify-center bg-white text-black p-3 rounded-full mb-4">
//           <FaApple className="text-2xl mr-2" />
//           <span className="font-bold">Sign in with Apple</span>
//         </button>

//         {/* خط أو */}
//         <div className="relative my-4">
//           <hr className="border-gray-600" />
//           <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black px-2 text-gray-400">or</span>
//         </div>

//         {/* حقل إدخال المستخدم */}
//         <input
//           type="text"
//           placeholder="Phone, email, or username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="w-full bg-gray-800 text-white p-3 rounded-full mb-4"
//         />

//         {/* زر التالي */}
//         <button
//           onClick={handleLogin}
//           className="w-full bg-blue-500 text-white p-3 rounded-full font-bold mb-4"
//         >
//           Next
//         </button>

//         {/* رابط نسيان كلمة المرور */}
//         <button className="w-full bg-transparent text-blue-500 p-3 rounded-full font-bold mb-4">
//           Forgot password?
//         </button>

//         {/* رابط التسجيل */}
//         <p className="text-gray-500">
//           Don't have an account?{" "}
//           <a href="/signup" className="text-blue-500">
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
