import { ADD_ARTICLE } from './list.constant';

export const addArticle = payload => {
  return { type : ADD_ARTICLE, payload }
};
