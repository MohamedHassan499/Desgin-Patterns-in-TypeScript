import QuackBehavior from './QuackBehavior';

class Squeak implements QuackBehavior{
    quack(): void{
        console.log('Sqweak');
    }
}

export default Squeak;