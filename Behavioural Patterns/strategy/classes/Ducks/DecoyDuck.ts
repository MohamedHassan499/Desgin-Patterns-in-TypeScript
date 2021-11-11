import Duck from './Duck';

class DecoyDuck extends Duck{
    display(): void{
        console.log('I am decoy duck');
    }
}

export default DecoyDuck;