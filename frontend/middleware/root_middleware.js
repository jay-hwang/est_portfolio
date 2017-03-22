import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import BlogMiddleware from './blog_middleware';
import CommentMiddleware from './comment_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  BlogMiddleware,
  CommentMiddleware
);

export default RootMiddleware;
