import { Deserializable } from './deserialize.model';

export class DataTest implements Deserializable {
  uid?: string;
  title?: string;
  notes?: string;
  programmL?: string;
  date?: string;
  code?: string;
  isPrivate?: boolean;
  userId?: string;
  author?: string;

  constructor() {
    this.uid = null;
    this.title = null;
    this.notes = null;
    this.programmL = null;
    this.date = null;
    this.code = null;
    this.isPrivate = false;
    this.userId = null;
    this.author = null;
  }

  deserialize(obj: DataTest): this {
    Object.assign(this, obj);
    return this;
  }
}
