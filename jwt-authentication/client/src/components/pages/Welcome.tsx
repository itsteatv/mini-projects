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
    <div className="flex items-center justify-center min-h-screen font-IBM text-5xl uppercase">
      Welcome
    </div>
  );
}

export default Welcome;
