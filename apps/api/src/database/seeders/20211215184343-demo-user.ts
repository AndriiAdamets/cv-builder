module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Andrii',
          lastName: 'Adamets',
          email: 'andrey.adamets@gmail.com',
          password: '123123123',
        },
        {
          firstName: 'Anton',
          lastName: 'Baton',
          email: 'anton.baton@gmail.com',
          password: '234234234',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
