let domUpdates = {

  // populateCards(traveler) {
  //   let cardArea = document.querySelector('.all-cards');
  //
  //   recipes.forEach(recipe => {
  //     cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
  //     class='card'>
  //         <header id='${recipe.id}' class='card-header'>
  //           <label for='add-button' class='hidden'>Click to add recipe</label>
  //           <button id='${recipe.id}' aria-label='add-button' class='add-recipe-button card-button'><img id='${recipe.id} favorite' class='add add-recipe-button'
  //             src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
  //             recipes to cook'>
  //           </button>
  //           <label for='favorite-button' class='hidden'>Click to favorite recipe
  //           </label>
  //           <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite${recipe.id} card-button'></button>
  //         </header>
  //           <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
  //           <img id='${recipe.id}' tabindex='0' class='card-picture'
  //           src='${recipe.image}' alt='click to view recipe for ${recipe.name}'>
  //     </div>`)
  //   })
  // },

  greetUser(traveler) {
    const travelerName = document.getElementById('travelerName');
    travelerName.innerHTML = `Welcome back ${traveler.name}!`;
  },



}

export default domUpdates;
