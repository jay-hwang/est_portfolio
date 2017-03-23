import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BlogReducer from './blog_reducer';
import CommentReducer from './comment_reducer';
import TagReducer from './tag_reducer';
import TaggingReducer from './tagging_reducer';
import SubscriptionReducer from './subscription_reducer';

const RootReducer = combineReducers({
  session:       SessionReducer,
  blogs:         BlogReducer,
  comments:      CommentReducer,
  taggings:      TaggingReducer,
  tags:          TagReducer,
  subscriptions: SubscriptionReducer
});

export default RootReducer;
