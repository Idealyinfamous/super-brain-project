import { PassageAuthGuard } from "@passageidentity/passage-react";
import { usePassageUserInfo } from "../hooks/";
import LogOutButton from "../components/LogOutButton";

function Dashboard() {
  const { userInfo, loading } = usePassageUserInfo();

  if (loading) {
    return (
      <div>
        <div >Loading</div>
      </div>
    );
  }

  return (
    <PassageAuthGuard
      unAuthComp={
        <div>
          <div >you must be logged in</div>
          <div >
            <a href="/">Login</a>
          </div>
        </div>
      }
    >
      <div>
        <div >Welcome</div>
        <div >
          You successfully signed in with Passage. This is your homepage. <br />
          <br />
          Your username is: {userInfo?.email}
        </div>
        <LogOutButton />
      </div>
    </PassageAuthGuard>
  );
}

export default Dashboard;
