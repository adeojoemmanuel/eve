const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
   "coin": String,
   "network":String,
   "xPubKey":String,
   "requestPrivKey":String,
   "requestPubKey":String,
   "copayerId":String,
   "publicKeyRing":[
      {
         "xPubKey":String,
         "requestPubKey":String
      }
   ],
   "walletId":String,
   "walletName":String,
   "m":Number,
   "n":Number,
   "walletPrivKey":String,
   "personalEncryptingKey":String,
   "sharedEncryptingKey":String,
   "copayerName":String,
   "account":Number,
   "addressType":String,
   "version":Number,
   "rootPath":String,
   "keyId":String
});

module.exports = mongoose.model('Note', NoteSchema);
