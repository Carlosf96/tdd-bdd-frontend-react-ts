export type User = {
  firstName: string,
  lastName: string,
  age: number,
  _id?: string,
}

export const user = () => ({
  firstName: "",
  lastName: "",
  age: 1,
  _id: "",
})