export const blog_FETCH_START = 'blog/FETCH_START';
export const blog_FETCH_SUCCESS = 'blog/FETCH_SUCCESS';
export const blog_FETCH_FAILED = 'blog/FETCH_FAILED';

export const blog_SELECT_blog = 'blog/SELECT_blog';
export const blog_FETCH_blog_SUCCESS = 'blog/FETCH_blog_SUCCESS';
export const blog_FETCH_blog_FAILED = 'blog/FETCH_blog_FAILED';

// action creators

export const startFetchblog = () => ({
  type: blog_FETCH_START,
});

export const fetchblogSuccess = (blogList, next, prev) => ({
  type: blog_FETCH_SUCCESS,
  payload: {
    blogList,
    next,
    prev,
  }
});

export const fetchblogFailed = (errorMessage) => ({
  type: blog_FETCH_FAILED,
  payload: {
    errorMessage,
  }
});

export const fetchblogInfoSuccess = (currentblog) => ({
  type: blog_FETCH_blog_SUCCESS,
  payload: {
    currentblog
  }
});

export const fetchblogInfoFailed = (errorMessageblog) => ({
  type: blog_FETCH_blog_FAILED,
  payload: {
    errorMessageblog,
  }
});

export const selectblog = (index) => ({
  type: blog_SELECT_blog,
  payload: {
    index,
  }
})

// ========================

const initialState = {
  blogList: [],
  isLoading: false,
  errorMessage: null,
  next: null,
  prev: null,
  isLoadingblog: false,
  errorMessageblog: null,
  currentblog: {},
};

function blogReducer(state = initialState, action) {
  switch(action.type) {
    case blog_FETCH_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case blog_FETCH_SUCCESS: {
      const {
        blogList,
        next,
        prev,
      } = action.payload;
      return {
        ...state,
        blogList,
        next,
        prev,
        isLoading: false,
      }
    }
    case blog_FETCH_FAILED: {
      const { errorMessage } = action.payload;
      return {
        ...state,
        errorMessage,
        isLoading: false,
      }
    }
    case blog_SELECT_blog: {
      const { index } = action.payload;
      return {
        ...state,
        isLoadingblog: true,
      }
    }
    case blog_FETCH_blog_SUCCESS: {
      const { currentblog } = action.payload;
      return {
        ...state,
        currentblog,
        isLoadingblog: false,
      }
    }
    case blog_FETCH_blog_FAILED: {
      const { errorMessageblog } = action.payload;
      return {
        ...state,
        errorMessageblog,
        isLoadingblog: false,
      }
    }
    default: return state;
  }
}

// selector

export const getblogList = (state) => {
  const { blog } = state;
  return blog.blogList;
}

export const getIsLoading = (state) => {
  const { blog } = state;
  return blog.isLoading;
}

export const getErrorMessage = (state) => {
  const { blog } = state;
  return blog.errorMessage;
}

export const getIsLoadingblog = ({ blog }) => blog.isLoadingblog;

export const getCurrentblog = ({ blog }) => blog.currentblog;

export default blogReducer;
