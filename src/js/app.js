export default function findBy(key, name) {
  return function foo(results) {
    if (Object.keys(results).includes(key) && results[key] === name) {
      return results;
    }
    return false;
  };
}

const finder = findBy('type', 'character');
const results = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
].filter(finder);

console.log(results);
