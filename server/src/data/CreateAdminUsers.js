const fs = require('fs');
const { createAdminUser } = require('../templates/User/utils/UserUtils');

var startup = () => {
  const path = './src/data/users.json';
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) return console.error(err);
    if (!data) return console.error('No Data Present');
    const usersConf = JSON.parse(data);
    usersConf?.users?.forEach((user) => {
      if (!user?.email || !user?.organization || !user?.password || !user?.name)
        return;
      const { name, password, email, organization } = user;
      createAdminUser(name, password, email, organization);
    });
    deleteUsers(path);
  });
};

var deleteUsers = (path) => {
  fs.unlink(path, (err) =>
    err ? console.error(err) : console.log('Admin USERS CREATED')
  );
};

module.exports = startup;
