import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Publication } from "./pages/Publication";
import { AppRoutes } from "./constants/appRoutes";

export function Router() {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<DefaultLayout />}>
        <Route path={AppRoutes.HOME} element={<Home />} />
        <Route
          path={`${AppRoutes.PUBLICATION}/:id`}
          element={<Publication />}
        />
      </Route>
    </Routes>
  );
}
