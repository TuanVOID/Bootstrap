import {Picture} from "./Picture.js";
import {PictureManager} from "./PictureManager.js";


let pic_price = document.getElementById("pic-price") as HTMLInputElement;
let pic_name = document.getElementById("pic-name") as HTMLInputElement;
let pic_preview = document.getElementById("pic-preview") as HTMLInputElement;
let search = document.getElementById("pic-search") as HTMLInputElement;
let price_edit = document.getElementById("pic-price-edit") as HTMLInputElement;
let name_edit = document.getElementById("pic-name-edit") as HTMLInputElement;
let preview_edit = document.getElementById("pic-preview-edit") as HTMLInputElement;

let pictureManager = new PictureManager();

function createNewPic() {
    let newPic = new Picture(pic_name.value, pic_preview.value, +pic_price.value)
    pictureManager.add(newPic);
    clear();
    // pictureManager.showList()
    updateButtonDelete()
    updateEditPicture();
}

document.getElementById("create").addEventListener('click', createNewPic)

function updateButtonDelete() {
    let deleteUserButtons = document.getElementsByClassName('delete-pics');
    for (let i = 0; i < deleteUserButtons.length; i++) {
        deleteUserButtons[i].addEventListener('click', () => {
            if (confirm("Sure?")) {
                let index = deleteUserButtons[i].getAttribute('value');
                pictureManager.deletePic(+index);
                // goi lai ham uplodate de cap nhat deleteUserButtons
                updateButtonDelete();
                updateEditPicture();
            }
        })
    }
}

updateButtonDelete()

function updateEditPicture() {
    let index;
    let editPics = document.getElementsByClassName("edit-pics")
    for (let i = 0; i < editPics.length; i++) {
        editPics[i].addEventListener("click", () => {
            index = +editPics[i].getAttribute("value")
            pictureManager.edit(index);
            updateEditPicture();
            updateButtonDelete()
        })
    }
    document.getElementById("editOk").addEventListener("click", function () {
        pictureManager._pictures[index]._name = name_edit.value;
        pictureManager._pictures[index]._preview = preview_edit.value;
        pictureManager._pictures[index]._price = +price_edit.value;
        pictureManager.showList()
        updateEditPicture();
        updateButtonDelete()
    })
}

let editButton = document.getElementById("editPicID")
if (editButton) {
    document.getElementById("editPicID").addEventListener("click", updateEditPicture)
}

function updateSearchButton(){
    let textinput = search.value
    if (textinput){
        pictureManager.searchPic(textinput)
    } else {
        pictureManager.showList()
    }
    updateEditPicture();
    updateButtonDelete();
}

document.getElementById("btn-search").addEventListener("click", updateSearchButton)
updateButtonDelete()

function clear() {
    pic_name.value = "";
    pic_price.value = "";
    pic_preview.value = "";
}




