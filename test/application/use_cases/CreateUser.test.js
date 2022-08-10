const User = require('../../../src/domain/User');
const UserRepository = require('../../../src/domain/UserRepository');
const mockUserRepository = new UserRepository();
const CreateUser = require('../../../src/application/use_cases/CreateUser');

test('BDD - should resolve with the newly persisted user', async () => {
  // given - arrange
  const persistedUser = new User(123, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD');
  mockUserRepository.persist = jest.fn(() => persistedUser);

  // when - act
  const user = await CreateUser('John', 'Doe', 'john.doe@email.com', 'P@s$W0rD', { userRepository: mockUserRepository });

  // then - assert
  expect(mockUserRepository.persist).toHaveBeenCalledWith(new User(null, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD'));
  expect(user).toEqual(persistedUser);
});
