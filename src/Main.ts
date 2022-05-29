import {User} from "../public/User.js";
import {UserManager} from "../public/UserManager.js";

let user = new User('admin', 'admin@gmail.com')
let user1 = new User('admin2', 'admin2@gmail.com')
let user3 = new User('admin3', 'admin3@gmail.com')

let userManager = new UserManager();
userManager.add(user);
userManager.add(user1);
userManager.add(user3);
userManager.showList();


function updateButtonDelete() {
    let deleteUserButtons = document.getElementsByClassName('delete-user');
    for (let i = 0; i < deleteUserButtons.length; i++) {
        deleteUserButtons[i].addEventListener('click',  () => {
            let index = deleteUserButtons[i].getAttribute('value');
            userManager.deleteUser(index);
            // goi lai ham uplodate de cap nhat deleteUserButtons
            updateButtonDelete();
        })

    }
}

updateButtonDelete()


