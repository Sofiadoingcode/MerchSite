const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const loginResolver = async (parent, args) => {

    const token = jwt.sign({ test: "hello" }, "hi");
    return { token };
};