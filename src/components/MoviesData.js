const MoviesData = [
    
    {
        id: 1,
        title: "Rogue One",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
        rating: 5 ,
        teaser: "https://www.youtube.com/watch?v=T6l3mM7AWew&ab_channel=Netflix"
    },  
    {
        id: 2,
        title: "The Godfather",
        description: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        rating: 3,
        teaser: "https://www.youtube.com/watch?v=T6l3mM7AWew&ab_channel=Netflix"
    },  
    {
        id: 3,
        title: "The Dark Knight ",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        rating: 4,
        teaser: "https://www.youtube.com/watch?v=T6l3mM7AWew&ab_channel=Netflix"
    },
    {
        id: 4,
        title: "12 Angry Men",
        description: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        rating: 5,
        teaser: "https://www.youtube.com/watch?v=T6l3mM7AWew&ab_channel=Netflix"
    },
    {
        id: 5,
        title: "Schindler's List",
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300",
        rating: 3,
        teaser: "https://www.youtube.com/watch?v=T6l3mM7AWew&ab_channel=Netflix"
    },
    {
        id: 6,
        title: " Inception",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        rating: 4,
        teaser: "https://www.youtube.com/watch?v=T6l3mM7AWew&ab_channel=Netflix"
    },
    {
        id: 7,
        title: " The Matrix",
        description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg",
        rating: 5,
        teaser: "https://www.youtube.com/watch?v=T6l3mM7AWew&ab_channel=Netflix"
    }, 
    {
        id: 8,
        title: "Rogue One",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
        rating: 1,
        teaser: "https://www.youtube.com/watch?v=T6l3mM7AWew&ab_channel=Netflix"
    },  
    {
        id: 9,
        title: "The Godfather",
        description: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        rating: 3,
        teaser: "https://www.youtube.com/watch?v=T6l3mM7AWew&ab_channel=Netflix"
    },  
    {
        id: 10,
        title: "The Dark Knight ",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        rating: 4,
        teaser: "https://www.youtube.com/watch?v=T6l3mM7AWew&ab_channel=Netflix"
    },
    {
        id: 11,
        title: "12 Angry Men",
        description: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        rating: 5,
        teaser: "https://www.youtube.com/watch?v=T6l3mM7AWew&ab_channel=Netflix"
    },
    {
        id: 12,
        title: "Schindler's List",
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300",
        rating: 3,
        teaser: "https://www.youtube.com/watch?v=T6l3mM7AWew&ab_channel=Netflix"
    },
    {
        id: 13,
        title: " Inception",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        rating: 1,
        teaser: "https://www.youtube.com/watch?v=T6l3mM7AWew&ab_channel=Netflix"
    },
    {
        id: 14,
        title: " The Matrix",
        description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg",
        rating: 2,
        teaser: "https://www.youtube.com/watch?v=T6l3mM7AWew&ab_channel=Netflix"
    }, 

]
export default MoviesData;