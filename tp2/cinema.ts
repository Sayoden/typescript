import {myPersons, myMovies} from "./data";

export class Person {
    private static counter: number = 0;
    protected id: number;
    protected firstName: string;
    protected lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = Person.counter++;
    }

    toString(): string {
        return "Prénom: " + this.lastName + " et le nom: " + this.firstName;
    }
}

export class Movie {
    private static counter: number = 0;
    protected id: number;
    protected title: string;
    protected year: number;
    protected audience: number;
    protected actors: Actor[];

    constructor(title: string, year: number, audience: number) {
        this.title = title;
        this.year = year;
        this.audience = audience;
        this.id = Movie.counter++;
        this.actors = [];
    }

    addActor(actor: Actor) {
        this.actors.push(actor);
    }

    toString(complet: boolean = false): string {
        let str = "Id: " + this.id + ", Title: " + this.title + ", Year: " + this.year + ", Audience: " + this.audience;

        if (complet && this.actors.length > 0) {
            this.actors.forEach(actor => str += actor.toString() + ', ');
        }

        return str;
    }

    toHTML(complet : boolean = false) : string {
        let str = '<li>' + this.id + " " + this.title + " " + this.year + " " + this.audience + "</li>";
        if (complet)
        return "<li>" + this.title + "</li>" +
            "<ul>" +
            "</ul>"
    }
}

export class Actor extends Person {
    protected movies: Movie[];

    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
        this.movies = [];
    }

    addMovie(movie: Movie) {
        this.movies.push(movie);
    }

    toString(complet: boolean = false): string {
        let str = super.toString();

        if (!complet) {
            return str;
        }

        if (this.movies.length != 0) {
            str += ' Films: ';
            this.movies.forEach(movie => str += movie.toString() + ", ");
        }

        return str;
    }
}

let x: Person = new Person("Goulois", "Lucas");
let persons: Person[] = [];
let movies: Movie[] = [];
let actors: Actor[] = [];

myPersons.forEach(person => persons.push(new Person(person.firstName, person.lastName)));
myPersons.forEach(person => actors.push(new Actor(person.firstName, person.lastName)));

myMovies.forEach(movieObj => {
   let movie: Movie = new Movie(movieObj.title, movieObj.year, movieObj.audience);
   movieObj.actors.forEach((idActor: number) => {
      movie.addActor(actors[idActor]);
      actors[idActor].addMovie(movie);
   });
   movies.push(movie);
});

console.log(x.toString());
console.log(persons);
console.log(movies);
console.log(actors);


movies.forEach((movie: Movie) => console.log(movie.toString(true)));

