import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    ...prefix("profile", [
        index("routes/profile/userinfo.tsx"),
        route("orderList", "routes/profile/orderList.tsx"),
        route("wishList", "routes/profile/wishList.tsx"),
    ])
] satisfies RouteConfig;