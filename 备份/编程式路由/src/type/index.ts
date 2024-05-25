export interface PersonInter {
    id: number,
    name: string,
    age: number,
    sex?: string
}
export type Persons = Array<PersonInter>