import firebase from "../firebase";

const db = firebase.ref("/parosc");

class DataService {
  getAll() {
    return db;
  }

  update(key, value) {
    return db.child(key).update(value);
  }

}

export default new DataService();