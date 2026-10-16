// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Count from "./Count";
export default function About() {
  const navigate = useNavigate();
  return (
    <div>
      <Count />
      <h1>About Page</h1>
      <button onClick={() => navigate("/")}>Go back</button>
    </div>
  );
}
