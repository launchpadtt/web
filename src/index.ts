import { User } from './models/User';
import axios from 'axios';

// console.log('Hi there');

// const user = new User({ name: 'myname', age: 20});

// user.set({name: 'newname'});

// console.log(user.get('name'));
// console.log(user.get('age'));

// user.on('change', () => { 
//   console.log("Change #1");
// });
// user.on('change', () => { 
//   console.log("Change #2");
// });
// user.on('save', () => { 
//   console.log('Save was triggered');
// });

// user.trigger('change');
// user.trigger('save');

// axios.post('http://localhost:3000/users', {
//   name: 'myname',
//   age: 20
// });

// axios.get('http://localhost:3000/users/1');

// const user = new User({ id: 1});

// user.fetch();

// setTimeout(() => {
  // console.log(user);
// }, 4000);

// const user = new User ({ id: 1 });

// user.set({ name: 'NEW NAME', age: 9999 });

// const user = new User ({ name: "new record", age: 0 });

// console.log(user.get('name'));
const user = new User ({ id: 1, name: 'newer name', age: 0 });

user.on('save', () => {
  console.log(user);
})

// user.trigger('change');

// user.set({name: 'New name'});

user.save();

// user.save();

// user.events.on('change', () => {
//   console.log('change!');
// });

// user.events.trigger('change');
