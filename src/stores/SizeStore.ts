import { observable, action } from "mobx";

export default class SizeStore {
    @observable width: number;
    @observable height: number;

    @action setSize = () => {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    };

    constructor(){
        this.setSize();
        window.addEventListener('resize', this.setSize);
    }
}