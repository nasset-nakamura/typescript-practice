class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  eremoveItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('data1');
textStorage.addItem('data2');
textStorage.eremoveItem('data1');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(100);
numberStorage.addItem(200);
numberStorage.eremoveItem(100);
console.log(numberStorage.getItems());
