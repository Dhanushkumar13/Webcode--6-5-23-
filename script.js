

async function getsteelix(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/steelix")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".steelix").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png" alt="steelix" >
        </div>
        <div class="pokemon-description">
            <h1>
                Steelix
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getsteelix();

async function getraikou(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/raikou")
        .then((response)=>  response.json())
        .then((data)=>{
            document.querySelector(".raikou").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png" alt="Raikou" >
        </div>
        <div class="pokemon-description">
            <h1>
                Raikou
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getraikou();


async function getDitto(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".Ditto").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png" alt="Ditto" >
        </div>
        <div class="pokemon-description">
            <h1>
                Ditto
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getDitto();

async function getCharizard(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/charizard")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".charizard").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="charizard" >
        </div>
        <div class="pokemon-description">
            <h1>
                Charizard
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getCharizard();

async function getsceptile(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/sceptile")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".sceptile").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png" alt="sceptile" >
        </div>
        <div class="pokemon-description">
            <h1>
                Sceptile
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getsceptile();


async function getblaziken(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/blaziken")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".blaziken").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png" alt="blaziken" >
        </div>
        <div class="pokemon-description">
            <h1>
                Blaziken
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getblaziken();

async function getmudkip(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/mudkip")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".mudkip").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png" alt="mudkip" >
        </div>
        <div class="pokemon-description">
            <h1>
                Mudkip
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getmudkip();

async function getaggron(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/aggron")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".aggron").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png" alt="aggron" >
        </div>
        <div class="pokemon-description">
            <h1>
                Aggron
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getaggron();

async function getsharpedo(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/sharpedo")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".sharpedo").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png" alt="sharpedo" >
        </div>
        <div class="pokemon-description">
            <h1>
                Sharpedo
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getsharpedo();

async function gettropious(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/tropius")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".tropious").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png" alt="tropious" >
        </div>
        <div class="pokemon-description">
            <h1>
                Tropious
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

gettropious();

async function getabsol(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/absol")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".absol").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png" alt="absol" >
        </div>
        <div class="pokemon-description">
            <h1>
                Absol
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getabsol();

async function getsalamence(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/salamence")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".salamence").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png" alt="salamence" >
        </div>
        <div class="pokemon-description">
            <h1>
                Salamence
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getsalamence();

async function getmetagross(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/registeel")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".registeel").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/379.png" alt="registeel" >
        </div>
        <div class="pokemon-description">
            <h1>
                Registeel
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getmetagross();

async function getlatios(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/latios")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".latios").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/381.png" alt="latios" >
        </div>
        <div class="pokemon-description">
            <h1>
                Latios
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getlatios();

async function getkyogre(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/kyogre")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".kyogre").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png" alt="kyogre" >
        </div>
        <div class="pokemon-description">
            <h1>
                Kyogre
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getkyogre();

async function getrayquaza(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/rayquaza")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".rayquaza").innerHTML=`
            <div >
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png" alt="rayquaza" >
        </div>
        <div class="pokemon-description">
            <h1>
                Rayquaza
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getrayquaza();

async function gettorterra(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/torterra")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".torterra").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Torterra
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

gettorterra();

async function getinfernape(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/infernape")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".infernape").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Infernape
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getinfernape();

async function getpiplup(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/piplup")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".piplup").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Piplup
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getpiplup();

async function getstaraptor(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/staraptor")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".staraptor").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/398.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Staraptor
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getstaraptor();

async function getluxray(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/luxray")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".luxray").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Luxray
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getluxray();

async function getrampardos(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/rampardos")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".rampardos").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Rampardos
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getrampardos();

async function getgarchomp(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/garchomp")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".garchomp").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Garchomp
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getgarchomp();

async function getlucario(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/lucario")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".lucario").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Lucario
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getlucario();

async function getelectivire(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/electivire")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".electivire").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Electivire
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getelectivire();

async function getmagmortar(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/magmortar")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".magmortar").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/467.svg" >
        </div>
        <div class="pokemon-description">
            <h1>
                Magmortar
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getmagmortar();

async function getrotom(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/rotom")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".rotom").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Rotom
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getrotom();

async function getdarkrai(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/darkrai")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".darkrai").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/491.svg" >
        </div>
        <div class="pokemon-description">
            <h1>
                Darkrai
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getdarkrai();

async function getarceus(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/arceus")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".arceus").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Arceus
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getarceus();

async function getsamurott(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/samurott")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".samurott").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/503.svg" >
        </div>
        <div class="pokemon-description">
            <h1>
                Samurott
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getsamurott();

async function getzoroark(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/zoroark")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".zoroark").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Zoroark
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getzoroark();

async function getaxew(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/axew")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".axew").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/610.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Axew
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getaxew();

async function gethydreigon(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/hydreigon")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".hydreigon").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/635.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Hydreigon
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

gethydreigon();

async function getgreninja(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/greninja")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".greninja").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Greninja
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getgreninja();

async function getpancham(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pancham")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".pancham").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/674.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Pancham
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getpancham();

async function gethelioptile(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/helioptile")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".helioptile").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/694.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Helioptile
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

gethelioptile();

async function getsylveon(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/sylveon")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".sylveon").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Sylveon
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getsylveon();

async function gethawlucha(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/hawlucha")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".hawlucha").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/701.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Hawlucha
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

gethawlucha();

async function getdedenne(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/dedenne")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".dedenne").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/702.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Dedenne
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getdedenne();

async function getgoodra(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/goodra")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".goodra").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Goodra
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getgoodra();

async function getnoibat(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/noibat")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".noibat").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/714.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Noibat
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getnoibat();

async function getrowlet(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/rowlet")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".rowlet").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Rowlet
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getrowlet();

async function getlitten(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/litten")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".litten").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/725.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Litten
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getlitten();

async function getpopplio(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/popplio")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".popplio").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/728.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Popplio
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getpopplio();

async function getrockruff(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/rockruff")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".rockruff").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Rockruff
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getrockruff();

async function getsolgaleo(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/solgaleo")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".solgaleo").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Solgaleo
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getsolgaleo();

async function getmarshadow(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/marshadow")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".marshadow").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/802.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Marshadow
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getmarshadow();

async function getgrooky(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/grookey")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".grooky").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/810.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Grooky
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getgrooky();

async function getscorbunny(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/scorbunny")
        .then((response)=> response.json())
        .then((data)=>{
            document.querySelector(".scorbunny").innerHTML=`
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/813.png" >
        </div>
        <div class="pokemon-description">
            <h1>
                Scorbunny
            </h1>   
            <p class="Abilities">
                Abilities: ${data.abilities.map(ability=> ability.ability.name)}
            </p>
            <p class="Moves">
                Moves: ${data.moves.map(move => move.move.name)}
            </p >
            <p class="weight">
                weight: ${data.weight}
            </p>
        </div>
            `
        })
    } catch(e){
        if(e){
            console.log(e)
        }
    }

}

getscorbunny();