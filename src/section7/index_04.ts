function Log(target: any, propertyName: string | symbol) {
  console.log('--- Propertyデコレータ ---');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('--- Accessorデコレータ ---');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string | symbol, descriptor: PropertyDecorator) {
  console.log('--- Methodデコレータ ---');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | symbol, position: number) {
  console.log('--- Parameterデコレータ ---');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('不正な価格です - 0以下は設定できません');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTas(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
