import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./components/Layout";
import MainPageContainer from "./containers/MainPageContainer";
import { store } from "./store/store";
import ProductPageContainer from "./containers/ProductPageContainer";
import CategoriesPageConainer from "./containers/categoriesPageContainer/CategoriesPageConainer";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPageContainer />} />
            <Route path="/product/:id" element={<ProductPageContainer />} />
            <Route path="/categories/:id" element={<CategoriesPageConainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
