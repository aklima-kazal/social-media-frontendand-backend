import { Helmet } from "react-helmet-async";
import FindAccount from "../../components/resetpassword/FindAccount";
import { useState } from "react";
import ResetPassword from "../../components/resetpassword/ResetPassword";
import SecretPassword from "../../components/resetpassword/SecretPassword";
import ChangePassword from "../../components/resetpassword/ChangePassword";

const Forgetpassword = () => {
  const [visible, setVisible] = useState(3);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const renderComponent = () => {
    switch (visible) {
      case 0:
        return (
          <FindAccount
            setLoading={setLoading}
            setError={setError}
            setUser={setUser}
            error={error}
            setVisible={setVisible}
          />
        );
      case 1:
        if (user) {
          return (
            <ResetPassword
              user={user}
              error={error}
              setError={setError}
              setSuccess={setSuccess}
              success={success}
              setVisible={setVisible}
              setLoading={setLoading}
            />
          );
        }
        setVisible(0);
        return null;

      case 2:
        if (user) {
          return (
            <SecretPassword
              user={user}
              error={error}
              setError={setError}
              setSuccess={setSuccess}
              success={success}
              setVisible={setVisible}
              setLoading={setLoading}
            />
          );
        }
        setVisible(0);
        return null;

      case 3:
        if (user) {
          return (
            <ChangePassword
              user={user}
              error={error}
              setError={setError}
              setSuccess={setSuccess}
              success={success}
              setLoading={setLoading}
            />
          );
        }
        setVisible(0);
        return null;

      default:
        return null;
    }
  };
  return (
    <>
      <div>
        <Helmet>
          <title>Forget Password</title>
        </Helmet>
        <div className="h-screen bg-gradient-to-br from-purple-100 to-perple-100 via-cyan-100 flex justify-center items-center">
          {renderComponent()}
        </div>
      </div>
    </>
  );
};

export default Forgetpassword;
