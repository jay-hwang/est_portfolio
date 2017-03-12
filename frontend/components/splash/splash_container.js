import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = state => ({
  blogs: state.blogs.index
});

const mapDispatchToProps = () => ({

});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Splash);
