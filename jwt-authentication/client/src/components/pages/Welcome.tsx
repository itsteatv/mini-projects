import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../ui/Spinner";

function Welcome() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
    setLoading(false);
  }, [navigate]);

  if (loading) {
    return <Spinner spinnerType="infinity" size="lg" />;
  }

  return (
    <h1 className="flex items-center justify-center min-h-screen animate-text bg-gradient-to-r uppercase from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-5xl text-welcomeClamp font-IBM font-extrabold text-transparent">
      welcome
    </h1>
  );
}

export default Welcome;
