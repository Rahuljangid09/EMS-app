import React, { useContext, useEffect } from "react";
import { EmployeeDashboard } from "./components/Dashboard/EmployeeDashboard";
import Login from "./components/Auth/Login";
import { useState } from "react";
import Admindashboard from "./components/Dashboard/Admindashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
import { data } from "autoprefixer";

const App = () => {
  
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext);
  console.log(userData);

  useEffect(() => {
    const loggedInUser=localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])
  

  const handleLogin = (email, password) => {
    if (email == "admin@gmail.com" && password == 123) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employees = userData.find(
        (e) => email == e.email && password == e.password
      );
      if (employees) {
        setUser("employees");
        setLoggedInUserData(employees)
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employees" , data:employees })
        );
      }
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <Admindashboard changeUser={setUser} /> : (user=="employees"?<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>:null)}
    </>
  );
};

export default App;
