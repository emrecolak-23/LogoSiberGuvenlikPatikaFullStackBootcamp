const users = require('../data/users');

getAllUsers = () => {
  return users
}

getUserById = (id) => {
  return users.filter(x=>x.id==id);
}

module.exports = {getAllUsers,getUserById}