import { useEffect, useState } from "react";
import Spinner from "../ui/Spinner";
import { useUserData } from "../hooks/useUserData";

function Welcome() {
  const { userData, isLoading, error, refetch } = useUserData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      refetch();
    }
    setLoading(false);
  }, [refetch]);

  if (loading) {
    return <Spinner spinnerType="infinity" size="lg" />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {isLoading ? (
        <Spinner spinnerType="infinity" size="lg" />
      ) : (
        <>
          {error ? (
            <p className="animate-text text-center bg-gradient-to-r uppercase from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-errorClamp font-IBM font-extrabold text-transparent">
              Error: {error.message}
            </p>
          ) : (
            <h1 className="animate-text text-center bg-gradient-to-r uppercase from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-5xl text-welcomeClamp font-IBM font-extrabold text-transparent">
              Welcome
              {userData && (
                <div>
                  <p>{userData.email}</p>
                </div>
              )}
            </h1>
          )}
        </>
      )}
    </div>
  );
}

export default Welcome;
