$(function() {
    var model = {
        cats: [
            {
                name: 'Fluffy',
                clickCount: 0,
                img: "images/cat-0.jpg"
            },
            {
                name: 'Zoinkers',
                clickCount: 0,
                img: "images/cat-1.png"
            },
            {
                name: 'Tammy',
                clickCount: 0,
                img: "images/cat-2.jpg"
            },
            {
                name: 'Krombopulous Michelle',
                clickCount: 0,
                img: "images/cat-3.jpg"
            },
            {
                name: 'Swarley',
                clickCount: 0,
                img: "images/cat-4.jpg"
            }
        ],
        currentCat: 0
    };
    //Squid allows the model and view to communicate with each other.
    var squid = {
        init: function() {
            //Sets the currentCat to be a reference to the cat chosen from the list.
            $('#catList').on('click', function(event) {
                for(var i = 0; i < model.cats.length; i++) {
                    if(event.target.className.includes('cat' + i)) {
                        model.currentCat = model.cats[i];
                    } 
                }
            });
            $('#catPicture').on('click', function(event){
                model.currentCat.clickCount++;
            });
        },
        getName: function() {
            return model.currentCat.name;
        },
        getCount: function() {
            return model.currentCat.clickCount;
        },
        getImg: function() {
            return model.currentCat.img;
        },
    };
    var view = {
        init: function() {
            $('#catList, #catPicture').on('click', view.render);
        },
        render: function() {
            var name = squid.getName();
            var count = squid.getCount();
            var img = squid.getImg;
            $('#catPicture').attr('src', img);
            $('#name').text(name + ': ' + count);   
        }
    };
    
squid.init();
view.init();
});