const fs = require('fs');
const { createAdminUser } = require('../templates/User/utils/UserUtils');

const startup = () => {
  const path = './src/data/users.json';
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) return console.error(err);
    if (!data) return console.error('No Data Present');
    const defaultData = JSON.parse(data);
    createDefaultUsers(defaultData);
    removeFile(path);
  });
};

const createDefaultUsers = (defaultData) => {
  defaultData?.users?.forEach((user) => {
    if (!user?.email || !user?.organization || !user?.password || !user?.name)
      return;
    const { name, password, email, organization } = user;
    createAdminUser(name, password, email, organization);
  });
};

const removeFile = (path) => {
  fs.unlink(path, (err) =>
    err ? console.error(err) : console.log('Admin USERS CREATED')
  );
};

module.exports = startup;
