export class BookModel {
  constructor(_id: Number, _name: string, _type: string, _content: string, _price: Number) {
        this.ID = _id;
        this.Name = _name;
        this.Type = _type;
        this.Content = _content;
        this.Price = _price;
  }
  ID: Number;
  Name: string;
  Type: string;
  Content: string;
  Price: Number;
  setGroup() {
    return { "Type": this.Type, 
             "Info":[{ "ID":"", "Name": this.Name, "Price": this.Price }]};
  }

}
