// import { useCookies } from 'react-cookie';
// import { Navigate } from 'react-router-dom';

// export default function ProtectedRoute({ children }) {
//   const [cookies] = useCookies();

//   const isAuthenticated = cookies?.refreshToken?.user?.refreshtoken;

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

import { Navigate } from "react-router-dom";

const protect = "yes";

export default function ProtectedRoute({ children }) {
  if(protect === "no") {
    return <Navigate to="/login" replace />;
  }
  return children;
}


