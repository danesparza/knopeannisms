const Nounlist = [    
    /* Animal / insect */
    "alpaca",
    "antelope",    
    "armadillo",    
    "badger",
    "bat",    
    "beaver",
    "bee",
    "buffalo",    
    "butterfly",
    "camel",
    "caribou",
    "cat",
    "cheetah",
    "chimpanzee",
    "chinchilla",
    "coyote",    
    "deer",
    "dolphin",
    "donkey",
    "duck",
    "elk",
    "ferret",
    "fox",
    "giraffe",
    "goldfish",
    "gorilla keeper",
    "grasshopper",
    "grey wolf",
    "guinea pig",
    "hedgehog",
    "horse",
    "jellyfish",
    "kangaroo",
    "koala",
    "land-mermaid",
    "leopard",    
    "lion",
    "llama",
    "macaw",
    "mallard",
    "manatee",
    "mannequin come to life",
    "mink",
    "moth",
    "muskox",
    "otter",
    "crime fighting oyster",
    "panda",
    "pig",
    "platypus",    
    "porcupine",
    "porpoise",
    "prairie dog",
    "super pig",
    "rabbit",
    "raccoon",
    "reindeer",    
    "salmon",
    "sardine",
    "sea",
    "seal",    
    "shark",
    "space lion",
    "space unicorn",
    "spinster",
    "squirrel",
    "super pig",
    "sunflower",
    "sunfish",
    "sunken treasure",
    "sun goddess",
    "swan",    
    "tiger",
    "tortoise",
    "tree shark",
    "tropical fish",
    "trout detective",
    "turtle wrangler",    
    "wallaby",
    "wild pig",
    "wolf",
    "wombat",
    "zebra",

    /* Flower / plant */
    "apple blossom",
    "buttercup",
    "daisy",
    "lilac",
    "lily",
    "orchid",
    "orange blossom",
    "poppy",
    "rose",
    "sacred lotus",
    "sweet pea",
    "tulip",

    /* Occupation / role */
    "alligator chaser",
    "bear herder",
    "fixer-of-things",
    "nerd herder",
    "newborn baby",
    "nurse",
    "shakespearean actor",
    "underwear model",

    /* Space, the final frontier */
    "supernova"    
];

class Nouns {

    getRandomNoun() {
        let index = Math.floor(Math.random() * (Nounlist.length)); // The maximum is inclusive and the minimum is inclusive
        return Nounlist[index].toLowerCase();
    }
}

export default new Nouns();