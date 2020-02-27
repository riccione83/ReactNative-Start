import { createSelector } from "reselect";
import { takeEvery, put, call, all } from "redux-saga/effects";
import { getData } from "../../services/sample";

const moduleName = "homeModule";

export const ADD_ARTICLE = "ADD_ARTICLE";

export interface AddArticleAction {
  type: typeof ADD_ARTICLE;
  payload: {
    article: string;
  };
}
export const addArticle = (
  article: AddArticleAction["payload"]["article"]
): AddArticleAction => ({
  type: ADD_ARTICLE,
  payload: {
    article
  }
});

interface State {
  articles: string[];
}

const initialState = {
  articles: []
};

type Action = AddArticleAction;

export const getState = (state: any): State =>
  state[moduleName] || initialState;

export const getArticles = createSelector(getState, state => state.articles);

function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload.article]
      };
    default:
      return state;
  }
}

export const loadHistorySaga = takeEvery(ADD_ARTICLE, function*({
  payload
}: AddArticleAction) {
  const data = getData();
  console.log(data);
});

export function* HomeSagas() {
  yield all([loadHistorySaga]);
}

export default reducer;
