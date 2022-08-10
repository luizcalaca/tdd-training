'use strict';

const CreateUser = require('../../application/use_cases/CreateUser');

module.exports = {

  async createUser(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { firstName, lastName, email, password } = request.payload;

    // Treatment
    const user = await CreateUser(firstName, lastName, email, password, serviceLocator);

    // Output
    return serviceLocator.userSerializer.serialize(user);
  },
};
