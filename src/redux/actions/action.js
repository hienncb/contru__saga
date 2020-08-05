import * as types from './ActionTypes';
import * as link from '../api/ApiLink';
import callApi from '../api/ApiCaller';

//compensatory
export const responseTodayMusic=(data)=>{ //POST StudenID && Reponse Data from Student ID
  return dispatch=>{
      return callApi(link.today_music,'GET', null).then(res=>{
          console.log("today_music", res);
          // dispatch(saveCompensatory(res.data));
      })
  }
}
export const saveTodayMusic = (data) => {
  return {
    type: types.LOADING_TODAY_MUSIC,
    payload: data
  }
}