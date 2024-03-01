import { SessionOptions } from "iron-session"

export interface SessionData {
  pid: string
  name: string
  name_en: string
  birthdate: string
  address: string
  isLoggedIn: boolean
}

export const defaultSession: SessionData = {
  pid: "",
  name: "",
  name_en: "",
  birthdate: "",
  address: "",
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: "R9h2wwmbzN2wdhpy7v3ZNKYjjVCyWwUx",
  cookieName: "user_infos",
  cookieOptions: {
    secure: false,
  },
};