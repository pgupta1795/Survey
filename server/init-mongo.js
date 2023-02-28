#!/bin/bash
const database = '$MONGO_INITDB_DATABASE';
const admin = db.getSiblingDB(database);
admin.auth('$MONGO_INITDB_ROOT_USERNAME', '$MONGO_INITDB_ROOT_PASSWORD');
db.createUser({
  user: 'technia',
  pwd: 'technia',
  roles: [
    {
      role: 'dbOwner',
      db: database,
    },
    {
      role: 'readAnyDatabase',
      db: 'admin',
    },
    'readWrite',
  ],
});
