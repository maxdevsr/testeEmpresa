import { FaMars, FaVenus } from "react-icons/fa";
import "../card/styles.css"

const Card = ({person, findDetails}) => {
    return (
        <li className="cards">
            <h3>{person.name.first} {person.name.last}</h3>
            <span>{person.gender === 'male' ? <FaMars/> :  <FaVenus/>}</span>
            <img src={person.picture.medium} alt="user" />
            <h4>{person.phone}</h4>
            <h4>
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

            <button onClick={() => findDetails(person.login.uuid)}>Detalhes</button>

            
        </li>
    )
}

export default Card

// -Nome e Sobrenome
// -Foto
// -Telefone
// -Data Nascimento dd/mm/aaaa
// -Sexo (Para masculino ícone fa-mars / Para feminino fa-venus)