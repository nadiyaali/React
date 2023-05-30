export default function RandListItem({myList}){
    const randIndex = Math.floor(Math.random()*myList.length)
    const randItem = myList[randIndex]
    return(
        <div>
            <p>List : {myList}</p>
            <p>Random Item : {randItem}</p>
        </div>
    )
   
}