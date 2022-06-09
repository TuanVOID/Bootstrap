import {Picture} from "./Picture.js";

export class PictureManager {
    _pictures: Picture[] = [];

    constructor() {
    }

    add(picture: Picture): void {
        this._pictures.push(picture)
        this.showList()
    }

    showList(data = []): void {
        if (data.length == 0){
            data = this._pictures
        }
        console.log(data)

        let html: string = '';
        data.forEach((picture, index) => {
            html += `<tr>`;
            html += `<td>${index + 1}</td>`;
            html += `<td>${picture.getName()}</td>`;
            html += `<td>${picture.getPreview()}</td>`;
            html += `<td>${picture.getPrice()}</td>`;
            html += `<td><button value="${index}" class="btn btn-danger delete-pics">Delete</button></td>`
            html += `<td><button value="${index}" type="button" id="editPicID" class="btn btn-danger edit-pics"  
                        data-bs-toggle="modal" data-bs-target="#editModal">
                        Edit</button></td>`
            html += `</tr>`;
        })
        document.getElementById('list-pics').innerHTML = html;
    }

    deletePic(index: number) {
        this._pictures.splice(index, 1);
        this.showList();
    }

    edit(index){
        (document.getElementById("pic-name-edit") as HTMLInputElement).value = this._pictures[index]._name;
        (document.getElementById("pic-preview-edit") as HTMLInputElement).value = this._pictures[index]._preview;
        (document.getElementById("pic-price-edit") as HTMLInputElement).value = this._pictures[index]._price + '';
        (document.getElementById("index") as HTMLInputElement).value = index;
    }

    searchPic(name:string):void {
        let resut =[]
        for (let i = 0; i < this._pictures.length; i++) {
            if (this._pictures[i]._name == name) {
                resut.push(this._pictures[i])
            }
        }
        this.showList(resut)
    }

}
