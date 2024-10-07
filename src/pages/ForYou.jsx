

const ForYou = () => {
    return (
      <div className="grid grid-cols-12 h-screen">

        <div className="col-span-3"></div>
  

        <div className="col-span-12 bg-black text-white p-9">
          <div className="border-b border-gray-700 pb-4">
            <h2 className="text-2xl font-bold">لك</h2>
          </div>
  
          <div className="mt-6">

            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <textarea
                placeholder="ماذا يحدث؟!"
                className="w-full bg-black text-white p-4 rounded-lg resize-none h-32"
              />
              <div className="flex items-center justify-between mt-4">
                <button className="bg-blue-500 text-white rounded-full py-3 px-6">نشر</button>
              </div>
            </div>
  
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <div className="flex items-center">
                <img
                  src="https://pbs.twimg.com/profile_images/1817322973864361984/zkJUgLO8_400x400.jpg"
                  alt="avatar"
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-lg"> | أورشينا</p>
                  <p className="text-sm text-gray-400"></p>
                </div>
              </div>
              <p className="mt-6 text-lg"> الرسمي لكل قطاع عسكري سعودي </p>
              <div className="mt-6">
                <img
                  src="https://pbs.twimg.com/media/Fy1_j_JWcAYzKPp?format=jpg&name=medium"
                  alt="post image"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
  
       
        <div className="col-span-3"></div>
      </div>
    );
  };
  
  export default ForYou;
  