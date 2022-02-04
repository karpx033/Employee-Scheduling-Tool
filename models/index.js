const Calendar = require('./Calendar');
const Employees = require('./Employees');
const User = require('./UserModels');

Calendar.hasMany(Employees, {
  foreignKey: 'calendar_id',
});

Employees.belongsTo(Calendar, {
  foreignKey: 'calendar_id',
});

module.exports = { Calendar, Employees, User };