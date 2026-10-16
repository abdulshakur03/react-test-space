import Count from "./Count";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Count />
      <h1>Home Page</h1>
      <button onClick={() => navigate("/about", { replace: true })}>
        Go to About
      </button>
    </div>
  );
}
