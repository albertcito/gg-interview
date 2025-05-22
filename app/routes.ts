import { type RouteConfig, index, route } from "@react-router/dev/routes";

const routes: RouteConfig = [
  index("routes/home.tsx"),
  route("/contact-form", "routes/contact-form.tsx"),
  route("/school-form", "routes/school-form.tsx"),
];

export default routes;
