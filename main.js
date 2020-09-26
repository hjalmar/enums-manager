/*
  Enum
*/
export class Enum extends Number{
  constructor(value, key){
    if(typeof value != 'number' || typeof key != 'string'){
      throw new Error(`Invalid Enumerable arguments`);
    }
    super(value);
    this.key = key;
    this.value = value;
    Object.freeze(this);
  }
}

/*
  EnumerableList

  Usage:
  const types = new EnumerableList('designer', 'programmer', 'webdeveloper');
  console.log(types.get('programmer'));
*/
export class EnumerableList extends Map{
  constructor(...props){
    super();
    props.forEach((key, i) => {
      if(this.has(key)){
        throw new Error(`enum key : '${key}' already exists`);
      }
      if(typeof key !== 'string'){
        throw new Error(`Invalid key. Expecting string, got : [${typeof key}](${key})`);
      }
      const EnumerableItem = new Enum(i+1, key);
      this.set(key, EnumerableItem);
    });
    Object.freeze(this);
  }
}