export class Entity<T> {
  private attributes: T;
  constructor(attributes: T) {
    this.attributes = { ...attributes };
  }
}
