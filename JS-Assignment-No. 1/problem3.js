let filename = document.getElementById("filename");
let previewimg = document.getElementById("previewimg");
let url


filename.addEventListener("change", function (event) {
    if (event.target.files.length == 0) {
        return;
    }
    url = URL.createObjectURL(event.target.files[0]);

    previewimg.setAttribute("src", url);

});

function generate_card() {

    let namebox = document.getElementById("namebox").value;
    let collegenamebox = document.getElementById("collegenamebox").value;
    let locationbox = document.getElementById("locationbox").value;
    let name1 = document.getElementById("name1").innerHTML;
    let college_name = document.getElementById("college_name").innerHTML;
    let location_name = document.getElementById("location_name").innerHTML;
    let image = document.getElementById("image");


    if (namebox.length == "") {
        alert("Enter the name")
    } else if (collegenamebox.length == "") {
        alert("Enter the college name")
    } else if (locationbox.length == "") {
        alert("Enter the location")
    }

    name1 = namebox;
    college_name = collegenamebox;
    location_name = locationbox;



    document.getElementById("name1").innerHTML = name1;
    document.getElementById("college_name").innerHTML = college_name;
    document.getElementById("location_name").innerHTML = location_name;
    image.setAttribute("src", url);



}