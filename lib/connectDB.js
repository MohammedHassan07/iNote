import * as SQLite from 'expo-sqlite';

let db;

const getDB = async () => {

    if (!db) {

        db = await SQLite.openDatabaseAsync('iNote')
    }

    return db
}
export default getDB