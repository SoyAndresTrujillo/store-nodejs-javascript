const boom = require('@hapi/boom');

const { models } = require('../lib/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const response = await models.User.findAll();
    return response;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    user.update(changes);
    return user;
  }

  async delete(id) {
    const user = await this.findOne(id);
    user.destroy();
    return user;
  }
}

module.exports = UserService;
