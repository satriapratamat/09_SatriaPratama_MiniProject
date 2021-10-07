import { UPDATE_NEWS } from "./actionTypes";

export const updateNews = (news) => {
  return {
    type: UPDATE_NEWS,
    payload: { news },
  };
};
