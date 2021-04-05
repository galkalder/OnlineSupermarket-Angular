export class SuccessfulRegisterServerResponse {
  public constructor(
    public userData: {
      id: number;
      name: string;
      lastName: string;
      email: string;
      idNumber: number;
      city: string;
      userType: string;
    },
    public token: string
  ) {}
}
