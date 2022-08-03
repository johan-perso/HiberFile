import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  name: 'account',
  stateFactory: true,
  namespaced: true
})
export default class Account extends VuexModule {
  loggedIn = false;
  email: string | null = null;
  userId: string | null = null;
  token: string | null = null;

  @Mutation
  logIn(options: { email: string; userId: string; token: string }) {
    this.loggedIn = true;
    this.email = options.email;
    this.userId = options.userId;
    this.token = options.token;

    sessionStorage.setItem('token', options.token);
    sessionStorage.setItem('userId', options.userId);
    sessionStorage.setItem('email', options.email);
  }

  @Mutation
  logInLocalStorage() {
    if (
      sessionStorage.getItem('email') &&
      sessionStorage.getItem('userId') &&
      sessionStorage.getItem('token')
    ) {
      this.loggedIn = true;
      this.email = sessionStorage.getItem('email');
      this.userId = sessionStorage.getItem('userId');
      this.token = sessionStorage.getItem('token');
    }
  }

  @Mutation
  logOut() {
    this.loggedIn = false;
    this.email = null;
    this.userId = null;
    this.token = null;

    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('email');
  }
}
