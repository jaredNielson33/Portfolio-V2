import PropTypes from "prop-types";
const Preloader = ({load}) => {
  return <div id={load ? "preloader" : "preloader-none"}></div>;
}

Preloader.propTypes = {
  load: PropTypes.bool.isRequired,
};

export default Preloader;
