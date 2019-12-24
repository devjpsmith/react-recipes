const mockMeals = [
    { id: 1, favorite: true, day: 'Today', imageUrl: 'https://www.edamam.com/web-img/52c/52c78ca34c8a656e8c4c72b3515de843.jpg', title: 'Chicken Shawarma', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 2, favorite: false, day: 'Today', imageUrl: 'https://www.edamam.com/web-img/5b5/5b54ebd55fb9b1a2fca3a1dacd3abc05.png', title: 'Arroz Con Leche', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 3, favorite: false, day: 'Tomorrow', imageUrl: 'https://www.edamam.com/web-img/b29/b2988fe27ff8b32a086e59ecd482af74.jpg', title: 'Sloppy Joes', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
];

class Meals {
    static get = (top) => {
        return new Promise((resolve, reject) => {
            resolve(mockMeals);
        })
    };
}

export default Meals;