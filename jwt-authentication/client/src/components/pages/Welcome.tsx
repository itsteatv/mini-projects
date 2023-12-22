import { useEffect, useState } from "react";
import { useUserData } from "../hooks/useUserData";
import { useLogout } from "../hooks/useLogout";
import { BiLogOutCircle } from "react-icons/bi";
import Spinner from "../ui/Spinner";

function Welcome() {
  const { userData, isLoading, error, refetch } = useUserData();
  const { logout } = useLogout();
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
            <>
              <h1 className="animate-text text-left bg-gradient-to-r uppercase from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-5xl text-welcomeClamp font-IBM font-extrabold text-transparent">
                <p className="text-sm text-left">Welcome</p>
                {userData && (
                  <div>
                    <p>{userData.email}</p>
                    <p
                      onClick={logout}
                      className="text-sm text-right cursor-pointer"
                    >
                      logout
                    </p>
                  </div>
                )}
              </h1>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Welcome;
