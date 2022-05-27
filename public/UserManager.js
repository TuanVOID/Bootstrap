export class UserManager {
    constructor() {
        this._users = [];
    }
    add(user) {
        this._users.push(user);
    }
    showList() {
        let html = '';
        this._users.forEach((user, index) => {
            html += `<tr>`;
            html += `<td>${index + 1}</td>`;
            html += `<td>${user.getName()}</td>`;
            html += `<td>${user.getEmail()}</td>`;
            html += `<td><button value="${index}" class="btn btn-danger delete-user">Delete</button></td>`;
            html += `</tr>`;
        });
        document.getElementById('list-user').innerHTML = html;
    }
    deleteUser(index) {
        this._users.splice(index, 1);
        this.showList();
    }
}
//# sourceMappingURL=UserManager.js.map