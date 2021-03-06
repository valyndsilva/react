import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Browse, Signin, Signup, Watch } from "./pages/";
import * as ROUTES from "./routes/routes";
import { IsUserExistsRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();
  // console.log(user);
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path={ROUTES.SIGN_IN} element={<Signin />} /> */}

          <Route
            exact
            path={ROUTES.SIGN_IN}
            element={
              <IsUserExistsRedirect user={user}>
                <Signin />
              </IsUserExistsRedirect>
            }
          />

          {/* <Route exact path={ROUTES.SIGN_UP} element={<Signup />} /> */}

          <Route
            exact
            path={ROUTES.SIGN_UP}
            element={
              <IsUserExistsRedirect user={user}>
                <Signup />
              </IsUserExistsRedirect>
            }
          />

          {/* <Route exact path={ROUTES.BROWSE} element={<Browse />} /> */}

          <Route
            exact
            path={ROUTES.BROWSE}
            element={
              <ProtectedRoute user={user}>
                <Browse />
              </ProtectedRoute>
            }
          />

          {/* <Route exact path={ROUTES.HOME} element={<Home />} /> */}

          <Route
            exact
            path={ROUTES.HOME}
            element={
              <IsUserExistsRedirect user={user}>
                <Home />
              </IsUserExistsRedirect>
            }
          />
          <Route exact path={ROUTES.WATCH} element={<Watch />} />
          {/* <Route path="/search" element={<Search />} /> */}
          <Route exact path={ROUTES.HOME2} element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
