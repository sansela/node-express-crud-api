import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => res.send(users);

export const getUser = (req, res) => {
    const uId = req.params.id;
    const user = users.find((user) => user.id === uId);
    res.send(user);
};

export const createUser = (req, res) => {
    const user = req.body;
    users.push({...user, id: uuidv4()});
    res.send(`The user ${user.firstName} created successfully`);
};

export const deleteUser = (req, res) => {
    const uId = req.params.id;
    users = users.filter((user)=> user.id !== uId);
    res.send(`user deleted with the id ${uId}`);
};

export const updateUser = (req, res) => {

    const uId = req.params.id;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id === uId);
    if(firstName) {
        user.firstName = firstName
    };
    if(lastName) {
        user.lastName = lastName;
    };
    if(age) {
        user.age = age;
    };
    users = users.filter((user) => user.id !== uId);
    users.push(user);
    res.send(`The user with first name ${firstName} is updated`);
};
