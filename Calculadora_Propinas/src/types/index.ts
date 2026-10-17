export type TMenuItem = {

    id : number
    name: string
    price: number

}

export type OrderItem = TMenuItem &{

    quantity: number

}