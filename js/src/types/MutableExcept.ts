type MutableExcept<T, K extends keyof T> = Readonly<T> & {
  -readonly [P in K]: T[P];
};

interface User {
  id: string;
  name: string;
  email: string;
}

const user: MutableExcept<User, "email" | "name"> = {
  id: "1",
  name: "ss",
  email: "dscs",
};

user.name = "eeer";
