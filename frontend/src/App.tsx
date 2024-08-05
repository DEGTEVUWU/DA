import React from "react";
import { SignupPage } from "./pages/SignupPage";
import { Header } from "./components/Header";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { DocumentsPage } from "./pages/DocumentsPage";
import { routes } from "./routes";
import { I18nextProvider } from "react-i18next";
import i18n from "./locales/i18n";
import { UserDetailsPage } from "./pages/UserDetailsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { UsersPage } from "./pages/UsersPage";
import { DocumentDetailsPage } from "./pages/DocumentDetailsPage";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Provider } from "react-redux";
import store from "./store";
import { ModalComponent } from "./components/ModalComponent/ModalComponent";

const LoggedInRoute = () => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Outlet />;
  }
  return <Navigate to={routes.loginRoute()} />;
};

const LoggedOutRoute = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Outlet />;
  }
  return <Navigate to={routes.documentsRoute()} />;
};

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>  
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <div className="h-screen text-slate-900" >
              <Header />
              <main className="h-[calc(100%-96px)] bg-slate-50 ">
                <Routes>
                  <Route element={<LoggedInRoute />}>
                    
                    <Route path={routes.usersRoute()} element={<UsersPage />} />
                    <Route path='users/:id' element={<UserDetailsPage />} />
                    
                  </Route>
                  <Route path={routes.documentsRoute()} element={<DocumentsPage />} />
                  <Route path='documents/:id' element={<DocumentDetailsPage />} />
                  <Route element={<LoggedOutRoute />}>
                    <Route path={routes.signupRoute()} element={<SignupPage />} />
                    <Route path={routes.loginRoute()} element={<LoginPage />} />
                  </Route>
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <ModalComponent />
              </main>
            </div>
          </BrowserRouter>
        </I18nextProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App