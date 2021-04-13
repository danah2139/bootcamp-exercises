const yargs = require("yargs");
let uniqid = require("uniqid");
const users = require("./ex5-users");

yargs.command({
  command: "create",
  describe: "create user",
  builder: {
    name: {
      describe: "name",
      demandOptions: true,
      type: "string",
    },
    email: {
      describe: "email",
      demandOptions: true,
      type: "string",
    },
  },
  handler(argv) {
    users.addUser(uniqid(), argv.name, argv.email);
  },
});

yargs.command({
  command: "update",
  describe: "update user",
  builder: {
    id: {
      describe: "id",
      demandOptions: true,
      type: "string",
    },
    name: {
      describe: "name",
      type: "string",
    },
    email: {
      describe: "email",
      type: "string",
    },
  },
  handler(argv) {
    let { id, email, name } = argv;
    let user = { id };
    if (email) user["email"] = email;
    if (name) user["name"] = name;
    console.log(user);
    users.updateUser(user);
  },
});

yargs.command({
  command: "read",
  describe: "read user",
  builder: {
    id: {
      describe: "id",
      demandOptions: true,
      type: "string",
    },
  },
  handler(argv) {
    users.readUser(argv.id);
  },
});

yargs.command({
  command: "delete",
  describe: "delete user",
  builder: {
    id: {
      describe: "id",
      demandOptions: true,
      type: "string",
    },
  },
  handler(argv) {
    users.deleteUser(argv.id);
  },
});

yargs.parse();
