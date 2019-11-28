module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'students',
      [
        {
          name: 'ALAN CRISTIAN SILVA DE OLIVEIRA',
          matriculation: '427591',
          password_hash:
            '$2b$08$C9x5kwY5MLsc/hBmc7oDruYFkUjiVDjpnwldBEeI2gs1uffFk6tV6',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('students', null, {});
  }
};
