type User = {
  user_id: number;
  user_name: string;
  email: string;
  role: 'user' | 'admin';
  password: string;
};

type Cat = {
  // TODO: create a cat type
  // owner should be a User or a number
  cat_name: string;
  weight: number;
  owner: number;
  filename: string;
  birthdate: string;
  lat: number;
  lng: number;
};

export {Cat};

export {User};
