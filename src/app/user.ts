export interface User {
  id: number;
  name?: string;
  username: string;
  email?: string;
  address?: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo?: {
      lat: number
      lng: number
    }
  };
  phone?: string;
  website?: string;
  company?: {
    name: string
    catchPhrase: string
    bs: string
  };
}

export class User implements User {
  id: number;
  username: string;

  constructor(id: number, username: string) {
    this.id = id;
    this.username = username;
  }
}
