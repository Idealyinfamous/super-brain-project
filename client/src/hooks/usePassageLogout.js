import { usePassage } from "@passageidentity/passage-react";

export const usePassageLogout = () => {
  const { getCurrentSession } = usePassage();

  const logout = () => {
    console.log("trying to logout")
    try {
      const currentSession = getCurrentSession();
      console.log("current session = ",currentSession)
      if (currentSession) {
        console.log("there's a session")
        currentSession.signOut();
      }
    } catch (err) {
      console.log("Error: ",err)
    }
  };

  return { logout };
};

export default usePassageLogout;