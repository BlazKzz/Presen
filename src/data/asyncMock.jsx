export const products = [
    {
        id: 1,
        name: 'stone cup',
        price: 299,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 10,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-1.jpg',
        category: 'pantalones',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 2,
        name: 'gray bag',
        price: 300,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-2.jpg',
        category: 'pantalones',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 3,
        name: 'chiar',
        price: 310,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-3.jpg',
        category: 'pantalones',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 4,
        name: 'STool',
        price: 310,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-4.jpg',
        category: 'pantalones',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 5,
        name: 'stone cup',
        price: 299,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-1.jpg',
        category: 'buzo',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 6,
        name: 'gray bag',
        price: 300,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-2.jpg',
        category: 'buzo',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 7,
        name: 'chiar',
        price: 310,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-3.jpg',
        category: 'buzo',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 8,
        name: 'STool',
        price: 310,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-4.jpg',
        category: 'buzo',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 9,
        name: 'stone cup',
        price: 299,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-1.jpg',
        category: 'buzo',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 10,
        name: 'gray bag',
        price: 300,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-2.jpg',
        category: 'buzo',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 11,
        name: 'chiar',
        price: 310,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-3.jpg',
        category: 'buzo',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 12,
        name: 'STool',
        price: 310,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-4.jpg',
        category: 'buzo',
        sizes: ['S', 'M', 'L']
    },
];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 2500);
    });
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    });
};
