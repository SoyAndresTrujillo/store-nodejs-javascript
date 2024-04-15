const { Model, DataTypes, Sequelize } = require('sequelize');
const CUSTOMER_TABLE = 'customer';

const CustomerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field: 'first_name'
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field: 'last_name'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

class Customer extends Model {
  static associate() {
    // models
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false,
    };
  }
}

module.exports = { CUSTOMER_TABLE, CustomerSchema, Customer };
