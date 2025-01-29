import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/login.tsx"),
    route("dashboard", "routes/dashboard.tsx", [
        index("routes/report.tsx"),
        route("users", "routes/userList.tsx"),
        route("products", "routes/productList.tsx"),
        route("settings", "routes/settings.tsx"),
    ]),

] satisfies RouteConfig;