export default class Product {
  constructor(
    imgUrl,
    title,
    paragraph,
    measure,
    delivery,
    finalPrice,
	comments
  ) {
    this.imgUrl = imgUrl;
    this.title = title;
    this.paragraph = paragraph;
    this.measure = measure;
    this.delivery = delivery;
    this.finalPrice = finalPrice;
    this.comments = comments;
  }
}
