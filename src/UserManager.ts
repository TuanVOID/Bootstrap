import {User} from "../public/User.js";

export class UserManager {
    _users: User[] = [];

    constructor() {
    }

    add(user: User): void {
        this._users.push(user)
    }

    showList(): void {
        let html: string = '';
        this._users.forEach((user, index) => {
            html += `<tr>`;
            html += `<td>${index + 1}</td>`;
            html += `<td>${user.getName()}</td>`;
            html += `<td>${user.getEmail()}</td>`;
            html += `<td><button value="${index}" class="btn btn-danger delete-user">Delete</button></td>`
            html += `</tr>`;
        })
        document.getElementById('list-user').innerHTML = html;
    }

    deleteUser(index: number): void {
        this._users.splice(index, 1);
        this.showList();
    }
}
