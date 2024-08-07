import Card from "../card/Card";
import style from "./Cards.module.css";


export default function Cards({characters, onClose}) {
   return (
   <div className={style.container}>   
      {
         !characters.length
         ? <h2 className={style.aviso}>INSERT ID NUMBER...</h2>
         :
         <div className={style.cardsContainer}>
         {
         characters.map(character => (
            <Card
               key={character.id}
               id={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={onClose}
               />
         ))}
         </div>
      }
   </div>
    )
}
