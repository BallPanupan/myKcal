import { useGlobalState } from "../GlobalContext/GlobalContext";

function useShareHelper() {
  const { setAuthorizationToken, setLoggedIn } = useGlobalState();

  async function fetchProfile(authToken: string) {
    try {
      const result = await fetch("http://localhost:3000/api/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
        },
      });
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
      const data = await result.json();
      console.log('--> check the token', data);
      setAuthorizationToken(authToken);
      setLoggedIn(true);
      return data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      return false;
    }
  }
  return { fetchProfile };
}

export default useShareHelper;
