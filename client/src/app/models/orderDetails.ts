export class orderDetails {
  public constructor(
    public id: number,
    public userId: number,
    public cartId: number,
    public total_price: number,
    public city: string,
    public street: string,
    public delivry_date: string,
    public order_date: string
  ) {}
}
