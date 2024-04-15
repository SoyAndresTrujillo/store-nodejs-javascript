const boom = require('@hapi/boom');

const { models } = require('../lib/sequelize');

class CustomerService {
  constructor() {}

  async create(data) {
    const newCustomer = await models.Customer.create(data);
    return newCustomer;
  }

  async find() {
    const customers = await models.Customer.findAll();
    return customers;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('Customer not found');
    }
    return customer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    customer.update(changes);
    return customer;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    customer.destroy();
    return customer;
  }
}

module.exports = CustomerService;
