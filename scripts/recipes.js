const drinkRecipes = {
  "Adonis": {
    ingredients: ["Sherry", "Sweet Vermouth", "Orange Bitters"],
    instructions: "Take 1 1/2 oz sweet vermouth and 1 1/2 oz sherry.  Add in mixing glass with ice and stir.  Pour into coupe glass, add a few dashes of orange bitters, and garnish with an orange peel.",
    garnishes: ["Orange Peel"],
    glass: "Coupe Glass"
  },
  "Agavoni": {
    ingredients: ["Tequila", "Sweet Vermouth", "Campari", "Orange Bitters"],
    instructions: "Stir 3/4 oz tequila, 3/4 oz sweet vermouth, and 3/4 oz Campari with ice. Add a few dashes of orange bitters and garnish with an orange peel.", 
    garnishes: ["Orange Peel"],
    glass: "Delmonico Glass"
  },
  "Aperol Spritz": {
    ingredients: ["Aperol", "Prosecco", "Soda Water"],
    instructions: "Pour 3 oz of Aperol and 2 oz of Prosecco into a wine glass with ice, top with 1 oz of Soda Water and garnish with an orange slice.",
    garnishes: ["Orange Slice"],
    glass: "Wine Glass"
  },
  "Americano": {
    ingredients: ["Campari", "Sweet Vermouth", "Soda Water"],
    instructions: "Pour 1 1/2 oz Campari and 1 1/2 oz sweet vermouth in a highball glass over ice, top with soda water, and garnish with an orange peel.",
    garnishes: ["Orange Peel"],
    glass: "Highball Glass"
  },
  "Aviation": {
    ingredients: ["Gin", "Maraschino Liqueur", "Crème de Violette", "Lemon Juice"],
    instructions: "Shake 2 oz Gin, 1/2 oz maraschino liqueur, 1/4 oz crème de violette, and 3/4 oz lemon juice with ice. Strain into a cocktail glass and garnish with a cherry.",
    garnishes: ["Cherry"],
    glass: "Cocktail Glass"
  },
  "Bees Knees": {
    ingredients: ["Gin", "Lemon Juice", "Honey Syrup"],
    instructions: "Shake 2 oz gin, 3/4 oz lemon juice, and 1/2 oz honey syrup with ice. Strain into a cocktail glass. Garnish with a lemon twist.",
    garnishes: ["Lemon Twist"],
    glass: "Cocktail Glass"
  },
  "Bellini": {
    ingredients: ["Prosecco", "Peach Purée"],
    instructions: "Pour 2 oz peach purée into a flute glass and top with 4 oz of Prosecco. Stir gently.",
    glass: "Flute Glass"
  },
  "Blackberry Bramble": {
    ingredients: ["Gin", "Lemon Juice", "Simple Syrup", "Blackberry Liqueur"],
    instructions: "Shake 1 1/2 oz gin, 3/4 oz lemon juice, and 1/2 oz of simple syrup, and 3/4 oz blackberry liqueur with ice. Strain into a cocktail glass filled with crushed ice and garnish with lemon slice and blackberries.",
    garnishes: ["Lemon Slice", "Blackberries"],
    glass: "Cocktail Glass"
  },
  "Bloody Mary": {
    ingredients: ["Vodka", "Tomato Juice", "Lemon Juice"],
    instructions: "Shake vodka, tomato juice, lemon juice, with salt and pepper with ice. Strain into a highball glass and garnish with a celery stick and lemon wedge.",
    garnishes: ["Celery Stick", "Lemon Wedge", "Salt", "Pepper"],
    glass: "Highball Glass"
  },
  "Boulevardier": {
    ingredients: ["Bourbon", "Vermouth", "Campari"],
    instructions: "Stir 1 1/2 oz bourbon, 1 oz sweet vermouth, and 1 oz Campari with ice. Strain into a rocks glass and garnish with an orange peel.", 
    garnishes: ["Orange Peel"],
    glass: "Rocks Glass"
  },
  "Bourbon and Coke": {
    ingredients: ["Bourbon", "Cola"],
    instructions: "Pour 2 oz bourbon over ice in a glass and top with 4 oz cola. Stir gently and garnish with a lime wedge.",
    garnishes: ["Lime Wedge"],
    glass: "Highball Glass"
  },
  "Bourbon and Ginger": {
    ingredients: ["Bourbon", "Ginger Ale"],
    instructions: "Pour 2 oz bourbon over ice and top with 4 oz ginger ale. Stir gently and garnish with a lime wedge.",
    garnishes: ["Lime Wedge"],
    glass: "Highball Glass"
  },
  "Bourbon and Tonic": {
    ingredients: ["Bourbon", "Tonic Water"],
    instructions: "Pour 2 oz bourbon over ice and top with 4 oz tonic water. Stir gently and garnish with a lime wedge.",
    garnishes: ["Lime Wedge"],
    glass: "Highball Glass"
  },
  "Bourbon Cider": {
    ingredients: ["Bourbon", "Apple Cider", "Lemon Juice"],
    instructions: "Pour 2 oz bourbon over ice and top with 3 oz apple cider. Add 1 teaspoon of lemon juice. Stir gently and garnish with a cinnamon stick.",
    garnishes: ["Cinnamon Stick"],
    glass: "Highball Glass"
  },
  "Bourbon Highball": {
    ingredients: ["Bourbon", "Soda Water"],
    instructions: "Pour 2 oz bourbon over ice and top with 4 oz soda water. Stir gently and garnish with a lemon twist.",
    garnishes: ["Lemon Twist"],
    glass: "Highball Glass"
  },
  "Bourbon Lemonade": {
    ingredients: ["Bourbon", "Lemonade"],
    instructions: "Pour 2 oz bourbon over ice and top with 4 oz lemonade. Stir gently and garnish with a lemon slice.",
    garnishes: ["Lemon Slice"],
    glass: "Highball Glass"
  },
  "Bourbon Tea Julep": {
    ingredients: ["Bourbon", "Sweet Tea", "Mint"],
    instructions: "Muddle mint with 4 oz sweet tea, add 2 oz bourbon and ice, then stir. Garnish with a mint sprig.",
    garnishes: ["Mint Sprig"],
    glass: "Highball Glass"
  },
  "Brandy Alexander": {
    ingredients: ["Brandy", "Crème de Cacao", "Cream"],
    instructions: "Shake 1 oz brandy, 1 oz crème de cacao, and 1 oz cream with ice. Strain into a coupe glass and garnish with nutmeg.",
    garnishes: ["Nutmeg"],
    glass: "Coupe Glass"
  },
  "Brandy Sour": {
    ingredients: ["Brandy", "Lemon Juice", "Simple Syrup", "Bitters"],
    instructions: "Shake 2 oz brandy, 1 oz lemon juice, and 1/2 oz simple syrup with ice. Strain into a rocks glass, top with a few drops of bitters and garnish with a lemon slice.",
    garnishes: ["Lemon Slice"],
    glass: "Rocks Glass"
  },
  "Brandy and Ginger": {
    ingredients: ["Brandy", "Ginger Ale"],
    instructions: "Pour 2 oz brandy over ice and top with 4 oz ginger ale. Stir gently and garnish with a lemon slice.",
    garnishes: ["Lemon Slice"],
    glass: "Highball Glass"
  },
  "Brandy Highball": {
    ingredients: ["Brandy", "Soda Water"],
    instructions: "Pour 2 oz brandy over ice and top with 4 oz soda water. Stir gently and garnish with a lemon twist.",
    garnishes: ["Lemon Twist"],
    glass: "Highball Glass"
  },
  "Brandy and Tonic": {
    ingredients: ["Brandy", "Tonic Water"],
    instructions: "Pour brandy over ice and top with tonic water. Stir gently and garnish with a lime wedge.",
    garnishes: ["Lime Wedge"],
    glass: "Highball Glass"
  },
  "Brown Derby": {
    ingredients: ["Bourbon", "Grapefruit Juice", "Honey Syrup"],
    instructions: "Shake 1 1/2 oz bourbon, 1 oz grapefruit juice, and 1/z oz honey syrup with ice. Strain into a cocktail glass.",
    glass: "Cocktail Glass"
  },
  "Caipirinha": {
    ingredients: ["Cachaça", "Lime", "Sugar"],
    instructions: "Muddle 1 lime cut into wedges with 2 teaspoons of sugar, add 2 oz cachaça and ice, then stir well. Garnish with a lime wedge.",
    garnishes: ["Lime Wedge"],
    glass: "Rocks Glass"
  },
  "Caipiroska": {
    ingredients: ["Vodka", "Lime", "Sugar"],
    instructions: "Muddle 1 lime cut into wedges with 2 teaspoons of sugar, add 2 oz vodka and ice, then stir well. Garnish with a lime wedge.",
    garnishes: ["Lime Wedge"],
    glass: "Rocks Glass"
  },
  "Champagne Cocktail": {
    ingredients: ["Champagne", "Sugar Cube", "Bitters"],
    instructions: "Soak a sugar cube in 4-6 dashes of bitters, place it in a flute glass, and top with 4-6 oz chilled champagne.  Garnish with a lemon twist.",
    garnishes: ["Lemon Twist"],
    glass: "Flute Glass"
  },
  "Champagne Mojito": {
    ingredients: ["Champagne", "Mint", "Lime Juice", "Simple Syrup"],
    instructions: "Muddle 4 sprigs of mint with 1 oz lime juice and 1/2 oz simple syrup. Add 3 oz champagne and stir gently.  Garnish with a mint sprig.",
    garnishes: ["Mint Sprig"],
    glass: "Highball Glass"
  },
  "Cherry Limeade": {
    ingredients: ["Vodka", "Sprite", "Lime Juice", "Grenadine"],
    instructions: "Mix 2 oz vodka, 4 oz Sprite, 1/2 oz lime juice, and 1/2 oz grenadine with ice. Strain into a glass filled with ice and garnish with a lime slice.",
    garnishes: ["Lime Slice"],
    glass: "Highball Glass"
  },
  "Clover Club": {
    ingredients: ["Gin", "Lemon Juice", "Raspberry Syrup", "Egg White"],
    instructions: "Shake 2 oz gin, 1/2 oz lemon juice, 1/2 oz raspberry syrup, and 1 egg white without ice. Add ice and shake again. Strain into a coupe glass. Garnish with a raspberry.",
    garnishes: ["Raspberry"],
    glass: "Coupe Glass"
  },
  "Corpse Reviver #2": {
    ingredients: ["Gin", "Cointreau", "Lillet Blanc", "Lemon Juice", "Absinthe"],
    instructions: "Rinse a cocktail glass with 1 teaspoon of absinthe.  Mix 3/4 oz gin, 3/4 oz Cointreau, 3/4 oz Lillet Blanc, and 3/4 oz lemon juice with ice. Strain into a coupe glass and garnish with a lemon twist.",
    garnishes: ["Lemon Twist"],
    glass: "Coupe Glass"
  },
  "Cosmopolitan": {
    ingredients: ["Vodka", "Triple Sec", "Lime Juice", "Cranberry Juice"],
    instructions: "Shake 1 1/2 oz vodka, 3/4 oz triple sec, 3/4 oz lime juice, and 3/4 oz cranberry juice with ice. Strain into a cocktail glass and garnish with lime slice.",
    garnishes: ["Lime Slice"],
    glass: "Cocktail Glass"
  },
  "Cuba Libre": {
    ingredients: ["Rum", "Cola", "Lime Juice"],
    instructions: "Pour 2 oz rum over ice, add 1/2 oz lime juice, and top with 4 oz cola. Stir gently and garnish with a lime slice.",
    garnishes: ["Lime Slice"],
    glass: "Highball Glass"
  },
  "Daiquiri": {
    ingredients: ["Rum", "Lime Juice", "Simple Syrup"],
    instructions: "Shake 2 oz rum, 3/4 oz lime juice, and 1/2 oz simple syrup with ice. Strain into a cocktail glass and garnish with a lime slice.",
    garnishes: ["Lime Slice"],
    glass: "Cocktail Glass"
  },
  "Dark and Stormy": {
    ingredients: ["Rum", "Ginger Beer", "Lime Juice"],
    instructions: "Pour 2 oz rum over ice, add 1/2 oz lime juice, and top with 4 oz ginger beer. Stir gently and garnish with a lime slice.",
    garnishes: ["Lime Slice"],
    glass: "Highball Glass"
  },
  "Dog Days of Summer": {
    ingredients: ["Bourbon", "Sweet Vermouth", "Lemon Juice", "Beer (Summer Ale)"],
    instructions: "Shake 1/2 oz bourbon, 1/2 oz sweet vermouth, and 1/2 oz lemon juice with ice. Strain into a highball glass filled with ice and top with 6 oz summer ale. Garnish with a lemon slice.",
    garnishes: ["Lemon Slice"],
    glass: "Highball Glass"
  },
  "Espresso Martini": {
    ingredients: ["Vodka", "Espresso", "Coffee Liqueur"],
    instructions: "Shake 2 oz vodka, 1 oz espresso, and 1/2 oz coffee liqueur with ice. Strain into a cocktail glass.",
    glass: "Cocktail Glass"
  },
  "Fernadito": {
    ingredients: ["Fernet", "Cola"],
    instructions: "Pour 1 1/2 oz fernet over ice and top with 3 1/2 oz cola. Stir gently and garnish with a lime wedge.",
    garnishes: ["Lime Wedge"],
    glass: "Rocks Glass"
  },
  "French 75": {
    ingredients: ["Gin", "Lemon Juice", "Simple Syrup", "Champagne"],
    instructions: "Shake 1 oz gin, 1/2 oz lemon juice, and 1/2 oz simple syrup with ice. Strain into a flute glass and top with 3 oz champagne. Garnish with a lemon twist.",
    garnishes: ["Lemon Twist"],
    glass: "Flute Glass"
  },
  "French Connection": {
    ingredients: ["Cognac", "Amaretto"],
    instructions: "Pour 1 1/2 oz cognac and 3/4 oz amaretto over ice in a rocks glass. Stir gently and garnish with a lemon twist.",
    garnishes: ["Lemon Twist"],
    glass: "Rocks Glass"
  },
  "Gimlet": {
    ingredients: ["Gin", "Lime Juice", "Simple Syrup"],
    instructions: "Shake 2 1/2 gin, 1/2 oz lime juice, and 1/2 oz simple syrup with ice. Strain into a coupe glass and garnish with a lime slice.",
    garnishes: ["Lime Slice"],
    glass: "Coupe Glass"
  },
  "Gin and Juice": {
    ingredients: ["Gin", "Orange Juice"],
    instructions: "Pour 2 oz gin over ice and top with 4 oz orange juice. Stir gently and garnish with an orange slice.",
    garnishes: ["Orange Slice"],
    glass: "Highball Glass"
  },
  "Gin and Tonic": {
    ingredients: ["Gin", "Tonic Water"],
    instructions: "Pour 2 oz of gin over ice and top with 4 oz tonic water. Garnish with a lime wedge.",
    garnishes: ["Lime Wedge"],
    glass: "Highball Glass"
  },
  "Gin Buck": {
    ingredients: ["Gin", "Ginger Ale", "Lime Juice"],
    instructions: "Pour 1 1/2 oz gin and 1/2 oz lime juice over ice, top with 4 oz ginger ale, and stir gently. Garnish with a lime wedge.",
    garnishes: ["Lime Wedge"],
    glass: "Highball Glass"
  },
  "Gin Fizz": {
    ingredients: ["Gin", "Lemon Juice", "Simple Syrup", "Soda Water", "Egg White"],
    instructions: "Shake 2 oz gin, 1 oz lemon juice, 3/4 oz simple syrup, and 1 egg white without ice for about 15 seconds, then add ice and continue shaking. Strain into a glass and top with 1 oz soda water.",
    glass: "Highball Glass"
  },
  "Gin Rickey": {
    ingredients: ["Gin", "Lime Juice", "Soda Water"],
    instructions: "Pour 2 oz gin and 1/2 lime juice over ice, top with 4 oz soda water, and stir gently. Garnish with a lime wedge.",
    garnishes: ["Lime Wedge"],
    glass: "Highball Glass"
  },
  "Gin Sour": {
    ingredients: ["Gin", "Lemon Juice", "Simple Syrup", "Egg White", "Bitters"],
    instructions: "Shake 2 oz gin, 1 oz lemon juice, 3/4 oz simple syrup, and 1 egg white without ice for about 15 seconds, then add ice and continue shaking. Strain into a coupe glass and add 3 dashes of bitters.",
    glass: "Coupe Glass"
  },
  "Gold Rush": {
    ingredients: ["Bourbon", "Lemon Juice", "Honey Syrup"],
    instructions: "Shake 2 oz bourbon, 3/4 oz lemon juice, and 3/4 oz honey syrup with ice. Strain into a rocks glass and garnish with lemon twist.",
    garnishes: ["Lemon Twist"],
    glass: "Rocks Glass"
  },
  "Golden Cadillac": {
    ingredients: ["Galliano", "Cream", "Crème de Cacao"],
    instructions: "Shake 1 oz Galliano, 1 oz cream, and 1 oz Crème de Cacao with ice. Strain into a coupe glass and garnish with chocolate shavings.",
    garnishes: ["Chocolate"],
    glass: "Coupe Glass"
  },
  "Grog": {
    ingredients: ["Rum", "Lime Juice", "Soda Water", "Grapefruit Juice"],
    instructions: "Mix 2 oz rum, 1/2 oz lime juice, 1/2 oz grapefruit juice, and 1 oz soda water in a glass with ice. Stir and garnish with a lime slice.",
    garnishes: ["Lime Slice"],
    glass: "Highball Glass"
  },
  "Hanky Panky": {
    ingredients: ["Gin", "Sweet Vermouth", "Fernet"],
    instructions: "Stir 1 1/2 oz gin, 1 1/2 oz sweet vermouth, and 1/2 teaspoon fernet with ice. Strain into a cocktail glass and garnish with an orange peel.",
    garnishes: ["Orange Peel"],
    glass: "Cocktail Glass"
  },
  "Hibiscus Daiquiri": {
    ingredients: ["Rum", "Hibiscus Syrup", "Lime Juice"],
    instructions: "Shake 2 oz rum, 1/2 oz hibiscus syrup, and 1 oz lime juice with ice. Strain into a cocktail glass.",
    glass: "Cocktail Glass"
  },
  "Hibiscus Margarita": {
    ingredients: ["Tequila", "Hibiscus Syrup", "Lime Juice", "Triple Sec"],
    instructions: "Shake 2 oz tequila, 1 oz hibiscus syrup, 1 oz lime juice, and 1 oz Triple Sec with ice. Strain into a salt-rimmed glass and garnish with a lime wedge.",
    garnishes: ["Lime Wedge", "Salt"],
    glass: "Rocks Glass"
  },
  "Hibiscus Mojito": {
    ingredients: ["Rum", "Hibiscus Syrup", "Lime Juice", "Mint", "Soda Water"],
    instructions: "Muddle 8 mint leaves with 3/4 oz lime juice and 3/4 oz hibiscus syrup. Add 3 oz rum and ice, top with 1 oz soda water, and stir. Garnish with a mint sprig.",
    garnishes: ["Mint Sprig"],
    glass: "Highball Glass"
  },
  "Hibiscus Sour": {
    ingredients: ["Gin", "Hibiscus Syrup", "Lemon Juice", "Egg White"],
    instructions: "Shake 2 oz gin, 3/4 oz hibiscus syrup, 3/4 oz lemon juice, and egg white without ice. Add ice and shake again. Strain into a coupe glass.",
    glass: "Coupe Glass"
  },
  "Hibiscus Tonic": {
    ingredients: ["Gin", "Hibiscus Syrup", "Tonic Water"],
    instructions: "Pour 2 oz gin and 1/2 oz hibiscus syrup over ice, top with 4 oz tonic water, and stir gently. Garnish with a lime wedge.",
    garnishes: ["Lime Wedge"],
    glass: "Highball Glass"
  },
  "Hibiscus Vodka Collins": {
    ingredients: ["Vodka", "Hibiscus Syrup", "Lemon Juice", "Soda Water"],
    instructions: "Shake 2 oz vodka, 1/2 oz hibiscus syrup, and 1/2 oz lemon juice with ice. Strain into a glass filled with ice and top with 2 oz soda water. Garnish with a lemon slice.",
    garnishes: ["Lemon Slice"],
    glass: "Highball Glass"
  },
  "Hot Toddy": {
    ingredients: ["Bourbon", "Honey", "Lemon Juice"],
    instructions: "Mix 1 1/2 oz bourbon, 1/2 oz honey, and 1/2 oz lemon juice in a glass mug. Top with hot water and stir until honey is dissolved. Garnish with a lemon slice and cinnamon stick.",
    garnishes: ["Lemon Slice", "Cinnamon Stick"],
    glass: "Glass Mug"
  },
  "Hurricane": {
    ingredients: ["Rum", "Lemon Juice", "Orange Juice", "Passion Fruit Juice", "Simple Syrup"],
    instructions: "Shake 4 oz rum, 1 oz orange juice, 1/2 oz lemon juice, 2 oz passion fruit juice, and 1/2 oz simple syrup with ice. Strain into a glass filled with ice. Garnish with an orange slice and cherry.",
    garnishes: ["Orange Slice", "Cherry"],
    glass: "Hurricane Glass"
  },
  "In Cold Blood": {
    ingredients: ["Rye", "Sweet Vermouth", "Cynar"],
    instructions: "Stir 1 oz rye, 1 oz sweet vermouth, and 1 oz Cynar into a rocks glass with ice. Stir well to combine and garnish with a lemon twist and pinch of salt.",
    garnishes: ["Lemon Twist", "Salt"],
    glass: "Rocks Glass" 
  },
  /*"Irish Coffee": {
    ingredients: ["Irish Whiskey", "Hot Coffee", "Sugar", "Cream"],
    instructions: "Mix hot coffee with sugar and Irish whiskey. Top with lightly whipped cream."
  },*/
  "Jack Rose": {
    ingredients: ["Applejack", "Lemon Juice", "Grenadine"],
    instructions: "Shake applejack, lemon juice, and grenadine with ice. Strain into a chilled glass."
  },
  "Jalisco Mule": {
    ingredients: ["Tequila", "Ginger Beer", "Lime Juice"],
    instructions: "Pour tequila and lime juice over ice. Top with ginger beer and garnish with a lime wedge."
  },
  "John Collins": {
    ingredients: ["Gin", "Lemon Juice", "Simple Syrup", "Soda Water"],
    instructions: "Shake gin, lemon juice, and simple syrup with ice. Strain into a glass filled with ice and top with soda water."
  },
  "Last Word": {
    ingredients: ["Gin", "Green Chartreuse", "Maraschino Liqueur", "Lime Juice"],
    instructions: "Shake all ingredients with ice. Strain into a chilled glass."
  },
  "Kentucky Mule": {
    ingredients: ["Bourbon", "Ginger Beer", "Lime Juice"],
    instructions: "Pour bourbon and lime juice over ice. Top with ginger beer and garnish with a lime wedge."
  },
  "Long Island Iced Tea": {
    ingredients: ["Vodka", "Gin", "Rum", "Tequila", "Triple Sec", "Lemon Juice", "Cola"],
    instructions: ["Combine Vodka, Gin, Rum, Tequila, Triple Sec, and Lemon Juice in a shaker with ice.", "Shake well and strain into a tall glass filled with ice.", "Top with Cola and garnish with a lemon wedge."]
  },
  "Mai Tai": {
    ingredients: ["Rum", "Lime Juice", "Orange Liqueur", "Orgeat Syrup"],
    instructions: "Shake rum, lime juice, orange liqueur, and orgeat syrup with ice. Strain into a glass filled with crushed ice and garnish with mint and a lime wheel."
  },
  "Manhattan (Bourbon)": {
  ingredients: ["Bourbon", "Sweet Vermouth", "Bitters"],
  instructions: "Stir 2 oz bourbon, 1 oz sweet vermouth, and 2 dashes of bitters with ice. Strain into a coupe glass and garnish with a cherry.",
  garnishes: ["Cherry"],
  glass: "Coupe Glass"
  },
  "Manhattan (Rye)": {
    ingredients: ["Rye", "Sweet Vermouth", "Bitters"],
    instructions: "Stir 2 oz rye, 1 oz sweet vermouth, and 2 dashes of bitters with ice. Strain into a coupe glass and garnish with a cherry.",
    garnishes: ["Cherry"],
    glass: "Coupe Glass"
  },
  "Maple Bourbon Smash": {
    ingredients: ["Bourbon", "Lemon Juice", "Maple Syrup"],
    instructions: "Shake 2 oz bourbon, 1 oz lemon juice, and 1 oz maple syrup with ice. Strain into a rocks glass with ice and garnish with a lemon twist.",
    garnishes: ["Lemon Twist"],
    glass: "Rocks Glass"
  },
  "Maple Old Fashioned": {
    ingredients: ["Bourbon", "Maple Syrup", "Bitters"],
    instructions: "Stir 2 oz bourbon, 1/2 teaspoon of maple syrup, and 3 dashes of bitters in a rocks glass with ice. Garnish with a cherry.",
    garnishes: ["Cherry"],
    glass: "Rocks Glass"
  },
  "Margarita": {
    ingredients: ["Tequila", "Lime Juice", "Triple Sec"],
    instructions: "Shake tequila, lime juice, and triple sec with ice. Strain into a salt-rimmed glass and garnish with lime."
  },
  "Martinez": {
    ingredients: ["Gin", "Sweet Vermouth", "Maraschino Liqueur", "Bitters"],
    instructions: "Stir gin, sweet vermouth, maraschino liqueur, and bitters with ice. Strain into a chilled glass and garnish with a lemon twist."
  },
  "Martini (Gin)": {
    ingredients: ["Gin", "Vermouth"],
    instructions: "Stir or shake gin and vermouth with ice. Strain into a martini glass and garnish with an olive or twist."
  },
  "Martini (Vodka)": {
    ingredients: ["Vodka", "Vermouth"],
    instructions: "Stir or shake gin and vermouth with ice. Strain into a martini glass and garnish with an olive or twist."
  },
  "Milk Punch": {
    ingredients: ["Bourbon", "Milk", "Simple Syrup", "Vanilla Extract"],
    instructions: "Shake 2 oz bourbon, 3 oz milk, 1/2 oz simple syrup, and 3/4 teaspoon vanilla extract with ice. Strain into a glass and garnish with grated nutmeg.",
    garnishes: ["Nutmeg"],
    glass: "Highball Glass"
  },
  "Millionaire": {
    ingredients: ["Bourbon", "Vermouth", "Orange Liqueur", "Simple Syrup", "Bitters"],
    instructions: "Shake all ingredients with ice. Strain into a chilled glass and garnish with an orange twist."
  },
  "Mimosa": {
    ingredients: ["Champagne", "Orange Juice"],
    instructions: "Pour equal parts champagne and orange juice into a glass. Stir gently and serve."
  },
  "Mint Julep": {
    ingredients: ["Bourbon", "Mint", "Simple Syrup"],
    instructions: "In a julep cup muddle 8 leaves of mint with 1/2 oz simple syrup, add crushed ice and 2 oz bourbon, then stir.  Garnish with a mint sprig.",
    garnishes: ["Mint Sprig"],
    glass: "Julep Cup"
  },
  "Mojito": {
    ingredients: ["Rum", "Mint", "Lime Juice", "Soda Water"],
    instructions: "Muddle mint with lime juice and sugar. Add rum and ice, top with soda water, and stir."
  },
  "Moscow Mule": {
    ingredients: ["Vodka", "Ginger Beer", "Lime Juice"],
    instructions: "Pour vodka and lime juice over ice in a copper mug. Top with ginger beer and garnish with a lime wedge."
  },
  "Nectar": {
    ingredients: ["Gin", "Lemon Juice", "Honey Syrup"],
    instructions: "Shake gin, lemon juice, and honey syrup with ice. Strain into a chilled glass."
  },
  "Negroni": {
    ingredients: ["Gin", "Sweet Vermouth", "Campari"],
    instructions: "Stir 1 oz gin, 1 oz sweet vermouth, and 1 oz Campari with ice. Strain into a rocks glass with ice and garnish with orange peel.",
    garnishes: ["Orange Peel"],
    glass: "Rocks Glass"
  },
  "Negroni Bianco": {
    ingredients: ["Gin", "Dry Vermouth", "Aperol"],
    instructions: "Stir 1 oz gin, 1 oz dry vermouth, and 1 oz Aperol with ice. Strain into a rocks glass with ice and garnish with a lemon twist.",
    garnishes: ["Lemon Twist"],
    glass: "Rocks Glass"
  },
  "Negroni Sbagliato": {
    ingredients: ["Prosecco", "Campari", "Sweet Vermouth"],
    instructions: "Pour 3 oz Prosecco, 1 oz Campari, and 1 oz sweet vermouth over ice in a rocks glass. Stir gently and garnish with an orange peel.",
    garnishes: ["Orange Peel"],
    glass: "Rocks Glass"
  },
  "New York Sour": {
    ingredients: ["Bourbon", "Lemon Juice", "Simple Syrup", "Red Wine"],
    instructions: "Shake 2 oz bourbon, 1 oz lemon juice, and 3/4 oz simple syrup with ice. Strain into a rocks glass and float 1/2 oz red wine on top by slowly pouring over the back of a spoon.",
    glass: "Rocks Glass",
  },
  "Nor'easter": {
    ingredients: ["Bourbon", "Lime Juice", "Ginger Beer", "Maple Syrup"],
    instructions: "Shake 2 oz bourbon, 1/2 oz lime juice, and 1/2 oz maple syrup with ice. Strain into a rocks glass filled with ice and top with 2 oz ginger beer. Garnish with a lime slice.",
    garnishes: ["Lime Slice"],
    glass: "Rocks Glass"
  },
  "Northern Lights": {
    ingredients: ["Vodka", "Lime Juice", "Simple Syrup", "Champagne"],
    instructions: "Shake 1 1/2 oz vodka, 3/4 oz lime juice, and 1 oz simple syrup with ice. Strain into a rocks glass and add 1 oz champagne on top.  Garnish with a mint sprig.",
    garnishes: ["Mint Sprig"],
    glass: "Rocks Glass"
  },
  "Old Cuban": {
    ingredients: ["Rum", "Champagne", "Mint", "Lime Juice", "Simple Syrup", "Bitters"],
    instructions: "Muddle 6 leaves of mint with 3/4 oz lime juice and 1 oz simple syrup in a shaker. Add 1 1/2 oz rum, 2 dashes of bitters, and ice then shake. Strain into a coupe glass and top with 2 oz champagne. Garnish with a mint sprig.",
    garnishes: ["Mint Sprig"],
    glass: "Coupe Glass"
  },
  "Old Fashioned": {
    ingredients: ["Bourbon", "Simple Syrup", "Bitters"],
    instructions: "Fill glass halfway with ice, add 2 oz of bourbon, 1/8 oz of simple syrup, and a few dashes of bitters. Stir and garnish with orange peel.",
    garnishes: ["Orange Peel"],
    glass: "Rocks Glass"
  },
  "Paloma": {
    ingredients: ["Tequila", "Grapefruit Soda", "Lime Juice"],
    instructions: "Pour tequila and lime juice over ice. Top with grapefruit soda and stir. Garnish with a lime wedge."
  },
  /*"Paper Plane": {
    ingredients: ["Bourbon", "Aperol", "Amaro Nonino", "Lemon Juice"],
    instructions: "Shake all ingredients with ice. Strain into a chilled glass."
  },*/
  "Part-Time Lover": {
    ingredients: ["Vodka", "Lemon Juice", "Simple Syrup", "Ginger Beer"],
    instructions: "Shake vodka, lemon juice, and simple syrup with ice. Strain into a glass filled with ice and top with ginger beer."
  },
  /*"Pimm's Cup": {
    ingredients: ["Pimm's No. 1", "Lemonade", "Cucumber", "Mint", "Fruit"],
    instructions: "Mix Pimm's No. 1 with lemonade in a glass filled with ice. Garnish with cucumber slices, mint leaves, and assorted fruits."
  },*/
  "Pisco and Tonic": {
    ingredients: ["Pisco", "Tonic Water", "Lime Juice"],
    instructions: "Pour pisco over ice, add lime juice, and top with tonic water. Stir gently and garnish with a lime wedge."
  },
  "Pisco Punch": {
    ingredients: ["Pisco", "Pineapple Juice", "Lemon Juice", "Simple Syrup"],
    instructions: "Shake pisco, pineapple juice, lemon juice, and simple syrup with ice. Strain into a glass filled with ice and garnish with a pineapple slice."
  },
  "Pisco Sour": {
    ingredients: ["Pisco", "Lemon Juice", "Simple Syrup", "Egg White"],
    instructions: "Shake pisco, lemon juice, simple syrup, and egg white without ice to emulsify. Add ice and shake again. Strain into a chilled glass."
  },
  "Planter's Punch": {
    ingredients: ["Rum", "Lime Juice", "Orange Juice", "Grenadine", "Simple Syrup"],  
    instructions: "Shake rum, lime juice, orange juice, grenadine, and simple syrup with ice. Strain into a glass filled with ice and garnish with an orange slice."
  },
  "Queens Park Swizzle": {
    ingredients: ["Rum", "Lime Juice", "Simple Syrup", "Mint", "Bitters"],
    instructions: "Muddle mint with lime juice and simple syrup. Add rum and crushed ice, then swizzle with a bar spoon. Top with bitters and garnish with mint sprig."
  },
  /*"Ramos Gin Fizz": {
    ingredients: ["Gin", "Lemon Juice", "Lime Juice", "Simple Syrup", "Cream", "Egg White", "Orange Flower Water", "Soda Water"],
    instructions: "Shake all ingredients except soda water without ice to emulsify. Add ice and shake again. Strain into a glass and top with soda water."
  },*/
  "Rob Roy": {
    ingredients: ["Scotch", "Vermouth", "Bitters"],
    instructions: "Stir scotch, sweet vermouth, and bitters with ice. Strain into a chilled glass and garnish with a cherry."
  },
  "Rum and Coke": {
    ingredients: ["Rum", "Cola"],
    instructions: "Fill a glass with ice, pour in rum, and top with cola. Stir gently and garnish with a lime wedge."
  },
  "Rum Punch": {
    ingredients: ["Rum", "Pineapple Juice", "Orange Juice", "Grenadine"],
    instructions: "Shake rum, pineapple juice, orange juice, and grenadine with ice. Strain into a glass filled with ice and garnish with an orange slice."
  },
  "Rusty Nail": {
    ingredients: ["Scotch", "Drambuie"],
    instructions: "Stir scotch and Drambuie with ice. Strain into a chilled glass and garnish with a lemon twist."
  },
  "Sazerac (Bourbon)": {
    ingredients: ["Bourbon", "Simple Syrup", "Bitters", "Absinthe"],
    instructions: "Mix 2 oz of bourbon, 3/4 oz simple syrup, and 4 dashes of bitters with ice and stir, then rinse a rocks glass with 1/4 oz absinthe and strain the drink into it. Garnish with a lemon twist.",
    garnishes: ["Lemon Twist"],
    glass: "Rocks Glass"
  },
  "Sazerac (Rye)": {
    ingredients: ["Rye", "Simple Syrup", "Bitters", "Absinthe"],
    instructions: "Mix 2 oz of rye, 3/4 oz simple syrup, and 4 dashes of bitters with ice and stir, then rinse a rocks glass with 1/4 oz absinthe and strain the drink into it. Garnish with a lemon twist.",
    garnishes: ["Lemon Twist"],
    glass: "Rocks Glass"
  },
  "Scofflow (Bourbon)": {
    ingredients: ["Bourbon", "Lemon Juice", "Simple Syrup", "Egg White"],
    instructions: "Shake 1 1/2 oz bourbon, 1 oz dry vermouth, 3/4 oz lemon juice, 3/4 oz grenadine and 1 dash of bitters with ice. Strain into a cocktail glass and garnish with a lemon twist.",
    garnishes: ["Lemon Twist"],
    glass: "Cocktail Glass"
  },
  "Scofflow (Rye)": {
    ingredients: ["Rye", "Lemon Juice", "Simple Syrup", "Egg White"],
    instructions: "Shake 1 1/2 oz rye, 1 oz dry vermouth, 3/4 oz lemon juice, 3/4 oz grenadine and 1 dash of bitters with ice. Strain into a cocktail glass and garnish with a lemon twist.",
    garnishes: ["Lemon Twist"],
    glass: "Cocktail Glass"
  },
  "Screwdriver": {
    ingredients: ["Vodka", "Orange Juice"],
    instructions: "Pour 2 oz vodka over ice and top with 5 oz orange juice. Stir gently and garnish with an orange slice.",
    garnishes: ["Orange Slice"], 
    glass: "Highball Glass"
  },
  "Sea Breeze": {
    ingredients: ["Vodka", "Cranberry Juice", "Grapefruit Juice"],
    instructions: "Pour 1 1/2 oz vodka over ice, add 3 oz cranberry juice and 1 1/2 oz grapefruit juice. Stir gently and garnish with a lime slice.",
    garnishes: ["Lime Slice"],
    glass: "Highball Glass"
  },
  "Shadow Woman": {
    ingredients: ["Bourbon", "Pear Brandy", "Honey", "Bitters"],
    instructions: "Shake  1 1/2 oz bourbon, 1/2 oz Pear Brandy, 1 teaspoon honey, and 2 dashes of bitters with ice. Strain into a rocks glass and garnish with an orange peel.",
    garnishes: ["Orange Peel"],
    glass: "Rocks Glass"
  },
  "Sherry Cobble": {
    ingredients: ["Sherry", "Simple Syrup", "Bitters"],
    instructions: "Stir sherry, simple syrup, and bitters with ice. Strain into a chilled glass and garnish with an orange twist."
  },
  "Sidecar": {
    ingredients: ["Cognac", "Triple Sec", "Lemon Juice"],
    instructions: "Shake cognac, triple sec, and lemon juice with ice. Strain into a chilled glass, optionally rimmed with sugar."
  },
  "Singapore Sling": {
    ingredients: ["Gin", "Cherry Liqueur", "Benedictine", "Grenadine", "Pineapple Juice", "Lime Juice"],
    instructions: "Shake all ingredients with ice. Strain into a glass filled with ice and garnish with a cherry and pineapple slice."
  },
  "Summer Whiskey Sour": {
    ingredients: ["Bourbon", "Lemon Juice", "Simple Syrup", "Mint"],
    instructions: "Muddle mint with lemon juice and simple syrup. Add bourbon and ice, then shake and strain into a glass."
  },
  "Tequila and Tonic": {
    ingredients: ["Tequila", "Tonic Water"],
    instructions: "Pour tequila over ice and top with tonic water. Stir gently and garnish with a lime wedge."
  },
  "Tequila Mule": {
    ingredients: ["Tequila", "Ginger Beer", "Lime Juice"],
    instructions: "Pour tequila and lime juice over ice. Top with ginger beer and garnish with a lime wedge."
  },
  "Tequila Sunrise": {
    ingredients: ["Tequila", "Orange Juice", "Grenadine"],
    instructions: "Pour tequila and orange juice over ice. Slowly add grenadine to create a sunrise effect."
  },
  "Tom Collins": {
    ingredients: ["Gin", "Lemon Juice", "Simple Syrup", "Soda Water"],
    instructions: "Shake gin, lemon juice, and simple syrup with ice. Strain into a glass filled with ice and top with soda water."
  },
  "Vesper Martini": {
    ingredients: ["Gin", "Vodka", "Lillet Blanc"],
    insturctions: "Shake gin, vodka, and Lillet Blanc with ice. Strain into a chilled martini glass and garnish with a lemon twist."
  },
  "Vieux Carré": {
    ingredients: ["Rye", "Cognac", "Vermouth", "Benedictine", "Bitters"],
    instructions: "Stir all ingredients with ice. Strain into a chilled glass and garnish with a lemon twist."
  },
  "Vodka Soda": {
    ingredients: ["Vodka", "Soda Water"],
    instructions: "Fill a glass with ice, pour in 2 oz of vodka, and top with soda water. Garnish with lime."
  },
  "Ward Eight": {
    ingredients: ["Rye", "Lemon Juice", "Orange Juice", "Grenadine"],
    instructions: "Shake rye, lemon juice, orange juice, and grenadine with ice. Strain into a chilled glass."
  },
  "Whiskey Chai": {
    ingredients: ["Bourbon", "Chai Tea", "Honey Syrup"],
    instructions: "Mix brewed chai tea with bourbon and honey syrup. Serve warm or over ice."
  },
  "Whiskey Samash": {
    ingredients: ["Bourbon", "Lemon Juice", "Fig Syrup", "Mint"],
    instructions: "Combine bourbon, lemon juice, and fig syrup in a cocktail shaker filled with ice. Place lid on shaker; shake briefly, about 10 seconds. Double-strain into a rocks glass; top with crushed ice. Garnish with mint."
  },
  "Whiskey Smash (Bourbon)": {
    ingredients: ["Bourbon", "Lemon Juice", "Simple Syrup", "Mint"],
    instructions: "Muddle 8 mint leaves with 3/4 oz lemon juice and 1/2 oz simple syrup. Add 2 oz bourbon and ice, then shake and strain into a rocks glass. Garnish with a mint sprig.",
    garnishes: ["Mint Sprig"],
    glass: "Rocks Glass"
  },
  "Whiskey Smash (Rye)": {
    ingredients: ["Rye", "Lemon Juice", "Simple Syrup", "Mint"],
    instructions: "Muddle 8 mint leaves with 3/4 oz lemon juice and 1/2 oz simple syrup. Add 2 oz rye and ice, then shake and strain into a rocks glass. Garnish with a mint sprig.",
    garnishes: ["Mint Sprig"],
    glass: "Rocks Glass"
  },
  "Whiskey Sour (Bourbon)": {
    ingredients: ["Bourbon", "Lemon Juice", "Simple Syrup"],
    instructions: "Shake 2 oz bourbon, 3/4 oz lemon juice, 1/2 oz simple syrup, and 1/2 oz egg white without. Strain and serve into a rocks glass with ice, garnish with a lemon twist.",
    garnishes: ["Lemon Twist"],
    glass: "Rocks Glass"
  },
  "Whiskey Sour (Rye)": {
    ingredients: ["Rye", "Lemon Juice", "Simple Syrup"],
    instructions: "Shake 2 oz rye, 3/4 oz lemon juice, 1/2 oz simple syrup, and 1/2 oz egg white without. Strain and serve into a rocks glass with ice, garnish with a lemon twist.",
    garnishes: ["Lemon Twist"],
    glass: "Rocks Glass"
  },
  "White Lady": {
    ingredients: ["Gin", "Triple Sec", "Lemon Juice"],
    instructions: "Shake gin, triple sec, and lemon juice with ice. Strain into a chilled glass."
  },
  "White Russian": {
    ingredients: ["Vodka", "Coffee Liqueur", "Cream"],
    instructions: "Pour vodka and coffee liqueur over ice, top with cream, and stir gently."
  },
  "Yellow Bird": {
    ingredients: ["Rum", "Lime Juice", "Orange Liqueur", "Galliano"],
    instructions: "Shake all ingredients with ice. Strain into a chilled glass and garnish with an orange slice."
  },
  "Zombie": {
    ingredients: ["Rum", "Lime Juice", "Brandy", "Grenadine", "Pineapple Juice"],
    instructions: "Shake all ingredients with ice. Strain into a glass filled with ice and garnish with a cherry and orange slice."
  }
};
 

  //highballer.app on porkbun