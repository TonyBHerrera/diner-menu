const entreeMenu = {
    'chicken': 9,
    'steak': 11,
    'salmon': 10,
    'burger': 8
};

const sideMenu = {
    'mashed potatoes': 3,
    'corn': 2,
    'fries': 3,
    'broccoli': 2,
    'mac & cheese': 4
};

const listMenuItems = menu => {
    let menuString = []
    Object.keys(menu).map(item => {
        menuString.push(` ${item}`)
    })
    return menuString.join()
}

const entreeMenuComments = {
    'burger': 'Oh great choice! try it with our fries they are to die for.',
    'steak': 'Medium rare is the only way to order this one.',
    'salmon': 'nice choice, lately i have been trying to eat more healthy as well.',
    'chicken': 'My favorite dish by far, try it with the Mac & Cheese'
}

const sideMenuComments = {
    'mashed potatoes': 'Gotta love the mashed potatoes and gravy.',
    'corn': "I'll make sure to bring the butter out with that.",
    'fries': 'Extra crispy and fantastic!',
    'broccoli': 'Steamed veggies are always the way to go.',
    'carrots': "I heard they're great for the eyes.",
    'mac & cheese': "Lovely, this dish is oven-baked to perfection"
};



alert('Welcome to the diner drive-ins and dives, Im your host Guy Fieri!')
alert(`For our main dishes we have${listMenuItems(entreeMenu)}.\nThey also come with two side dishes, which are${listMenuItems(sideMenu)}.`)

const entreeChoice = prompt('Which entree would you like?')

alert(`The ${entreeChoice}? ${entreeMenuComments[entreeChoice]}`)
alert(`The ${entreeChoice} is also going to be $${entreeMenu[entreeChoice]}.`)

const firstSideChoice = prompt('What would you like for your first side?')

alert(`${sideMenuComments[firstSideChoice]}\nThe ${firstSideChoice} will be $${sideMenu[firstSideChoice]}.`)

const secondSideChoice = prompt('What would you like for your second side?')

alert(`${sideMenuComments[secondSideChoice]}\nThe ${secondSideChoice} will be $${sideMenu[secondSideChoice]}.`)

const mealTotal = (entreeMenu[entreeChoice] + sideMenu[firstSideChoice] + sideMenu[secondSideChoice]);

alert(`Okay for the ${entreeChoice}, ${firstSideChoice}, and ${secondSideChoice}, your total comes out to $${mealTotal}.`)