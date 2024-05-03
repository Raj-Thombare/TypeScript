"use strict";
// advanced typescript apis
// 1. Pick
// 2. Partial
// 3. Read - only
// 4. Record and Map
// 4. Exclude
// 4. Type inference in zod
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
function updateUser(user1, user2) {
}
updateUser({
    name: 'raj',
    age: 22
}, { name: 'rakaa', age: 23 });
const config = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};
// type Users = Record<string, { age: number, name: string }>
const users = {
    'raj@sad': 23,
    'sadsadad': 34
}; //ugly syntax --> use record
// Initialize an empty Map
const usersMap = new Map();
// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }
const handleEvent = (event) => {
    console.log(`Handling event: ${event}`);
};
handleEvent('click'); // OK
// 6. Type inference in zod
const zod_1 = require("zod");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Define the schema for profile update
const userProfileSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Name cannot be empty" }),
    email: zod_1.z.string().email({ message: "Invalid email format" }),
    age: zod_1.z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});
app.put("/user", (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody = req.body; // how to assign a type to updateBody?
    if (!success) {
        res.status(411).json({});
        return;
    }
    // update database here
    res.json({
        message: "User updated"
    });
});
app.listen(3000);
