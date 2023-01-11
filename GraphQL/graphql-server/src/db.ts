export type User = {
    id: number
    name: string
    email: string
    age: number | undefined
}

export let users: User[] = [    
    { id: 1, name: "John Doe", email: "john@gmail.com", age: 22 },    
    { id: 2, name: "Jane Doe", email: "jane@gmail.com", age: 23 }    
];