window.onhashchange = function(e){
    const oldURL = e.oldURL.split('#')[1]
    const newURL = e.newURL.split('#')[1]
    console.log(oldURL, newURL)
    const oldMenu = document.querySelectorAll(`.menu a[href='#${oldURL}']`)
    const newMenu = document.querySelectorAll(`.menu a[href='#${newURL}']`)
    oldMenu && oldMenu.classList.remove('selected')
    newMenu && newMenu.classList.add('selected')

}