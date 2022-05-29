import {Picture} from "./Picture.js";
import {PictureManager} from "./PictureManager.js";

let pic_price = document.getElementById("pic-price") as HTMLInputElement;
let pic_name = document.getElementById("pic-name") as HTMLInputElement;
let pic_preview = document.getElementById("pic-preview") as HTMLInputElement;

let pic1 = new Picture('admin', 'admin@gmail.com',1200)
let pic2 = new Picture('admin2', 'admin2@gmail.com',3000)
let pic3 = new Picture('admin3', 'admin3@gmail.com',2500)

let pictureManager = new PictureManager();

pictureManager.add(pic1);
pictureManager.add(pic2);
pictureManager.add(pic3);
pictureManager.showList();



function updateButtonDelete() {
    let deleteUserButtons = document.getElementsByClassName('delete-pics');
    for (let i = 0; i < deleteUserButtons.length; i++) {
        deleteUserButtons[i].addEventListener('click',  () => {
            if (confirm("Sure?")) {
                let index = deleteUserButtons[i].getAttribute('value');
                pictureManager.deleteUser(+index);
                // goi lai ham uplodate de cap nhat deleteUserButtons
                updateButtonDelete();
            }
        })
    }
}

function createNewPic(){
    let newPic = new Picture(pic_name.value, pic_preview.value, +pic_price.value)
    pictureManager.add(newPic);
    clear();
    pictureManager.showList()
    updateButtonDelete()
}
document.getElementById("create").addEventListener('click', createNewPic)

function buttonCreateNewPic(){

}

function clear(){
    pic_name.value = "";
    pic_price.value = "";
    pic_preview.value = "";
}

updateButtonDelete()


