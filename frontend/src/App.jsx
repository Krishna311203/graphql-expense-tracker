import { Navigate, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Header from "./components/ui/Header";
import TransactionPage from "./pages/TransactionPage";
import NotFound from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";




function App() {
  // const { loading, data } = useQuery(GET_AUTHENTICATED_USER);

  // if (loading) return null;
  const authUser = true;
  return (
    <>
      {authUser && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/transaction/:id" element={<TransactionPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Toaster /> */}
    </>
  );
}

export default App;
