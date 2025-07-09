const drinkRecipes = {
  "Boulevardier": {
    ingredients: ["Bourbon", "Vermouth", "Campari"],
    instructions: "Stir bourbon, sweet vermouth, and Campari with ice. Strain into a chilled glass and garnish with an orange twist."
  },
  "Bourbon and Ginger": {
    ingredients: ["Bourbon", "Ginger Ale"],
    instructions: "Pour bourbon over ice and top with ginger ale. Stir gently and garnish with a lime wedge."
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
  "Daiquiri": {
    ingredients: ["Rum", "Lime Juice", "Simple Syrup"],
    instructions: "Shake rum, lime juice, and simple syrup with ice. Strain into a chilled glass."
  },
  "Gin and Tonic": {
    ingredients: ["Gin", "Tonic Water"],
    instructions: "Pour 2 oz of gin over ice and top with tonic water. Garnish with a lime wedge."
  },
  "Gin Fizz": {
    ingredients: ["Gin", "Lemon Juice", "Simple Syrup", "Soda Water"],
    instructions: "Shake gin, lemon juice, and simple syrup with ice. Strain into a glass and top with soda water."
  },
  "Gold Rush": {
    ingredients: ["Bourbon", "Lemon Juice", "Honey Syrup"],
    instructions: "Shake bourbon, lemon juice, and honey syrup with ice. Strain into a chilled glass."
  },
  "Kentucky Mule": {
    ingredients: ["Bourbon", "Ginger Beer", "Lime Juice"],
    instructions: "Pour bourbon and lime juice over ice. Top with ginger beer and garnish with a lime wedge."
  },
  "Manhattan": {
    ingredients: ["Rye", "Vermouth", "Bitters"],
    instructions: "Stir rye, vermouth, and bitters with ice. Strain into a cocktail glass and garnish with a cherry."
  },
  "Manhattan (Bourbon)": {
    ingredients: ["Bourbon", "Sweet Vermouth", "Bitters"],
    instructions: "Stir bourbon, sweet vermouth, and bitters with ice. Strain into a chilled glass and garnish with a cherry."
  },
  "Manhattan (Rye)": {
    ingredients: ["Rye", "Sweet Vermouth", "Bitters"],
    instructions: "Stir rye, sweet vermouth, and bitters with ice. Strain into a chilled glass and garnish with a cherry."
  },
  "Margarita": {
    ingredients: ["Tequila", "Lime Juice", "Triple Sec"],
    instructions: "Shake tequila, lime juice, and triple sec with ice. Strain into a salt-rimmed glass and garnish with lime."
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
  "Mint Julip": {
    ingredients: ["Bourbon", "Mint", "Simple Syrup"],
    instructions: "Muddle mint with simple syrup, add crushed ice and bourbon, then stir until chilled."
  },
  "Mojito": {
    ingredients: ["Rum", "Mint", "Lime Juice", "Soda Water"],
    instructions: "Muddle mint with lime juice and sugar. Add rum and ice, top with soda water, and stir."
  },
  "Negroni": {
    ingredients: ["Gin", "Vermouth", "Campari"],
    instructions: "Stir gin, sweet vermouth, and Campari with ice. Strain into a rocks glass and garnish with orange peel."
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
  "Rum and Coke": {
    ingredients: ["Rum", "Cola"],
    instructions: "Fill a glass with ice, pour in rum, and top with cola. Stir gently and garnish with a lime wedge."
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
  "Tequila Sunrise": {
    ingredients: ["Tequila", "Orange Juice", "Grenadine"],
    instructions: "Pour tequila and orange juice over ice. Slowly add grenadine to create a sunrise effect."
  },
  "Tom Collins": {
    ingredients: ["Gin", "Lemon Juice", "Simple Syrup", "Soda Water"],
    instructions: "Shake gin, lemon juice, and simple syrup with ice. Strain into a glass filled with ice and top with soda water."
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
};
 

  //highballer.app on porkbun