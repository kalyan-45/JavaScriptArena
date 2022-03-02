const movie = {

    //* DONE: Setter method to set the title and director of the movie
    set : function(title, director) {
        this.title = title;
        this.director = director;
    },

    //Getter method to print the title and director of the movie
    get : function() {
        var print = () => {
            console.log("Title: " + this.title + " Director: " + this.director);
        }
        print();
    }
}

let title = "Inception", director = "Christopher Nolan";
movie.set(title, director);
movie.get();
//Title: Inception Director: Christopher Nolan