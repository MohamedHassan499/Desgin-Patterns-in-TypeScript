import Duck from './Duck';

class RubberDuck extends Duck{
    display(): void{
        console.log('I am rubber duck');
    }
}

export default RubberDuck;