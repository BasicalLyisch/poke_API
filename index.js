

  const imgElement = document.getElementById("pokemonSprite");

async function fetch_sprite(){
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const pokename_ToDisplay = document.getElementById("pokemon_displayedName");
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
    const pokemonHP = document.getElementById("pokemon_HP");
    const pokemonATK = document.getElementById("pokemon_ATK");
    const pokemonDEF = document.getElementById("pokemon_DEF");
    const pokemonSATK = document.getElementById("pokemon_SATK");
    const pokemonSDEF = document.getElementById("pokemon_SDEF");
    const pokemonSPEED = document.getElementById("pokemon_SPEED");

    if(!response.ok){
      imgElement.src = "extra_images/missingno.png";
      pokename_ToDisplay.textContent = "missgno omg";
      pokemonHP.textContent = "!?";
      pokemonATK.textContent ="!?";
      pokemonDEF.textContent ="!?";
      pokemonSATK.textContent ="!?";
      pokemonSDEF.textContent ="!?";
      pokemonSPEED.textContent = "!?";
      throw new Error("not found");
    }

    const data = await response.json();
    console.log(data);
    const pokemon_sprite = data.sprites.front_default //"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png" // ;
    
    console.log(pokemon_sprite);
    
    // const imgElement = document.getElementById("pokemonSprite");
    
    imgElement.src = pokemon_sprite;
    imgElement.style.display = "block";

    console.log(`currently displaying: ${pokemonName}`)
   
    //stats:
    pokename_ToDisplay.textContent = data.species.name;
    console.log(pokename_ToDisplay);
    
    const pokemonHP_path = getHP(data);
    const pokemonATK_path = getATK(data);          
    const pokemonDEF_path = getDEF(data);
    const pokemonSATK_path = getSATK(data); 
    const pokemonSDEF_path = getSDEF(data);
    const pokemonSPEED_path = getSPEED(data);

    pokemonHP.textContent = pokemonHP_path;
    pokemonATK.textContent = pokemonATK_path;
    pokemonDEF.textContent = pokemonDEF_path;
    pokemonSATK.textContent = pokemonSATK_path;
    pokemonSDEF.textContent = pokemonSDEF_path;
    pokemonSPEED.textContent = pokemonSPEED_path;


    console.log(pokemonHP);
  } 
  catch(error){
    console.error(error);
    if (imgElement){
      imgElement.src = "extra_images/missingno.png";
      pokename_ToDisplay.textContent = "missgno omg";
      pokemonHP.textContent = "!?wha";
      pokemonATK.textContent ="!?wha";
      pokemonDEF.textContent ="!?wha";
      pokemonSATK.textContent ="!??";
      pokemonSDEF.textContent ="!??";
      pokemonSPEED.textContent = "!??";
    } else {
      console.error('imgElement is null or undefined');
    }
  }
}

const current_action = document.getElementById("current_action");

function getHP(data){
  const {stats: [{base_stat}]} = data; // first child, which is index 0 - stats, [0]:
  return base_stat;
}

function getATK(data){
  const {stats, [1]:base_stat} = data;
  return stats[1].base_stat;
} 

function getDEF(data){
  const{stats, [2]:base_stat} = data;
  return stats[2].base_stat;
}

function getSATK(data){
  const{stats, [3]:base_stat} = data;
  return stats[3].base_stat;
}

function getSDEF(data){
  const{stats, [4]:base_stat} = data;
  return stats[4].base_stat;
}

function getSPEED(data){
  const{stats, [5]:base_stat} = data;
  return stats[5].base_stat;
}




