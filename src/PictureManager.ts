import {Picture} from "../public/Picture.js";

export class PictureManager {
    _pictures: Picture[] = [];

    constructor() {
    }

    add(picture: Picture): void {
        this._pictures.push(picture)
        this.showList()
    }

    showList(): void {
        let html: string = '';
        this._pictures.forEach((picture, index) => {
            html += `<tr>`;
            html += `<td>${index + 1}</td>`;
            html += `<td>${picture.getName()}</td>`;
            html += `<td>${picture.getPreview()}</td>`;
            html += `<td>${picture.getPrice()}</td>`;
            html += `<td><button value="${index}" class="btn btn-danger delete-pics">Delete</button></td>`
            html += `<td><button value="${index}" class="btn btn-danger delete-pics">Edit</button></td>`
            html += `</tr>`;
        })
        document.getElementById('list-pics').innerHTML = html;
    }

    deleteUser(index: number): void {
        this._pictures.splice(+index, 1);
        this.showList();
    }

    // updateList(index){
    //     document.getElementById()
    // }

}
