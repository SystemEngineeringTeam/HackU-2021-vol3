import { User, getAuth, getIdToken } from "firebase/auth";
import { FC, createContext, useEffect, useState } from "react";
import { firebaseApp } from "../utils/firebase";

type AuthContextProps = {
  currentUser: User | null | undefined;
  currentIdToken: string | null | undefined;
};

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
  currentIdToken: undefined,
});

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );

  const [currentIdToken, setCurrentIdToken] = useState<
    string | null | undefined
  >(undefined);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    // ログイン状態が変化するとfirebaseのauthメソッドを呼び出す
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      if (user != null) {
        getIdToken(user, true).then((idToken) => {
          setCurrentIdToken(idToken);
        });
      }
    });
  }, []);

  /* 下階層のコンポーネントをラップする */
  return (
    <AuthContext.Provider
      value={{ currentUser: currentUser, currentIdToken: currentIdToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
