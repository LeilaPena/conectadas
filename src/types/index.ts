export type User = {
  avatar: string;
  birthdate: Date;
  city: string;
  country: string;
  email: string;
  friends: string[];
  id: string;
  lastname: string;
  name: string;
  password: string;
  sessionToken: string;
  status: string;
};

export type signUpType = Omit<User, "id">;