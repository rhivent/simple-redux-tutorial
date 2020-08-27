import React from "react";
import { connect } from "react-redux";
import { setAuth } from "../redux/auth/auth.action";
const exampleToken = {
  email : 'qweqwe@mail.com',
  attributes : {
    accessToken : 'ASKDMAKSMDKASMDKAMSDKAMSKDMAS',
    refreshToken : 'uqwieiqowueqowueoiquw',
    accessTokenExp : '2020-08-01',
    refreshTokenExp : '2020-08-01',
  },
  role : 'Super Admin'
};

const Login = ({auth}) => {
  const [state,setState] = React.useState(exampleToken);
  const handleClick = () => {
    auth(state);
  };
  const handleBlur = (e) => {
    const {name,value} = e.target;
    setState({ ...state, [name] : value });
  };

  return (<>
    <input name="username" onBlur={handleBlur} />
    <button onClick={handleClick}>Login</button>
  </>);
};

const mapDispatchToProps = (dispatch) => {
  return {
    auth: params => dispatch(setAuth(params))
  };
}

export default connect(null,mapDispatchToProps)(Login);