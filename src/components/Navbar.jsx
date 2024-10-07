

// import { useState } from 'react';
// import { FaHome, FaSearch, FaBell, FaEnvelope, FaUser, FaEllipsisH, FaTimes, FaPenNib, FaUsers, FaStar } from 'react-icons/fa'; // استيراد الأيقونات

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false); // التحكم بظهور القائمة الجانبية
//   const [activeTab, setActiveTab] = useState('لك'); // التحكم بالتبويب النشط

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen); // تغيير حالة القائمة الجانبية عند الضغط على "X"
//   };

//   return (
//     <div className="bg-black text-white flex justify-between items-center p-4 w-screen">
//       {/* Search Bar */}
//       <div className="relative w-full max-w-xs">
//         <input
//           type="text"
//           placeholder="بحث"
//           className="bg-gray-800 text-white rounded-full pl-4 pr-10 py-2 w-full"
//         />
//         <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
//           <FaSearch />
//         </span>
//       </div>

//       {/* Tabs */}
//       <div className="flex items-center gap-8">
//         <button
//           className={`relative focus:outline-none ${activeTab === 'لك' ? 'text-white' : 'text-gray-400'}`}
//           onClick={() => setActiveTab('لك')}
//         >
//           لك
//           {activeTab === 'لك' && (
//             <div className="absolute bottom-[-4px] left-0 right-0 h-1 bg-blue-500"></div>
//           )}
//         </button>

//         <button
//           className={`relative focus:outline-none ${activeTab === 'متابعون' ? 'text-white' : 'text-gray-400'}`}
//           onClick={() => setActiveTab('متابعون')}
//         >
//           متابعون
//           {activeTab === 'متابعون' && (
//             <div className="absolute bottom-[-4px] left-0 right-0 h-1 bg-blue-500"></div>
//           )}
//         </button>
//       </div>

//       {/* "X" Icon */}
//       <button onClick={toggleMenu} className="text-white focus:outline-none text-3xl">
//         <FaTimes />
//       </button>

//       {/* Overlay Background when the menu is open */}
//       {menuOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 z-40" onClick={toggleMenu}></div>
//       )}

//       {/* Side Menu */}
//       <div
//         className={`fixed top-0 right-0 w-64 h-full bg-black text-white transform ${
//           menuOpen ? 'translate-x-0' : 'translate-x-full'
//         } transition-transform duration-300 ease-in-out z-50`}
//       >
//         <div className="p-6">
//           {/* Menu Close (X) Icon inside the side menu */}
//           <button onClick={toggleMenu} className="text-white text-2xl mb-8">
//             <FaTimes />
//           </button>
//           {/* Menu Items */}
//           <ul className="space-y-4">
//             <li className="flex items-center gap-2">
//               <FaHome />
//               الرئيسية
//             </li>
//             <li className="flex items-center gap-2">
//               <FaSearch />
//               استكشف
//             </li>
//             <li className="flex items-center gap-2">
//               <FaBell />
//               التنبيهات
//             </li>
//             <li className="flex items-center gap-2">
//               <FaEnvelope />
//               الرسائل
//             </li>
//             <li className="flex items-center gap-2">
//               <FaPenNib />
//               Grok
//             </li>
//             <li className="flex items-center gap-2">
//               <FaUsers />
//               المجتمعات
//             </li>
//             <li className="flex items-center gap-2">
//               <FaStar />
//               Premium
//             </li>
//             <li className="flex items-center gap-2">
//               <FaUser />
//               الملف الشخصي
//             </li>
//             <li className="flex items-center gap-2">
//               <FaEllipsisH />
//               المزيد
//             </li>
//             <li>
//               <button className="bg-blue-500 w-full py-2 rounded-md text-white">
//                 نشر
//               </button>
//             </li>
//             <li className="flex items-center gap-2">
//               <img
//                 src="https://via.placeholder.com/40"
//                 alt="Fahad"
//                 className="rounded-full w-8 h-8"
//               />
//               Fahad
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useState } from 'react';
import { FaHome, FaSearch, FaBell, FaEnvelope, FaUser, FaEllipsisH, FaTimes, FaPenNib, FaUsers, FaStar } from 'react-icons/fa'; // استيراد الأيقونات

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('لك'); // التحكم بالتبويب النشط

  return (
    <div className="bg-black text-white flex justify-between items-center p-4 w-screen">
      {/* Search Bar */}
      <div className="relative w-full max-w-xs">
        <input
          type="text"
          placeholder="بحث"
          className="bg-gray-800 text-white rounded-full pl-4 pr-10 py-2 w-full"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <FaSearch />
        </span>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-8">
        <button
          className={`relative focus:outline-none ${activeTab === 'لك' ? 'text-white' : 'text-gray-400'}`}
          onClick={() => setActiveTab('لك')}
        >
          لك
          {activeTab === 'لك' && (
            <div className="absolute bottom-[-4px] left-0 right-0 h-1 bg-blue-500"></div>
          )}
        </button>

        <button
          className={`relative focus:outline-none ${activeTab === 'متابعون' ? 'text-white' : 'text-gray-400'}`}
          onClick={() => setActiveTab('متابعون')}
        >
          متابعون
          {activeTab === 'متابعون' && (
            <div className="absolute bottom-[-4px] left-0 right-0 h-1 bg-blue-500"></div>
          )}
        </button>
      </div>

      {/* "X" Icon (باقية كما هي) */}
      <button className="text-white focus:outline-none text-3xl">
        <FaTimes />
      </button>

      {/* Side Menu (Always Visible) */}
      <div
        className="fixed top-0 right-0 w-64 h-full bg-black text-white transform translate-x-0 z-50"
      >
        <div className="p-6">
          {/* Menu Close (X) Icon inside the side menu */}
          <button className="text-white text-2xl mb-8">
            <FaTimes />
          </button>
          {/* Menu Items */}
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <FaHome />
              الرئيسية
            </li>
            <li className="flex items-center gap-2">
              <FaSearch />
              استكشف
            </li>
            <li className="flex items-center gap-2">
              <FaBell />
              التنبيهات
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              الرسائل
            </li>
            <li className="flex items-center gap-2">
              <FaPenNib />
              Grok
            </li>
            <li className="flex items-center gap-2">
              <FaUsers />
              المجتمعات
            </li>
            <li className="flex items-center gap-2">
              <FaStar />
              Premium
            </li>
            <li className="flex items-center gap-2">
              <FaUser />
              الملف الشخصي
            </li>
            <li className="flex items-center gap-2">
              <FaEllipsisH />
              المزيد
            </li>
            <li>
              <button className="bg-blue-500 w-full py-2 rounded-md text-white">
                نشر
              </button>
            </li>
            <li className="flex items-center gap-2">
              <img
                src="https://via.placeholder.com/40"
                alt="Fahad"
                className="rounded-full w-8 h-8"
              />
              Fahad
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

