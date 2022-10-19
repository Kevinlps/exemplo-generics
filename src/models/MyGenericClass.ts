export default class MyGenericClass<T> {
    message: T //Tipo genérico  

    constructor(message: T){
        this.message = message
    }

    sayMessage(){
        if(typeof this.message == 'string'){
            console.log(this.message)
        }else if (typeof this.message == 'number'){
            console.log(`O seu numero é ${this.message}`)
        } else if ( this.message instanceof Date) {
            console.log(`A data secreta é ${this.message.toLocaleDateString()}`)
        }else{
            console.log('Seja lá o que for , é isso :')
            console.log(this.message)
        }
    }
}