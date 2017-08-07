// import numeral from 'numeral';

// const courseVal = numeral(100).format('$0,0.00');

// /*eslint-disable no-console*/
// console.log(`take this course for a cheap price of ${courseVal}`);


import {getUsers} from './api/userApi';

getUsers().then(result => {
    let usersBody = "";
    result.forEach(user =>{
    usersBody+=`<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
    </tr>`
    });

global.document.getElementById('users').innerHTML = usersBody;
});
