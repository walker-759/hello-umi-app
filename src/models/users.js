
export default {

    namespace: 'users',
  
    state: {
        num:0
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        dispatch({type:'add'})
      },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        // yield put({ type: 'save' });
      },
    },
  
    reducers: {
        // 使用immer  之后可以简写reducer  在.umirc里面配置immer
        // 也可以在app.js中配置使用immer  使用哪种都行
        // 就是可以直接给state赋值,可以直接操作state里面的值
      add(state, action) {
        state.num+=1
        // return {num:state.num+1};
      },
    },
  
  };
  