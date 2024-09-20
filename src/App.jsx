import Test from "components/Test/Test";
import CustomTextFieldContainer from "form-elements/custom-text-field/CustomTextFieldContainer";
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "redux/store";
import ThemeProviderWrapper from "theme/ThemeProviderWrapper";

const Layout2 = React.lazy(() => import("components/Dashboard-2/Layout2"));
const AdminLayout = React.lazy(() =>
  import("components/Admin-Dashboard/AdminLayout")
);
const TransactionLayout = React.lazy(() =>
  import("components/Dashboard-2/Transaction/TransactionLayout")
);
const Auth = React.lazy(() => import("pages/auth/Auth"));
const About = React.lazy(() => import("pages/About"));
const Dashboard = React.lazy(() => import("pages/protected/Dashboard"));
const Loader = React.lazy(() => import("components/loader/Loader"));
const NotFound = React.lazy(() => import("pages/NotFound"));
const AuthLayout = React.lazy(() => import("layouts/AuthLayout"));
const ProtectedLayout = React.lazy(() => import("layouts/ProtectedLayout"));
const UploadFiles = React.lazy(() => import("components/Common/UploadFiles"));
const ButtonSection = React.lazy(() => import("buttons/ButtonContainer"));
const TableSection = React.lazy(() => import("table/tableContainer"));
const AlertsSection = React.lazy(()=>import("alerts/AlertsContainer"))
const AccordionSection = React.lazy(()=> import("accordion/accordionContainer"))
const AvatareSection = React.lazy(()=> import("avatar/AvatarContainer"))
const BadgeSection = React.lazy(()=> import("badge/badgeContainer"))
const ChipSection = React.lazy(()=> import("chips/ChipContainer"))
const ListsSection = React.lazy(()=> import("list/ListContainer"))
const DialogSection = React.lazy(()=> import("dialog/DialogContainer"))
const TextFieldContainer = React.lazy(() =>
  import("form-elements/text-field/TextFieldContainer")
);
const SelectListContainer = React.lazy(() =>
  import("form-elements/select/SelectListContainer")
);

function App() {
  return (
    <Provider store={store}>
      <ThemeProviderWrapper>
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <Routes>
              <Route element={<AuthLayout />}>
                <Route path="/auth" element={<Auth />} />
              </Route>
              <Route element={<ProtectedLayout />}>
                <Route path="/" element={<Dashboard />} />
              </Route>
              <Route path="/about" element={<About />} />
              <Route path="/transaction" element={<Layout2 />} />
              <Route path="/finance" element={<TransactionLayout />} />
              <Route path="/admin" element={<AdminLayout />} />
              <Route path="/uploadFile" element={<UploadFiles />} />
              <Route path="/button" element={<ButtonSection />} />
              <Route path="/table" element={<TableSection />} />
              <Route path="/accordion" element={<AccordionSection />} />
              <Route path="/alert" element={<AlertsSection />} />
              <Route path="/avatar" element={<AvatareSection/>} />
              <Route path="/badge" element={<BadgeSection/>} />
              <Route path="/chip" element={<ChipSection/>} />
              <Route path="/dialog" element={<DialogSection/>} />
              <Route path="/list" element={<ListsSection/>} />
              <Route path="/textField" element={<TextFieldContainer />} />
              <Route
                path="/customTextField"
                element={<CustomTextFieldContainer />}
              />
              <Route
                path="/form-elements/select"
                element={<SelectListContainer />}
              />
              <Route path="/test" element={<Test />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </ThemeProviderWrapper>
    </Provider>
  );
}

export default App;
