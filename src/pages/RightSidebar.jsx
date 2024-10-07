

import { FiHome, FiSearch, FiBell, FiMail } from "react-icons/fi";
import { FaUsers, FaGem } from "react-icons/fa";
import { AiOutlineEdit, AiOutlineUser, AiOutlineClose, AiOutlineSend, AiOutlineLogout } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom"; 

const RightSidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/explore"); 
  };

  return (
    <div className="w-72 h-screen fixed bg-gray-900 text-white flex flex-col justify-between p-9">
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <AiOutlineClose size={24} />
          <Link to="/dashboard" className="hidden md:inline text-xl">الرئيسية</Link> 
        </div>
        <div className="flex items-center space-x-2" onClick={handleExploreClick}>
          <FiSearch size={24} />
          <span className="hidden md:inline text-xl">استكشف</span>
        </div>
        <div className="flex items-center space-x-2">
          <FiBell size={24} />
          <Link to="/notifications" className="hidden md:inline text-xl">التنبيهات</Link>
        </div>
        <div className="flex items-center space-x-2">
          <FiMail size={24} />
          <Link to="/messages" className="hidden md:inline text-xl">الرسائل</Link>
        </div>
        <div className="flex items-center space-x-2">
          <AiOutlineEdit size={24} />
          <Link to="/grok" className="hidden md:inline text-xl">Grok</Link>
        </div>
        <div className="flex items-center space-x-2">
          <FaUsers size={24} />
          <Link to="/communities" className="hidden md:inline text-xl">المجتمعات</Link>
        </div>
        <div className="flex items-center space-x-2">
          <FaGem size={24} />
          <Link to="/premium" className="hidden md:inline text-xl">Premium</Link>
        </div>
        <div className="flex items-center space-x-2">
          <AiOutlineUser size={24} />
          <Link to="/profile" className="hidden md:inline text-xl">الملف الشخصي</Link>
        </div>
        <div className="flex items-center space-x-2">
          <BsThreeDots size={24} />
          <Link to="/more" className="hidden md:inline text-xl">المزيد</Link>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <AiOutlineSend
          size={24}
          className="cursor-pointer text-blue-500"
          title="نشر"
        />
      </div>

      <div className="flex items-center space-x-2">
        <AiOutlineLogout
          size={30}
          onClick={onLogout}
          className="cursor-pointer text-red-500"
          title="تسجيل الخروج"
        />
      </div>

      <div className="flex items-center space-x-2">
        <img src="https://pbs.twimg.com/profile_images/1817322973864361984/zkJUgLO8_400x400.jpg" alt="avatar" className="w-10 h-10 rounded-full" />
        <span className="hidden md:inline">arwa</span>
      </div>
    </div>
  );
};

export default RightSidebar;
