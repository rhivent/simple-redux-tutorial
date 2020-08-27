import React from "react";
import { connect } from "react-redux";
import { addArticle } from "../redux/list/list.action";

const mapDispatchToProps = (dispatch) => {
  return {
    addToList: article => dispatch(addArticle(article))
  };
}

const ConnectedForm = ({addToList}) => {
  const [state,setState] = React.useState({title : ''});

  const handleChange = event => {
    const { id,value } = event.target;
    setState({...state, [id]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { title } = state;
    addToList({ title });
    setState({ title: "" });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={state.title}
          onChange={handleChange}
        />
      </div>
      <button type="submit">ADD</button>
    </form>
  );
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
