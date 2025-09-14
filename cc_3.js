let customers = [
    {name: "LuKayn", email: "GuiltyGhost24@gamil.com", purchases:["Elite Series 2 Controller", "Samsung Galaxy Buds 3 FE", "iPhone 16 Pro Case"]},
    {name: "Marco", email: "Marcopolo@gmail.com", purchases: ["Xbox Controller", "Xbox Microphone", "4K Webcam"]},
{name: "Hutch", email: "Hutchbby@gmail.com", purchases: ["PS Controller", "PS Microphone", "Elgato"]},
{name: "Steph", email: "GhostlyMaiden23@gmail.com", purchases: ["Switch Controller", "Switch Microphone", "Nintendo Switch 2"]}]
customers.push({name: "Daniel", email: "WonderGurt@gmail.com", purchases: ["G25HERO Mouse", "K25 Keyboard", "27 Inch Curved Monitor"]})
customers.shift(0)
customers[0].email = "MarcoTheGreat@gmail.com"
customers[2].purchases.push("Super Smash Bros Ultimate")
customers.forEach(customers => console.log(`${customers.name} | ${customers.email} | This person has ${customers.purchases.length} purchases.`))