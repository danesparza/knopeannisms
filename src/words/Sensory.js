const Sensorylist = [
    /* Taste */
    "Appetizing",
    "Delicious",
    "Juicy",
    "Palatable",
    "Peppery",
    "Pickled",
    "Ripe",    
    "Savory",    
    "Spicy",
    "Tart",
    "Tasty",    
    "Toothsome",    

    /* Smell */
    "Aromatic",
    "Fragrant",
    "Fruity",
    "Perfumed",

    /* Sight */
    "Beautiful",
    "Brawny",
    "Briny",
    "Clean",
    "Chestnut-haired",
    "Colorful",
    "Crystalline",
    "Cute",
    "Delicate",
    "Dew-flecked",
    "Flaming",
    "Flashy",
    "Floral",
    "Gleaming",
    "Glitter",
    "Glittering",
    "Glowing",
    "Iridescent",    
    "Luminescent",
    "Lustrous",        
    "Misty",        
    "Opalescent",
    "Polished",
    "Polka-dotted",        
    "Radiant",
    "Shimmering",
    "Shiny",    
    "Sparkling",
    "Stupid Hot",
    "Tan",
    "Translucent",
    "Transparent",

    /* Sound */
    "Cooing",
    "Harmonious",
    "Melodic",
    "Melodious",
    "Humming",
    "Moaning",
    "Purring",
    "Resonant",
    "Reverberating",

    /* Touch */
    "Blazing-Hot",
    "Blistering-Hot",
    "Breezy",
    "Contoured",
    "Cuddly",
    "Curved",
    "Feathered",
    "Fluffy",
    "Gooey",
    "Jiggling",
    "Luscious",        
    "Moist",
    "Petite",
    "Quivering",
    "Satiny",
    "Silky",
    "Sizzling",
    "Soft",
    "Tender",
    "Throbbing",
    "Undulating",
    "Vibrant",
    "Vibrating",

    /* Ambient */
    "Elegant",
    "Exquisite",
    "Flexible",
    "Fresh",
    "Graceful",
    "Hot",
    "Lithe",
    "Medicinal",
    "Quaint",
    "Scorching",
    "Sunny",    
    "Statuesque",
    "Sweet",
    "Young",
    "Youthful"    
];

class Sensory {

    getRandomAdjective() {
        let index = Math.floor(Math.random() * (Sensorylist.length)); // The maximum is inclusive and the minimum is inclusive
        return Sensorylist[index].toLowerCase();
    }

}

export default new Sensory();