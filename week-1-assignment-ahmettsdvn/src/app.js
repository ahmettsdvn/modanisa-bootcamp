import "./styles.css";
import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    const data = response.data;
    console.log("Response ==> ", response);
    // Firstly, log response to the console,

    console.log("Data ==> ", response.data)
    // inspect the response and see that it has data field

    const {name : urun_adi, id: urun_id, image: urun_resim, description: urun_aciklama} = data[0];
    console.log("Alias ürün adı, ürün id, ürün açıklama, ürün resim =>",urun_id, urun_adi, urun_aciklama, urun_resim)
    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
    const products = null;

    console.log("----------------------------------ÜRÜN ADLARI-----------------------------------------")
    data.forEach((element) =>{
      console.log(element.name)
    });

    //yada

    console.log(data.map(i=> i.name))

    // Print names of all product to the console
    // by calling foreach  method (use arrow function)

    console.log("----------------------------------ŞAL İÇEREN-----------------------------------------")
    data.forEach((element, index) =>{
      if(element.name.includes('Şal')){
        console.log(element.name)
      }
    });

    console.log("----------------------------------Name and Image-----------------------------------------")
    let _mapped = [];
    console.log(data.map(i=> {
      _mapped.push({image: i.image, name:i.name});
      return _mapped;
    }))

    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable
    const mappedProducts = _mapped;
    console.log("mappedProducts =>",mappedProducts);//mappedProducts fields

    //add item to DOM Element
    var list = "<ul class='list_ul'>";
    mappedProducts.forEach((elem) =>{
      list += "<li><span>"+elem.name+"</span>"+"<a title='"+elem.name+"' href='"+elem.image+"'><img src='"+elem.image+"'/></a>"+"</li>";
      return elem;
    });
    list+='</ul>';
    document.getElementById("list_container").innerHTML = list;

    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish
  });

