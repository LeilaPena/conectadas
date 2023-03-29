export type User = {
  avatar: string;
  birthdate: Date;
  city: string;
  country: string;
  email: string;
  friends: string[];
  id: string | undefined;
  lastname: string | undefined;
  name: string | undefined;
  pass: string;
  sessionToken: string | null;
  status: string;
};

export type Post = {
  id: string;
  user: Pick<User, "id" | "name" | "lastname">;
  image?: string;
  title: string;
  detail: string;
  date: Date;
}
export type postFormType = Omit<Post, 'id'>

export type signUpType = Omit<User, "id">;

export type LoginFormType = {
  email: string, 
  pass: string,
}
