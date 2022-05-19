import { User } from './models/User';

console.log('Hi there');

const user = new User({ name: 'myname', age: 20});

user.set({name: 'newname'});

console.log(user.get('name'));
console.log(user.get('age'));

user.on('change', () => { 
  console.log("Change #1");
});
user.on('change', () => { 
  console.log("Change #2");
});
user.on('save', () => { 
  console.log('Save was triggered');
});

user.trigger('change');
user.trigger('save');