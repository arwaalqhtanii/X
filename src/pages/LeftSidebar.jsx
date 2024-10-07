

const LeftSidebar = () => {
  return (

    <div className="w-72 h-screen fixed bg-gray-900 text-white p-7 sm:hidden md:block">
     
      <div className="mb-6">
        <input
          type="text"
          placeholder="بحث"
          className="w-full bg-gray-800 text-white p-2 rounded-full"
        />
      </div>

      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <h2 className="text-lg font-bold">الاشتراك في Premium</h2>
        <p className="text-sm">
          اشترك لاكتشاف ميزات جديدة وفي حال كنت مؤهلًا، ستتسلم حصة من إيرادات الإعلانات.
        </p>
        <button className="bg-blue-500 text-white rounded-full py-2 px-4 mt-4">
          اشترك
        </button>
      </div>

      <div className="bg-gray-800 rounded-lg p-4">
        <h2 className="text-lg font-bold mb-4">ماذا يحدث</h2>
        <div className="mb-4">
          <h3 className="font-bold">Big3 Season 7</h3>
          <p className="text-sm text-gray-400">رياضة • الليلة الماضية</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">الراتب الأساسي</h3>
          <p className="text-sm text-gray-400">المتداول في المملكة العربية السعودية</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">#الصحّه_القابضه</h3>
          <p className="text-sm text-gray-400">صور شعبية • متداول</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">#سلطان_عويد_التمران_حادث</h3>
          <p className="text-sm text-gray-400">المتداول في المملكة العربية السعودية</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">#سلطان_عويد_التمران_حادث</h3>
          <p className="text-sm text-gray-400">المتداول في المملكة العربية السعودية</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
