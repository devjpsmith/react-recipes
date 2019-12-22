const mockMeals = [
    { favorite: true, day: 'Today', imageUrl: '', title: 'Chicken Shawarma', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { favorite: false, day: 'Today', imageUrl: '', title: 'Arroz Con Leche', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { favorite: false, day: 'Tomorrow', imageUrl: '', title: 'Sloppy Joes', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
];

class Meals {
    static get = (top) => {
        return new Promise((resolve, reject) => {
            resolve(mockMeals);
        })
    };
}

export default Meals;