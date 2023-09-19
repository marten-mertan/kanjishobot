const faunadb = require('faunadb')
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNA_DB_SECRET_KEY
});

export const createUser = async (username, name, lastName) => {
    try {
        return await client.query(
            q.Create(q.Collection('Users'), {
                data: {
                    username: username,
                    firstName: name,
                    lastName: lastName,
                }
            })
        );
    } catch (e) {
        console.error('Error: ' + e);
    }
};

export const getUserByUsername = async (username) => {
    try {
        const user = await client.query(
            q.Get(q.Match(q.Index('username'), username))
        );
        return user.data;
    } catch (e) {
        console.error('Error: ' + e);
    }
};
