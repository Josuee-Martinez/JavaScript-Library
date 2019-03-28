'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    //This goes in the up function
    return queryInterface.bulkInsert('tests', [{
      testdata: 'knight to b3. checkmate.',
      firstName: 'DeepBlue',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

//This goes in the down function
      return queryInterface.bulkDelete('tests', {firstName: 'DeepBlue'});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tests', {firstName: 'DeepBlue'});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
