type DatabaseField<TDbField> = TDbField extends Array<any>
  ? undefined | TDbField[number] | TDbField[number][]
  : TDbField extends Date
  ? TDbField | string
  : TDbField;

export type DatabaseResult<TDbResult> = {
  [P in keyof TDbResult]: DatabaseField<TDbResult[P]>;
};
export class Entity<TDbResult, T = DatabaseResult<TDbResult>> {
  private attributes: T;
  constructor(attributes: T) {
    this.attributes = { ...attributes };
  }
  get = <K extends keyof T>(attribute: K): T[K] => this.attributes[attribute];
  getAttributes(): T;
  getAttributes<K extends keyof T>(...rest: K[]): Pick<T, K>;
  getAttributes<K extends keyof T>(...rest: K[]): T | Pick<T, K> {
    return rest.length
      ? (rest.reduce((arr, key) => ({ ...arr, [key]: this.attributes[key] }), {}) as Pick<T, K>)
      : { ...this.attributes };
  }
  asJsonResponse = () => JSON.parse(JSON.stringify(this.attributes));
}
