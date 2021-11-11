import QuackBehavior from './QuackBehavior';

class Quack implements QuackBehavior{
    quack(): void{
        console.log('Quack');
    }
}

export default Quack;