import * as types from './ActionTypes';
// import * as link from '../api/ApiLink';
// import callApi from '../api/ApiCaller';

//compensatory
// export const increaseAction =(data)=>{ //POST StudenID && Reponse Data from Student ID
//   return dispatch=>{
//       return callApi(link.today_music,'GET', null).then(res=>{
//           console.log("today_music", res);
//           // dispatch(saveCompensatory(res.data));
//       })
//   }
// }
export const increaseAction = (data) => {
  return {
    type: types.INCREMENT,
    step: data
  }
}

export const decreaseAction = (data) => {
  return {
    type: types.DECREMENT,
    step: data
  }
}