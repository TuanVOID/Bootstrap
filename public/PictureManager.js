export class PictureManager {
    constructor() {
        this._pictures = [];
    }
    add(picture) {
        this._pictures.push(picture);
        this.showList();
    }
    showList() {
        let html = '';
        this._pictures.forEach((picture, index) => {
            html += `<tr>`;
            html += `<td>${index + 1}</td>`;
            html += `<td>${picture.getName()}</td>`;
            html += `<td>${picture.getPreview()}</td>`;
            html += `<td>${picture.getPrice()}</td>`;
            html += `<td><button value="${index}" class="btn btn-danger delete-pics">Delete</button></td>`;
            html += `<td><button value="${index}" class="btn btn-danger delete-pics">Edit</button></td>`;
            html += `</tr>`;
        });
        document.getElementById('list-pics').innerHTML = html;
    }
    deleteUser(index) {
        this._pictures.splice(+index, 1);
        this.showList();
    }
}
//# sourceMappingURL=PictureManager.js.map