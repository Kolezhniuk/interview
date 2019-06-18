export class EmitEvent {

    constructor(public name: any, public value?: any) { }
}

export enum Events {
    TextSelected,
    BoldChoosed,
    ItalicChoosed,
    UnderlineChoosed,
    SynLoaded
}