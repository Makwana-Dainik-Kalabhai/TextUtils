import propTypes from "prop-types";

function Props(props) {
  return (
    <>
      <h1>props.title = {props.title}</h1>
      <h1>props.num = {props.num}</h1>
    </>
  );
}

export default Props;

Props.propTypes = {
  title: propTypes.string,
  num: propTypes.number,
};
