function onFormSubmit(evt){
    evt.preventDefault()
    console.log("Submitted the form")
}

export default function Form(){
    return(
        <form onSubmit={onFormSubmit}>
             <hr/>
            This is a Form
            <button >Submit</button>
           
        </form>
    )
}