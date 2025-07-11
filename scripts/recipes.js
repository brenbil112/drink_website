const drinkRecipes = {
  /*"Adonis": {
    ingredients: ["Sweet Vermouth", "Dry Vermouth", "Orange Bitters"],
    instructions: "Stir sweet vermouth, dry vermouth, and orange bitters with ice. Strain into a chilled glass and garnish with an orange twist."
  },*/
  "Agavoni": {
    ingredients: ["Tequila", "Sweet Vermouth", "Campari"],
    instructions: "Stir tequila, sweet vermouth, and Campari with ice. Strain into a chilled glass and garnish with an orange twist."
  },
  "Aperol Spritz": {
    ingredients: ["Aperol", "Prosecco", "Soda Water"],
    instructions: "Pour Aperol and Prosecco over ice in a glass, top with soda water, and garnish with an orange slice."
  },
  "Americano": {
    ingredients: ["Campari", "Vermouth", "Soda Water"],
    instructions: "Pour Campari and sweet vermouth over ice, top with soda water, and garnish with an orange slice."
  },
  "Aviation": {
    ingredients: ["Gin", "Maraschino Liqueur", "Crème de Violette", "Lemon Juice"],
    instructions: "Shake gin, maraschino liqueur, crème de violette, and lemon juice with ice. Strain into a chilled glass."
  },
  "Bees Knees": {
    ingredients: ["Gin", "Lemon Juice", "Honey Syrup"],
    instructions: "Shake gin, lemon juice, and honey syrup with ice. Strain into a chilled glass."
  },
  /*"Bellini": {
    ingredients: ["Prosecco", "Peach Purée"],
    instructions: "Pour peach purée into a glass and top with Prosecco. Stir gently."
  },*/
  "Blackberry Bramble": {
    ingredients: ["Gin", "Lemon Juice", "Simple Syrup", "Blackberry Liqueur"],
    instructions: "Shake gin, lemon juice, and simple syrup with ice. Strain into a glass filled with crushed ice and drizzle blackberry liqueur on top."
  },
  "Bloody Mary": {
    ingredients: ["Vodka", "Tomato Juice", "Lemon Juice"],
    instructions: "Shake vodka, tomato juice, lemon juice, with optional hot sauce, celery salt, and pepper with ice. Strain into a glass and garnish with a celery stick and lemon wedge."
  },
  "Boulevardier": {
    ingredients: ["Bourbon", "Vermouth", "Campari"],
    instructions: "Stir bourbon, sweet vermouth, and Campari with ice. Strain into a chilled glass and garnish with an orange twist."
  },
  "Bourbon and Coke": {
    ingredients: ["Bourbon", "Cola"],
    instructions: "Pour bourbon over ice in a glass and top with cola. Stir gently and garnish with a lime wedge."
  },
  "Bourbon and Ginger": {
    ingredients: ["Bourbon", "Ginger Ale"],
    instructions: "Pour bourbon over ice and top with ginger ale. Stir gently and garnish with a lime wedge."
  },
  "Bourbon and Soda": {
    ingredients: ["Bourbon", "Soda Water"],
    instructions: "Pour bourbon over ice and top with soda water. Stir gently and garnish with a lemon twist."
  },
  "Bourbon and Tonic": {
    ingredients: ["Bourbon", "Tonic Water"],
    instructions: "Pour bourbon over ice and top with tonic water. Stir gently and garnish with a lime wedge."
  },
  "Bourbon Cider": {
    ingredients: ["Bourbon", "Apple Cider"],
    instructions: "Pour bourbon over ice and top with apple cider. Stir gently and garnish with a cinnamon stick."
  },
  "Bourbon Highball": {
    ingredients: ["Bourbon", "Soda Water"],
    instructions: "Pour bourbon over ice and top with soda water. Stir gently and garnish with a lemon twist."
  },
  "Bourbon Lemonade": {
    ingredients: ["Bourbon", "Lemonade"],
    instructions: "Pour bourbon over ice and top with lemonade. Stir gently and garnish with a lemon slice."
  },
  "Bourbon Smash": {
    ingredients: ["Bourbon", "Lemon Juice", "Simple Syrup", "Mint"],
    instructions: "Muddle mint with lemon juice and simple syrup. Add bourbon and ice, then shake and strain into a glass."
  },
  "Brown Derby": {
    ingredients: ["Bourbon", "Grapefruit Juice", "Honey Syrup"],
    instructions: "Shake bourbon, grapefruit juice, and honey syrup with ice. Strain into a chilled glass."
  },
  "Caipirinha": {
    ingredients: ["Cachaça", "Lime", "Sugar"],
    instructions: "Muddle lime wedges with sugar, add cachaça and ice, then stir well."
  },
  "Caipiroska": {
    ingredients: ["Vodka", "Lime", "Sugar"],
    instructions: "Muddle lime wedges with sugar, add vodka and ice, then stir well."
  },
  "Champagne Cocktail": {
    ingredients: ["Champagne", "Sugar Cube", "Angostura Bitters"],
    instructions: "Soak a sugar cube in Angostura bitters, place it in a flute, and top with champagne."
  },
  "Champagne Mojito": {
    ingredients: ["Champagne", "Mint", "Lime Juice", "Simple Syrup"],
    instructions: "Muddle mint with lime juice and simple syrup. Add champagne and stir gently."
  },
  /*"Cherry Bounce": {
    ingredients: ["Bourbon", "Cherries", "Sugar"],
    instructions: "Muddle cherries with sugar, add bourbon, and let sit for at least a week before straining."
  }, 
  */
  "Cherry Limeade": {
    ingredients: ["Vodka", "Cherry Juice", "Lime Juice", "Simple Syrup", "Soda Water"],
    instructions: "Shake vodka, cherry juice, lime juice, and simple syrup with ice. Strain into a glass filled with ice and top with soda water."
  },
  "Clover Club": {
    ingredients: ["Gin", "Lemon Juice", "Raspberry Syrup", "Egg White"],
    instructions: "Shake gin, lemon juice, raspberry syrup, and egg white without ice to emulsify. Add ice and shake again. Strain into a chilled glass."
  },
  "Corpse Reviver #2": {
    ingredients: ["Gin", "Cointreau", "Lillet Blanc", "Lemon Juice", "Absinthe"],
    instructions: "Shake all ingredients with ice. Strain into a chilled glass and garnish with a lemon twist."
  },
  "Cosmopolitan": {
    ingredients: ["Vodka", "Triple Sec", "Lime Juice", "Cranberry Juice"],
    instructions: "Shake vodka, triple sec, lime juice, and cranberry juice with ice. Strain into a chilled martini glass."
  },
  "Cuba Libre": {
    ingredients: ["Rum", "Cola", "Lime Juice"],
    instructions: "Pour rum over ice, add lime juice, and top with cola. Stir gently and garnish with a lime wedge."
  },
  "Daiquiri": {
    ingredients: ["Rum", "Lime Juice", "Simple Syrup"],
    instructions: "Shake rum, lime juice, and simple syrup with ice. Strain into a chilled glass."
  },
  "Dark and Stormy": {
    ingredients: ["Rum", "Ginger Beer", "Lime Juice"],
    instructions: "Pour rum over ice, add lime juice, and top with ginger beer. Stir gently and garnish with a lime wedge."
  },
  "Espresso Martini": {
    ingredients: ["Vodka", "Espresso", "Coffee Liqueur"],
    instructions: "Shake vodka, espresso, and coffee liqueur with ice. Strain into a chilled martini glass."
  },
  "Fernadito": {
    ingredients: ["Fernet", "Cola"],
    instructions: "Pour fernet over ice and top with cola. Stir gently and garnish with a lime wedge."
  },
  "French 75": {
    ingredients: ["Gin", "Lemon Juice", "Simple Syrup", "Champagne"],
    instructions: "Shake gin, lemon juice, and simple syrup with ice. Strain into a glass and top with champagne."
  },
  "French Connection": {
    ingredients: ["Cognac", "Amaretto"],
    instructions: "Pour cognac and amaretto over ice in a glass. Stir gently and serve."
  },
  "Gimlet": {
    ingredients: ["Gin", "Lime Juice", "Simple Syrup"],
    instructions: "Shake gin, lime juice, and simple syrup with ice. Strain into a chilled glass."
  },
  "Gin and Juice": {
    ingredients: ["Gin", "Orange Juice"],
    instructions: "Pour gin over ice and top with orange juice. Stir gently and garnish with an orange slice."
  },
  "Gin and Tonic": {
    ingredients: ["Gin", "Tonic Water"],
    instructions: "Pour 2 oz of gin over ice and top with tonic water. Garnish with a lime wedge."
  },
  "Gin Buck": {
    ingredients: ["Gin", "Ginger Ale", "Lime Juice"],
    instructions: "Pour gin and lime juice over ice, top with ginger ale, and stir gently. Garnish with a lime wedge."
  },
  "Gin Fizz": {
    ingredients: ["Gin", "Lemon Juice", "Simple Syrup", "Soda Water"],
    instructions: "Shake gin, lemon juice, and simple syrup with ice. Strain into a glass and top with soda water."
  },
  "Gin Rickey": {
    ingredients: ["Gin", "Lime Juice", "Soda Water"],
    instructions: "Pour gin and lime juice over ice, top with soda water, and stir gently. Garnish with a lime wedge."
  },
  "Gin Sour": {
    ingredients: ["Gin", "Lemon Juice", "Simple Syrup"],
    instructions: "Shake gin, lemon juice, and simple syrup with ice. Strain into a chilled glass."
  },
  "Gold Rush": {
    ingredients: ["Bourbon", "Lemon Juice", "Honey Syrup"],
    instructions: "Shake bourbon, lemon juice, and honey syrup with ice. Strain into a chilled glass."
  },
  "Golden Cadillac": {
    ingredients: ["Galliano", "Cream", "Crème de Cacao"],
    instructions: "Shake all ingredients with ice. Strain into a chilled glass."
  },
  "Grog": {
    ingredients: ["Rum", "Lemon Juice", "Honey", "Water"],
    instructions: "Mix rum, lemon juice, honey, and hot water in a glass. Stir until honey is dissolved and serve warm."
  },
  "Hanky Panky": {
    ingredients: ["Gin", "Sweet Vermouth", "Fernet"],
    instructions: "Stir gin, sweet vermouth, and fernet with ice. Strain into a chilled glass and garnish with an orange twist."
  },
  "Hibiscus Daiquiri": {
    ingredients: ["Rum", "Hibiscus Syrup", "Lime Juice"],
    instructions: "Shake rum, hibiscus syrup, and lime juice with ice. Strain into a chilled glass."
  },
  "Hibiscus Margarita": {
    ingredients: ["Tequila", "Hibiscus Syrup", "Lime Juice"],
    instructions: "Shake tequila, hibiscus syrup, and lime juice with ice. Strain into a salt-rimmed glass and garnish with a lime wedge."
  },
  "Hibiscus Mojito": {
    ingredients: ["Rum", "Hibiscus Syrup", "Lime Juice", "Mint", "Soda Water"],
    instructions: "Muddle mint with lime juice and hibiscus syrup. Add rum and ice, top with soda water, and stir."
  },
  "Hibiscus Sour": {
    ingredients: ["Gin", "Hibiscus Syrup", "Lemon Juice", "Egg White"],
    instructions: "Shake gin, hibiscus syrup, lemon juice, and egg white without ice to emulsify. Add ice and shake again. Strain into a chilled glass."
  },
  "Hibiscus Tonic": {
    ingredients: ["Gin", "Hibiscus Syrup", "Tonic Water"],
    instructions: "Pour gin and hibiscus syrup over ice, top with tonic water, and stir gently. Garnish with a lime wedge."
  },
  "Hibiscus Vodka Collins": {
    ingredients: ["Vodka", "Hibiscus Syrup", "Lemon Juice", "Soda Water"],
    instructions: "Shake vodka, hibiscus syrup, and lemon juice with ice. Strain into a glass filled with ice and top with soda water."
  },
  "Hot Toddy": {
    ingredients: ["Bourbon", "Honey", "Lemon Juice"],
    instructions: "Mix bourbon, honey, and lemon juice in a glass. Top with hot water and stir until honey is dissolved."
  },
  "Hurricane": {
    ingredients: ["Rum", "Lemon Juice", "Passion Fruit Juice", "Simple Syrup"],
    instructions: "Shake rum, lemon juice, passion fruit juice, and simple syrup with ice. Strain into a glass filled with ice."
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
  ingredients: ["Bourbon", "Vermouth", "Bitters"],
  instructions: "Stir bourbon, sweet vermouth, and bitters with ice. Strain into a chilled glass and garnish with a cherry."
  },
  "Manhattan (Rye)": {
    ingredients: ["Rye", "Vermouth", "Bitters"],
    instructions: "Stir rye, sweet vermouth, and bitters with ice. Strain into a chilled glass and garnish with a cherry."
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
    ingredients: ["Bourbon", "Milk", "Simple Syrup"],
    instructions: "Shake bourbon, milk, and simple syrup with ice. Strain into a glass and garnish with grated nutmeg."
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
    instructions: "Muddle mint with simple syrup, add crushed ice and bourbon, then stir until chilled."
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
    ingredients: ["Gin", "Vermouth", "Campari"],
    instructions: "Stir gin, sweet vermouth, and Campari with ice. Strain into a rocks glass and garnish with orange peel."
  },
  "Negroni Bianco": {
    ingredients: ["Gin", "Dry Vermouth", "Aperol"],
    instructions: "Stir gin, dry vermouth, and Aperol with ice. Strain into a chilled glass and garnish with a lemon twist."
  },
  "Negroni Sbagliato": {
    ingredients: ["Prosecco", "Campari", "Sweet Vermouth"],
    instructions: "Pour Prosecco, Campari, and sweet vermouth over ice in a glass. Stir gently and garnish with an orange slice."
  },
  "New York Sour": {
    ingredients: ["Bourbon", "Lemon Juice", "Simple Syrup", "Red Wine"],
    instructions: "Shake bourbon, lemon juice, and simple syrup with ice. Strain into a glass and float red wine on top."
  },
  "Old Fashioned": {
    ingredients: ["Bourbon", "Simple Syrup", "Bitters"],
    instructions: "Muddle sugar with bitters, add bourbon and ice, and stir. Garnish with orange peel."
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
    instructions: "Muddle sugar with bitters, add bourbon and ice, stir, then rinse a chilled glass with absinthe and strain the drink into it."
  },
  "Sazerac (Rye)": {
    ingredients: ["Rye", "Simple Syrup", "Bitters", "Absinthe"],
    instructions: "Muddle sugar with bitters, add rye and ice, stir, then rinse a chilled glass with absinthe and strain the drink into it."
  },
  "Scofflow": {
    ingredients: ["Bourbon", "Lemon Juice", "Simple Syrup", "Egg White"],
    instructions: "Shake all ingredients without ice to emulsify the egg white, then add ice and shake again. Strain into a chilled glass."
  },
  "Screwdriver": {
    ingredients: ["Vodka", "Orange Juice"],
    instructions: "Pour vodka over ice and top with orange juice. Stir gently and garnish with an orange slice."
  },
  "Sea Breeze": {
    ingredients: ["Vodka", "Cranberry Juice", "Grapefruit Juice"],
    instructions: "Pour vodka over ice, add cranberry juice and grapefruit juice. Stir gently and garnish with a lime wedge."
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
  "Whiskey Sour (Bourbon)": {
    ingredients: ["Bourbon", "Lemon Juice", "Simple Syrup"],
    instructions: "Shake bourbon, lemon juice, and simple syrup with ice. Strain and serve with lemon twist."
  },
  "Whiskey Sour (Rye)": {
    ingredients: ["Rye", "Lemon Juice", "Simple Syrup"],
    instructions: "Shake rye, lemon juice, and simple syrup with ice. Strain into a glass and garnish with a cherry."
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