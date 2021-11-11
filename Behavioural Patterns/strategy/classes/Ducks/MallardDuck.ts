import Duck from './Duck';

class MallardDuck extends Duck{
    display(): void{
        console.log('I am mallard duck');
    }
}

export default MallardDuck;