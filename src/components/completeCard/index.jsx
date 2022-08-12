import { FaMars, FaVenus } from "react-icons/fa";


import "../completeCard/style.css"


const CompleteCard = ({personCards, findDetails, setDetailUser}) => {
    
    return (
    <>
    {
    personCards.map((person, index) => (

        <li className="complete">
            <img src={person.picture.medium} alt="user" />
            <h3>{person.name.first} {person.name.last}</h3>
            <h4>{person.location.city} {person.location.country}</h4>
            <span>Sexo: {person.gender === 'male' ? <FaMars/> :  <FaVenus/>}</span>
            <h4>Nascimento: 
            {person.dob.date.split('')[8]}
            {person.dob.date.split('')[9]}
            /
            {person.dob.date.split('')[5]}
            {person.dob.date.split('')[6]}
            /            
            {person.dob.date.split('')[0]}
            {person.dob.date.split('')[1]}
            {person.dob.date.split('')[2]}
            {person.dob.date.split('')[3]}</h4>
            <h4>Idade: {person.dob.age}</h4>
            <h4>Tel: {person.phone}</h4>
            <h4>End: {person.location.street.name} {person.location.street.number}</h4>
            <button onClick={() => setDetailUser([])}> voltar </button>

            
        </li>
        ))
    } 
    </>
        )
}

export default CompleteCard


// card completo exibe

// foto
// nome , estado e pais , celular , sexo , email , telefone , rua e numero