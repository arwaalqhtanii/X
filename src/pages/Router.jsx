import { Routes, Route, Navigate } from "react-router-dom";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";
import MiddleContent from "./MiddleContent";
import Login from "./Login";
import SignUp from "./SignUp";
import ForYou from "./ForYou";
const AppRouter = ({ isAuthenticated, handleLogout, handleLogin }) => {
  return (
    <Routes>
 
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? (
            <div className="grid grid-cols-12 h-screen">
              <div className="col-span-3">
                <LeftSidebar />
              </div>


              {/* <Route
            path="/foryou"
            element={
              isAuthenticated ? <ForYou /> : <Navigate to="/ForYou" />
            }
          /> */}
               
              <div className="col-span-6">
                <MiddleContent />
              </div>

              {/* <div className="col-span-6">
                <ForYou />
              </div> */}



              <div className="col-span-3">
                <RightSidebar onLogout={handleLogout} />
              </div>
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route path="/login" element={<Login onLogin={handleLogin} />} />

    
      <Route path="/signup" element={<SignUp />} />

      <Route path="/" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default AppRouter;
