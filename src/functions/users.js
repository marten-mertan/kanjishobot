import faunadb from 'faunadb';
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

//
// Return user object
// user.data - object Data
// user.ref - object Ref
//
export const getUser = async (username) => {
    try {
        const user = await client.query(
            q.Get(q.Match(q.Index('username'), username))
        );
        return user;
    } catch (e) {
        console.error('Error: ' + e);
    }
};

export const updateUser = async (username, name, lastName) => {
    try {
        const user = await getUser(username);
        return await client.query(
            q.Update(user?.ref, {
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

export const deleteUser = async (username) => {
    const user = await getUser(username);
    try {
        return await client.query(
            q.Delete(user?.ref)
        );
    } catch (e) {
        console.error('Error: ' + e);
    }
};