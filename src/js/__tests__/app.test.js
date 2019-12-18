import findBy from '../app';

test('should key', () => {
  const finder = findBy('type', 'attack');
  const array = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const expected = [{
    name: 'заклинание',
    type: 'attack',
    description: 'Атака магическим заклинанием',
  }];
  const result = array.filter(finder);

  expect(result).toEqual(expected);
});

test('should empty', () => {
  const finder = findBy();
  const array = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const expected = [];
  const result = array.filter(finder);

  expect(result).toEqual(expected);
});
