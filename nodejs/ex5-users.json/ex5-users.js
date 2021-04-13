const fs = require("fs");

const addUser = (id, name, email) => {
  const users = loadUsers();
  users.push({ id, name, email });
  saveUsers(users);
};

const readUser = (id) => {
  const users = loadUsers();
  console.log(users.find((user) => user.id === id));
};

const updateUser = (newUser) => {
  const users = loadUsers();
  const updateUsers = users.map((user) => {
    if (user.id === newUser.id) return { ...user, ...newUser };
  });

  saveUsers(updateUsers);
};

const deleteUser = (id) => {
  const users = loadUsers();
  let filterUsers = users.filter((user) => user.id !== id);
  saveUsers(filterUsers);
};

const saveUsers = (users) => {
  const dadaJSON = JSON.stringify(users);
  fs.writeFileSync("users.json", dadaJSON);
};

const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = { addUser, readUser, updateUser, deleteUser };
