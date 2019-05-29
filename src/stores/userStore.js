import { observable, action } from 'mobx';
import * as authApi from 'api/auth';

class userStore {
  @observable token
  @observable username
  @observable description

  constructor() {
    this.token = localStorage['thiscode-token']
    this.setUserProfile();
  }

  
  @action.bound
  Login(){
    this.token = localStorage['thiscode-token'];
    this.setUserProfile();
  }

  setUserProfile() {
    const { token } = this
    authApi.checkStatus({ token })
    .then((result) => {
      console.log('store 인증 성공');
      console.log(result)
      this.username = result.data.username;
      this.description = result.data.description;
    })
    .catch((result) => {
        console.log(result);
        console.log('store 인증 실패');
        this.username = null;
        this.description = null;
    });
  }
}

export default userStore;