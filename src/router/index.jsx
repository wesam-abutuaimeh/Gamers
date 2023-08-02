import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

export const Router = () => {
    const router = useRoutes(routes);
    return router;
}
