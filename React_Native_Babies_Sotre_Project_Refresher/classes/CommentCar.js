export default class CommentCar {
  constructor(profileImg, userName, msg) {
    this.profileImg = profileImg;
    this.userName = userName;
    this.msg = msg;
    this.id = Math.random();
  }
}
