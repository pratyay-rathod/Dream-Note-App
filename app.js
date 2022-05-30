
console.log("welcome to my dream notes app");

let element = document.getElementById("addbtn");

shownotes();

element.addEventListener("click", function (e) {

    let textsTitle = document.getElementById("mynotetitle");

    let textsNotes = document.getElementById("notestext");

    textsNotes.addEventListener("keypress", function pdisplaynone(e) {

        document.getElementById("alert2").style.display = "none";
    })

    textsTitle.addEventListener("keypress", function pdisplaynone(e) {

        document.getElementById("alert").style.display = "none";
    })

    let texts = document.getElementById("notestext").value;

    console.log(texts.length);

    let mytitle = document.getElementById("mynotetitle").value;

    if (texts.length == 0) {

        let ptag = document.createElement("p");

        ptag.className = "palerts";

        ptag.id = "pidalert";

        ptag.setAttribute("style", "color:red");

        let textNode = document.createTextNode("Please Fill Out This Field");

        ptag.appendChild(textNode);

        document.getElementById("alert").appendChild(ptag);

    }

    if (mytitle.length == 0) {

        let ptag = document.createElement("p");

        ptag.className = "palerts";

        ptag.id = "pidalert";

        ptag.setAttribute("style", "color:red");

        let textNode = document.createTextNode("Please Fill Out This Field");

        ptag.appendChild(textNode);

        document.getElementById("alert2").appendChild(ptag);

    }

    if (mytitle.length > 0 && texts.length > 0) {

        document.getElementById("alert").style.display = "none";

        localStorage.setItem(mytitle, texts);

        document.getElementById("notestext").value = "";

        document.getElementById("mynotetitle").value = "";

        shownotes();
    }

})
function shownotes() {

    let values;

    let keys = Object.keys(localStorage);

    let key;

    let html = "";

    if (keys.length == 0) {

        let empty = document.createElement("h5");

        empty.id = "emptynotes";

        let text = document.createTextNode("Nothing to show! Use 'Add a note' section above to add notes");

        empty.appendChild(text);

        empty.setAttribute("style", "color:white;padding-top:20px;")

        let elemNote = document.getElementById("dreamNotes");

        elemNote.appendChild(empty)
    }

    else {
        for (let i = 0; i < keys.length; i++) {

            values = localStorage.getItem(keys[i]);

            key = localStorage.key(i);

            html += `
                        <div class="card-body notes my-3 mx-3" style="border:2px solid yellow;" id="mydreamnote" >
                            <div class="title" style="display:flex;justify-content:space-between;">
                                <h5 class="card-title">${key}</h5>
                                <i class="fa-solid fa-pen-to-square" onclick="edit(${i})"></i>
                            </div>
                            <hr>
                            <p class="card-text">${values}</p>
                            <button onclick="deletenote(${i})" class="btn btn-danger">Delete This Note</button>
                            
                        </div>
                    `;

            let elemNote = document.getElementById("dreamNotes");

            elemNote.innerHTML = html;
        }
    }
}

function deletenote(index) {

    console.log("i am deleting this note");

    let keys = Object.keys(localStorage);

    localStorage.removeItem(keys[index]);

    shownotes()
}

function edit(index) {

    console.log("i will edit your note");

    let keys = Object.keys(localStorage);

    values = localStorage.getItem(keys[index]);

    let key = localStorage.key(index);

    document.getElementById("notestext").value = values;

    document.getElementById("mynotetitle").value = key;

    localStorage.removeItem(keys[index]);

    shownotes()

}




