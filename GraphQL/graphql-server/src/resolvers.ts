import { User, users } from "./db";


const resolvers = {    
    Query: {    
        user: (parent, { id }: User, context, info) => {
            return users.find(user => user.id == id)
        } ,
        users: (parent, args, context, info) => {
            return users
        }
    },
    Mutation: {    
        createUser: (parent, { id, name, email, age }: User, context, info) => {    
            const newUser: User = { id, name, email, age };    
            users.push(newUser);    
            return newUser;    
    },   
        updateUser: (parent, { id, name, email, age }: User, context, info) => {    
            let newUser = users.find(user => user.id == id); 
            if( newUser) {
                newUser.name = name;    
                newUser.email = email;    
                newUser.age = age;
            }    
            return newUser;
        },    
        deleteUser: (parent, { id }: User, context, info) => {    
            const userIndex = users.findIndex(user => user.id == id);
    
            if (userIndex === -1) throw new Error("User not found.");
    
            const deletedUsers = users.splice(userIndex, 1);
    
            return deletedUsers[0];     
        }    
    }    
};

export default resolvers;