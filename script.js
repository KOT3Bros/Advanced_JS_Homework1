console.log('Задание 1');

// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.
// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = {
    albums: [
        {
            title: "Skillet",
            artist: "Skillet",
            year: "1996"
        },
        {
            title: "Hey You, I Love Your Soul",
            artist: "Skillet",
            year: "1998"
        },
        {
            title: "Invincible",
            artist: "Skillet",
            year: "2000"
        },
        {
            title: "Alien Youth",
            artist: "Skillet",
            year: "2001"
        },
        {
            title: "Collide",
            artist: "Skillet",
            year: "2003"
        },
        {
            title: "Comatose",
            artist: "Skillet",
            year: "2006"
        },
        {
            title: "Awake",
            artist: "Skillet",
            year: "2009"
        },
        {
            title: "Rise",
            artist: "Skillet",
            year: "2013"
        },
        {
            title: "Unleashed",
            artist: "Skillet",
            year: "2016"
        },
        {
            title: "Feel Invincible Remix EP",
            artist: "Skillet",
            year: "2017"
        },
        {
            title: "Victorious",
            artist: "Skillet",
            year: "2019"
        },
        {
            title: "Dominion",
            artist: "Skillet",
            year: "2022"
        }
    ],
    [Symbol.iterator]: function () {
        let index = 0
        const albums = this.albums

        return {
            next() {
                return index < albums.length ? { done: false, value: albums[index++] } : { done: true }
            }
        }
    }
}

for (const album of musicCollection) {
    console.log(`title: ${album.title}, artist: ${album.artist}, year: ${album.year}`);
}
console.log('');

console.log('Задание 2');

// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:
// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:
// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:
// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:
// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

const dishes = new Map()
    .set('Пицца "Маргарита"', 'Виктор')
    .set('Пицца "Пепперони"', 'Виктор')
    .set('Суши "Филадельфия"', 'Ольга')
    .set('Суши "Калифорния"', 'Ольга')
    .set('Тирамису', 'Дмитрий')
    .set('Чизкейк', 'Дмитрий')

const ordersMap = new Map()

const orders = {
    add: (clientName, ...dishes) => {
        ordersMap.set({ name: clientName }, dishes)
    },

    // В данном варианте get и cookingNow объединены в одну функцию
    get: () => {
        if (ordersMap.size === 0) {
            console.log('Заказов пока нет.');
        } else {
            for (const client of ordersMap.keys()) {
                console.log(`Заказ на имя ${client.name}:`);

                ordersMap.get(client).forEach(dish => {
                    console.log(`- ${dish} (готовит ${dishes.get(dish)})`);
                });
                
                console.log('');
            }
        }
    },

    // get: () => {
    //     if (ordersMap.size === 0) {
    //         console.log('Заказов пока нет.');
    //     } else {
    //         for (const client of ordersMap.keys()) {
    //             console.log(`Заказ на имя ${client.name}: ${ordersMap.get(client).join(', ')}`);
    //         }
    //     }
    // },

    // cookingNow: () => {
    //     if (ordersMap.size === 0) {
    //         console.log('Заказов пока нет. Повора отдыхают!');
    //     } else {
    //         ordersMap.forEach(order => {
    //             order.forEach(dish => {
    //                 console.log(`${dishes.get(dish)} готовит ${dish}`);
    //             });
    //         });
    //     }
    // }
}

orders.add('Алексей', 'Пицца "Пепперони"', 'Тирамису')
orders.add('Мария', 'Суши "Калифорния"', 'Пицца "Маргарита"')
orders.add('Ирина', 'Чизкейк')
orders.get()
// orders.cookingNow()