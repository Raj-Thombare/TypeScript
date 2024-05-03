// advanced typescript apis
// 1. Pick
// 2. Partial
// 3. Read - only
// 4. Record and Map
// 4. Exclude
// 4. Type inference in zod

interface UserProps {
    id: number
    name: string,
    age: number,
    password: string
}

// 1. Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).

type updateProps = Pick<UserProps, 'name' | 'age' | 'password'>

// 2. Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.

type updatePropsOptional = Partial<updateProps>

function updateUser(user1: updatePropsOptional, user2: updatePropsOptional) {
}

updateUser({
    name: 'raj',
    age: 22
}, { name: 'rakaa', age: 23 });

// 3. read-only

interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
}

const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

// 4. Record and Map

type UsersAge = {
    [key: string]: number
}

type Users = Record<string, number>
// type Users = Record<string, { age: number, name: string }>

const users: Users = {
    'raj@sad': 23,
    'sadsadad': 34
}  //ugly syntax --> use record

interface User1 {
    id: string;
    name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User1>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }

// 5. Exclude - In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.

type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK

// 6. Type inference in zod

import { z } from 'zod';
import express from "express";
import { only } from 'node:test'

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
    name: z.string().min(1, { message: "Name cannot be empty" }),
    email: z.string().email({ message: "Invalid email format" }),
    age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

export type FinalUserSchema = z.infer<typeof userProfileSchema>

app.put("/user", (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody: FinalUserSchema = req.body; // how to assign a type to updateBody?

    if (!success) {
        res.status(411).json({});
        return
    }
    // update database here
    res.json({
        message: "User updated"
    })
});

app.listen(3000);