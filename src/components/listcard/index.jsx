import Card from "../card"
import "../listcard/styles.css"

const ListCard = ({personCards, findDetails}) => {

    return (
        <div className="paiCards">
        <ul className="ULcards">
        {
            personCards.map((person, index) => (
                <Card
                key={index}
                person={person}
                findDetails={findDetails}
                />
                
            ))
        }
        </ul>
        </div>
    )

}

export default ListCard