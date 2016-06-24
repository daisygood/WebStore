  var products = [
  {
    name: "Go Set a Watchman",
    category: "books",
    selling_points: ["Controversial", "Publicity Bonanza", "Released by rapacious publishers against the wishes of senile author"],
    price: 25,
    picture_url: "https://upload.wikimedia.org/wikipedia/en/4/4e/US_cover_of_Go_Set_a_Watchman.jpg"
  },
  {
    
    name: "Twilight",
    category: "books",
    selling_points: ["Doesn't make you think to hard", "Reinforces traditional gender-roles", "Doesn't make you think to hard"],
    price: 9.99,
    picture_url: "http://image.slidesharecdn.com/book-1-twilight-1231022548425199-1/95/book-1-twilight-1-728.jpg"
  }

];
  
    var music = [
  {
    name: "Lemonade",
    category: "music",
    selling_points: ["beyonce","lemonade"],
    price: 10.99,
    picture_url: "https://upload.wikimedia.org/wikipedia/en/5/53/Beyonce_-_Lemonade_(Official_Album_Cover).png"
  },
  {
    
    name: "@ me",
    category: "music",
    selling_points: ["peeweelongway", "very hood"],
    price: 'free',
    picture_url: "http://image.slidesharecdn.com/book-1-twilight-1231022548425199-1/95/book-1-twilight-1-728.jpg"
  }

]
  var addBook = function(obj){
    var html = '<div id="'+products[0].name+ '" class="book product">'
    for(var key in obj){
      if(key !== 'name'){
       html += '<div class="' + key + '">' + obj[key] + '</div>'
      }
    }
    html += '</div>'
    return html
  }
    //var book1html = '<div id="'+products[0].name+ '" class="book product">' + '<div class="+'name">, <div class="category">, <div class="price">
  $('#book1').append(addBook(products[0]));
  $('#book2').append(addBook(products[1]));

  $('#music1').append(addBook(music[0]));
  $('#music2').append(addBook(music[1]));