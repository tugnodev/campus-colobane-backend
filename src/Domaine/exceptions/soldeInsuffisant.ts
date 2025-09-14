export class CheckSolde {
    private accountBalance : number;
    private cardBalance : number;

    constructor( account : number, card : number ){
        this.accountBalance = account;
        this.cardBalance = card;
    }

    enought () : boolean {
        const diff = this.accountBalance - this.cardBalance;

        if (diff < 0) {
            return false
        }else{
            return true
        }
    }
}