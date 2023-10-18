import { PassageAuthGuard } from "@passageidentity/passage-react";
import { usePassageUserInfo } from "../hooks/";
import LogOutButton from "../components/LogOutButton";

function Dashboard() {
  const { userInfo, loading } = usePassageUserInfo();

  if (loading) {
    return (
      <div>
        <div>Loading</div>
      </div>
    );
  }

  return (
    <PassageAuthGuard
      unAuthComp={
        <div>
          <a href="/register-or-login">
            You must log in or create an account to view this page.
          </a>
        </div>
      }
    >
      <div>
        <h1>Your Saved Recipes</h1>
        <div>
          <ul>
            <li>Recipe 1</li>
            <li>Recipe 2</li>
            <li>Recipe 3</li>
            <li>Recipe 4</li>
            <li>Recipe 5</li>
            <li>Recipe 6</li>
          </ul>
        </div>
      </div>
    </PassageAuthGuard>
  );
}

export default Dashboard;
