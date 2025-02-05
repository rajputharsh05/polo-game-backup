import { Route, Routes } from "react-router-dom";
import { globalRoutes } from "./Routes";
import GlobalLayout from "../Layouts/GlobalLayout"

const GlobalRouter = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout></GlobalLayout>}>
        {globalRoutes.map(({ path, element }) => (
          <Route path={path} element={<>{element}</>} key={path} />
        ))}
      </Route>
    </Routes>
  );
};

export default GlobalRouter;
