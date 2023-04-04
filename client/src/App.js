import { GoogleOAuthProvider } from "@react-oauth/google";
import Messengers from "./Components/Messengers";
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId =
    "814444031725-sdotmgpv3ibf25mfitav9bjkdcbdc8u8.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messengers />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
