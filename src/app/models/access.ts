export class User {
    tokenType: string;
    accessToken: string;

    constructor(user, password) {
      this.tokenType = user;
      this.accessToken = password;
    }
}
