import { redirect } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function RequireAuth({ children }) {
  //let auth = useAuth();
  //let location = useLocation();
  const auth = {};
  if (!auth.user) {
    return redirect("/cadastro");
  }

  return children;
}
