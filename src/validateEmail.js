
export let validateEmail = () =>
{
    let required = ["email","name","message"];

    let validated = true;

    let re =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    let validationMessage = (word) => <p>"Please enter a valid " {word} </p>;
    let errorMessage = []
    for(let each of required){
        console.log("each",each ,":", this.state.each)
        console.log("each = ",each==="")
        if(each === "email"){
            let isEmail = re.test(this.state.email)
            validated = isEmail;
            if(!isEmail) errorMessage = errorMessage.concat(validationMessage(each))
        }
        if (this.state[each] === "" || this.state[each] === undefined ){
            validated =false;
            errorMessage = errorMessage.concat(validationMessage(each))
        }


    };



    console.log("submit data : ",this.state,validated)

    if(validated === true) {
        return true
    }
    else {
        this.setState({
            formSubmitted: false,
            error:errorMessage
        })
    } return false
}