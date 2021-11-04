//get the switchers

    window.onload = () => {
        const locationSwitchers = document.querySelectorAll('[data-switcher]')
    
        for (let counter = 0; counter < locationSwitchers.length; counter++) {
            const switcher = locationSwitchers[counter]
            const locationId = switcher.dataset.item
            // "data-ITEM"
    
            switcher.addEventListener('click', () => {
                document.querySelector('.locations-buttons .location-item.is-active').classList.remove('is-active');
                switcher.parentNode.classList.add('is-active');
                //parentNode = li
    
                switchLocation(locationId)
            })
        }
    }


//use the switchers

function switchLocation(locationId) {  
    const currentLocation = document.querySelector('.locations-description .description-item.is-active')
    currentLocation.classList.remove('is-active')

    const nextLocation = document.querySelector(`.locations-description .description-item[data-location="${locationId}"]`)
    nextLocation.classList.add('is-active')
}