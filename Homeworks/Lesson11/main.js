// 1
const list = document.querySelector('.main-list');
const url = new URL('https://dummyjson.com/carts');
url.searchParams.append('limit', 10);
fetch(url)
    .then(res =>
        res.json()
    )
    .then(data => {
        data.carts.forEach(cart => {
            const hdLi = document.createElement('li');
            list.appendChild(hdLi);
            const subList = document.createElement('ol');
            subList.classList.add('sub-list');
            hdLi.appendChild(subList);
            for (const keyCart in cart) {
                if (keyCart === 'products') {
                    const liProducts = document.createElement('li');
                    liProducts.innerText = `${keyCart}:`
                    cart[keyCart].forEach(product => {
                        const productsList = document.createElement('ul');
                        for (const keyProduct in product) {
                            const liElmProduct = document.createElement('li');
                            liElmProduct.innerText = `${keyProduct}: ${product[keyProduct]}`;
                            productsList.appendChild(liElmProduct);
                        }
                        liProducts.appendChild(productsList);
                    })
                    subList.appendChild(liProducts)
                } else {
                    const li = document.createElement('li');
                    li.innerText = `${keyCart}: ${cart[keyCart]}`;
                    subList.appendChild(li)
                }
            }
        })
    });

// 2
const recipes = document.querySelector('.recipes');
const url2 = new URL('https://dummyjson.com/recipes');
url2.searchParams.append('limit', 10);
fetch(url2)
    .then(res => res.json())
    .then(data => {
        data.recipes.forEach((recip, index) => {
            const h2 = document.createElement('h2');
            h2.innerText = recip.name;
            console.log(`---------${index+1}---------`)
            for (const recipKey in recip) {
                console.log(recipKey + ':' ,recip[recipKey])
                if (recipKey === 'ingredients') {
                    const listIngs = document.createElement('ul');
                    recip[recipKey].forEach( ing => {
                        const liIng = document.createElement('li');
                        liIng.innerText = ing;
                        listIngs.appendChild(liIng);
                    })
                    recipes.appendChild(h2);
                    recipes.appendChild(listIngs);
                }
            }
        })
    })




