  
import { connect } from 'react-redux';
import { loadLogout } from '../../Infrastructure/Ducks/Auth';
import PrivatePages from './PrivatePages';

const mapStateToProps = (state) => {
  const { auth } = state;

  return {
    logged: auth ? auth.logged : false,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadLogout: () => dispatch(loadLogout()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivatePages);