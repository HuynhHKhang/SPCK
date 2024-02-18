document.addEventListener("DOMContentLoaded", function(){
    const blogForm = document.getElementById("blogForm");

    blogForm.addEventListener("submit", function(event){
        event.preventDefault();
        const ImageurlValue = document.getElementById("Image url").value;
        const EnteryourtitleValue = document.getElementById("Enter your title").value;
        const EnteryourauthorValue = document.getElementById("Enter your author").value;
        const PriceValue = document.getElementById("Price").value;

        // console.log(title, content);
        // Gui du lieu vao JSON SERVER
        fetch("http://localhost:3000/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Imageurl: ImageurlValue,
                Enteryourtitle: EnteryourtitleValue,
                Enteryourauthor: EnteryourauthorValue,
                Price : PriceValue,
        

            })
        })
    }); // nhớ add thêm content 
});

const blogList = document.getElementById("blogList");
const url = "http://localhost:3000/blogs"
fetch(url)
.then(function (response){
    return response.json();
})
.then (function (blogs){
    for(let i=0; i<blogs.length; i++){
        const blog = blogs[i];
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${blog.Imageurl}</h3>
            <p>${blog.Enteryourtitle}</p>
            <p>${blog.Enteryourauthor}</p>
            <p>${blog.Price}</p>
           

            
        `
        // nhớ add thêm tag <p> 
        blogList.appendChild(li);
    }
})
