import API from "./api/api";
import "./App.css";

function App() {
  const [userNameInput, setUserNameInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [dataFromServer, setDataFromServer] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const login = async () => {
    if (passInput.length && userNameInput.length) {
      try {
        const { data } = await API.put("login", {
          email: userNameInput,
          password: passInput,
        });
        if (data.result) {
          setIsLogin(true);
          setDataFromServer(data.result.email + " is logged in");
          localStorage.setItem("login_token", data.token);
        } else {
          setDataFromServer("unsuccesful login");
        }
      } catch (err) {
        console.log(err);
      }
    }
    console.log(result);
  };

  const logout = async () => {
    // remove token from user in db
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("login_token")}`,
      },
    };
    try {
      const { data } = await API.put("logout", {}, config);
      // remove token from local storage
      console.log(data);
      setIsLogin(false);
      setDataFromServer(data.email + " is logged out");
      localStorage.removeItem("login_token");
    } catch (err) {
      console.log(err);
    }
  };

  const register = async () => {
    const { data } = await API.post("register", {
      email: userNameInput,
      password: passInput,
    });
    setDataFromServer(JSON.stringify(data));
  };

  const displayUserProfile = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("login_token")}`,
      },
    };
    // send token as authorization
    const { data } = await API.get("id", config);
    setDataFromServer(JSON.stringify(data));
    console.log(data);
  };

  return (
    <>
      <div className="App">
        <input
          value={userNameInput}
          onChange={(e) => {
            setUserNameInput(e.target.value);
          }}
          type="text"
          placeholder="enter username"
        ></input>
        <input
          value={passInput}
          onChange={(e) => {
            setPassInput(e.target.value);
          }}
          type="text"
          placeholder="enter password"
        ></input>
        <button onClick={login}>login</button>
        <button onClick={register}>register</button>
        {isLogin && (
          <>
            <button onClick={displayUserProfile}>show my profile</button>
            <button onClick={logout}>logout</button>
          </>
        )}
      </div>
      <div>{dataFromServer}</div>
    </>
  );
}

export default App;
