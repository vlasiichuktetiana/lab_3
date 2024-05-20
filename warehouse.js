 const warehouse = [ 
    { id: 'ware1', company: "Apple", model: "Macbook Pro 13", image: "images/apple.png", price: "123123", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ligula sed augue pretium, ac lacinia velit finibus. Suspendisse tristique sem velit, vitae dictum velit accumsan eu. In ultrices nibh ut sagittis congue. In a tempor velit. Curabitur eu ante vel velit tincidunt pharetra consequat a dolor. Cras ac justo sed libero viverra faucibus nec at eros. Donec nec ante ipsum. Aliquam sodales neque ac lectus ornare pretium. Suspendisse feugiat luctus eros non ullamcorper."},
    { id: 'ware2', company: "Asus", model: "Zenbook 13", image: "images/asus.png", price: "1200", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ligula sed augue pretium, ac lacinia velit finibus. Suspendisse tristique sem velit, vitae dictum velit accumsan eu. In ultrices nibh ut sagittis congue. In a tempor velit. Curabitur eu ante vel velit tincidunt pharetra consequat a dolor. Cras ac justo sed libero viverra faucibus nec at eros. Donec nec ante ipsum. Aliquam sodales neque ac lectus ornare pretium. Suspendisse feugiat luctus eros non ullamcorper." },
    { id: 'ware3', company: "Asus", model: "Zenbook 13", image: "images/asus.png", price: "10000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ligula sed augue pretium, ac lacinia velit finibus. Suspendisse tristique sem velit, vitae dictum velit accumsan eu. In ultrices nibh ut sagittis congue. In a tempor velit. Curabitur eu ante vel velit tincidunt pharetra consequat a dolor. Cras ac justo sed libero viverra faucibus nec at eros. Donec nec ante ipsum. Aliquam sodales neque ac lectus ornare pretium. Suspendisse feugiat luctus eros non ullamcorper." },
    { id: 'ware4', company: "Apple", model: "Macbook Pro 13", image: "images/apple.png", price: "500", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ligula sed augue pretium, ac lacinia velit finibus. Suspendisse tristique sem velit, vitae dictum velit accumsan eu. In ultrices nibh ut sagittis congue. In a tempor velit. Curabitur eu ante vel velit tincidunt pharetra consequat a dolor. Cras ac justo sed libero viverra faucibus nec at eros. Donec nec ante ipsum. Aliquam sodales neque ac lectus ornare pretium. Suspendisse feugiat luctus eros non ullamcorper."},
    { id: 'ware5', company: "Asus", model: "Zenbook 13", image: "images/asus.png", price: "54000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ligula sed augue pretium, ac lacinia velit finibus. Suspendisse tristique sem velit, vitae dictum velit accumsan eu. In ultrices nibh ut sagittis congue. In a tempor velit. Curabitur eu ante vel velit tincidunt pharetra consequat a dolor. Cras ac justo sed libero viverra faucibus nec at eros. Donec nec ante ipsum. Aliquam sodales neque ac lectus ornare pretium. Suspendisse feugiat luctus eros non ullamcorper." },
    { id: 'ware6', company: "Apple", model: "Macbook Pro 13", image: "images/apple.png", price: "23000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ligula sed augue pretium, ac lacinia velit finibus. Suspendisse tristique sem velit, vitae dictum velit accumsan eu. In ultrices nibh ut sagittis congue. In a tempor velit. Curabitur eu ante vel velit tincidunt pharetra consequat a dolor. Cras ac justo sed libero viverra faucibus nec at eros. Donec nec ante ipsum. Aliquam sodales neque ac lectus ornare pretium. Suspendisse feugiat luctus eros non ullamcorper."},
    { id: 'ware7', company: "Asus", model: "Zenbook 13", image: "images/asus.png", price: "30000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ligula sed augue pretium, ac lacinia velit finibus. Suspendisse tristique sem velit, vitae dictum velit accumsan eu. In ultrices nibh ut sagittis congue. In a tempor velit. Curabitur eu ante vel velit tincidunt pharetra consequat a dolor. Cras ac justo sed libero viverra faucibus nec at eros. Donec nec ante ipsum. Aliquam sodales neque ac lectus ornare pretium. Suspendisse feugiat luctus eros non ullamcorper." },
    { id: 'ware8', company: "Apple", model: "Macbook Pro 13", image: "images/apple.png", price: "10000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ligula sed augue pretium, ac lacinia velit finibus. Suspendisse tristique sem velit, vitae dictum velit accumsan eu. In ultrices nibh ut sagittis congue. In a tempor velit. Curabitur eu ante vel velit tincidunt pharetra consequat a dolor. Cras ac justo sed libero viverra faucibus nec at eros. Donec nec ante ipsum. Aliquam sodales neque ac lectus ornare pretium. Suspendisse feugiat luctus eros non ullamcorper."}
];



function loadWares(filter, price_from, price_to) {
    let wares = '';
    warehouse.forEach(ware => {
        if (filter === "All" || ware.company === filter) {
            
            wares += `<div class="ware-wrapper" id="${ware.id}">
                    <img src="${ware.image}">
                    <div>
                        <div class="ware-header">
                            <span>${ware.company} ${ware.model}</span>
                            <div>
                                <button class="buy" id="buy${ware.id.substr(4)}">
                                    <img class="${ware.id}" src="images/buy.png" width="20px">
                                </button>
                                <span class="price">${ware.price}</span>
                            </div>
                        </div>

                        <p class="ware-description">
                            ${ware.description}
                        </p>
                    </div>
                </div>`
            let styles = `#${ware.id}:hover * {
                overflow:visible;
                white-space: normal;
                z-index: 1;
                max-height:auto;
                box-shadow: 0 0 5px 3px rgb(150, 150, 150);
                }
                `;
            let styleSheet = document.getElementsByTagName('style')[0].sheet;
            styleSheet.insertRule(styles);
            }
        
    });
    document.getElementById("wares").innerHTML += wares;
    if (price_from > 0 || price_to > 0) {
        let prices = Array.from(document.getElementsByClassName('price'));
        prices.forEach(price => {
            if (parseInt(price.textContent) > price_to || parseInt(price.textContent) < price_from) {
                price.parentElement.parentElement.parentElement.parentElement.remove();
            }
        })
    }
    Array.from(document.getElementsByClassName('buy')).forEach(button => button.addEventListener('click', addToCart));
}



function applyFilter() {
    const price_from = document.getElementById('price-from').value;
    const price_to = document.getElementById('price-to').value;
    document.getElementById("wares").innerHTML = "";
    let filters = Array.from(document.getElementsByClassName("checkbox"));
    let check=0;
    filters.forEach(checkbox => {
        if (checkbox.checked) {
            let label = checkbox.nextElementSibling.textContent;
            loadWares(label, price_from, price_to);
        }
        else 
        {
            check++;
        }
        if (check === filters.length) {
        loadWares("All", price_from, price_to);
        }
    });

}

if (window.location.pathname.substr(1) !== 'cart.html') {
    loadWares("All", 0, 0);
    document.getElementById("apply-button").addEventListener("click", applyFilter);
    document.getElementById("logo-wrapper").addEventListener("click", function() {
    window.location.href="index.html";
    });

    document.getElementById("cart").addEventListener("click", function(){
    window.location.href="cart.html";
});
}

