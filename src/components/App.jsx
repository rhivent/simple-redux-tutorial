import React from "react";
import List from "./List";
import Form from "./Form";
import Login from "./Login";
import { connect } from "react-redux";

const App = ({auth}) => {
  const [state,setState] = React.useState({isLoggedIn : false});

  React.useEffect(() => {
    if(auth?.attributes){
      setState(s => {
        // console.log(s); //as value previous useState
        return { ...s,isLoggedIn: true };
      });
    }
  },[auth]);

  return(
  <>
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    {state?.isLoggedIn ? <div>
      <h2>Add a new article</h2>
      <Form />
    </div> : 
      <Login />
    }
  </>
)};

const mapStateToPros = (state) => {
  return state.auth;
}

export default connect(mapStateToPros)(App);