import { connect } from 'react-redux';
import SubscriptionForm from './subscription_form';
import { createSubcription } from '../../actions/subscription_actions';

const mapStateToProps = state => ({
  subscriptionErrors: state.subscriptions.errors
});

const mapDispatchToProps = dispatch => ({
  createSubcription: data => dispatch(createSubcription(data))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SubscriptionForm);
