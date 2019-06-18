const Nedb = require('nedb');
const db = new Nedb({
  filename: '../res/config.db',
  autoload: true,
  timestampData: true
});

module.exports = class Config {
  constructor() {
  }

  update(interval) {
    return new Promise((resolve, reject) => {
      let doc = {
        interval: interval
      }
      db.insert(doc, (error, newDoc) => {
        if (error) {
          console.log(error);
        }
        resolve();
      });
    });
  }

  get() {
    return new Promise((resolve, reject) => {
      db.find({}).sort({ createdAt: 1 }).exec((error, doc) => {
        if (error) {
          console.log(error);
        }
        resolve(doc);
      });
    });
  }
}