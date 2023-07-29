console.log("Running javascript");
tit = document.getElementById("title").value;
disc = document.getElementById("disc").value;

function update() {
    tit = document.getElementById("title").value;
    disc = document.getElementById("disc").value;

    if (tit === "" || disc === "") {
        // alert("Please Enter The Value");
    }
    else {
        if (localStorage.getItem("itemsJson") == null) {
            itemJsonArray = [];
            itemJsonArray.push([tit, disc]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
        }
        else {
            itemJsonArrayStr = localStorage.getItem('itemsJson');
            itemJsonArray = JSON.parse(itemJsonArrayStr);
            itemJsonArray.push([tit, disc]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
        }
        main();
    }

}

function main() {
    if (localStorage.getItem("itemsJson") == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }

    let blog = document.getElementById('box1');
    let str = "";
    itemJsonArray.forEach((element) => {
        str+=`
        <div class="blog1 d-flex">
                <div class="blog-content">
                    <p class="bhead text-center">${element[0]}</p>
                    <p class="content-blog">${element[1]}...<a class="read" href="blog.html"><span> Read More</span></a></p>
                </div>
                <div class="blog-img d-flex center">
                    <p class="m-auto ">Image</p>
                </div>
        </div>

        `
    });
    blog.innerHTML=str;
}


submit = document.getElementById("submit");
submit.addEventListener("click",()=>{
    update();
});

