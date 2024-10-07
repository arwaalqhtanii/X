

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      navigate("/dashboard"); 
    }
  }, [navigate]);

  const handleSignUp = async () => {
  
    if (password.length < 5) {
      setError("كلمة المرور يجب أن تكون أكثر من ٤ حروف");
      return; 
    }

    try {
     
      const response = await axios.post("https://66e7e6bbb17821a9d9da704c.mockapi.io/home", {
        username,
        password,
      });
      
     
      localStorage.setItem("user", JSON.stringify(response.data));
      
 
      navigate("/dashboard");
    } catch (error) {
      console.error("SignUp error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        

        <div className="text-4xl font-bold mb-8">X</div>
        
   
        <h2 className="text-3xl font-bold mb-6">إنشاء حساب جديد</h2>

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

        {error && <p className="text-red-500 mb-4">{error}</p>}

      
        <button
          onClick={handleSignUp}
          className="w-full bg-blue-500 text-white p-3 rounded-full font-bold mb-4"
        >
          تسجيل جديد
        </button>

  
        <p className="text-gray-500">
          لديك حساب بالفعل؟{" "}
          <a href="/login" className="text-blue-500">
            تسجيل الدخول
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
