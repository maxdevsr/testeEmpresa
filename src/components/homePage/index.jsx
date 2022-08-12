import { useEffect, useState } from "react";
import { BASEURL } from "../../service"
import CompleteCard from "../completeCard";
import ListCard from "../listcard";

const HomePage = () => {

    const [personCards, setPersonCards] = useState([]);
    console.log(personCards)
    const [page, setPage] = useState(1)
    const [detailUser, setDetailUser] = useState([])
    console.log(detailUser)

useEffect(() => {
    fetch(BASEURL)
    .then((res) => res.json())
    .then((res) => setPersonCards(res.results))
    .catch((err) => console.log(err))
}, [page]);

// useEffect(() => {
// <CompleteCard detailUser={detailUser}/>
// }, [detailUser])

function findDetails (id) {
    const userClicado = personCards.find((user) => user.login.uuid === id)
    setDetailUser([userClicado])
}

function attPage (){
    setPage(page + 1)
}

return (
    <>
    {
        detailUser.length > 0 ? 
        <CompleteCard personCards={detailUser} setDetailUser={setDetailUser}/>
        :
        <ListCard 
        personCards={personCards}
        findDetails={findDetails}
        />

    }
    <button onClick={() => attPage()}>Mais usuarios</button>
    </>)

}

export default HomePage