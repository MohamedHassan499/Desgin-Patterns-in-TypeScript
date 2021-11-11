import FlyBehavior from '../Flyable/FlyBehavior';
import QuackBehavior from '../Quackable/QuackBehavior';

interface constructorParams{
    FlyBevahiorParam: FlyBehavior;
    QuackBehaviorParam: QuackBehavior;
}

abstract class Duck{
    flyBehavior: FlyBehavior | null;
    quackBehavior: QuackBehavior | null;

    constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior){
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
    }

    swim(): void{
        console.log('I am swimming');
    }
    abstract display(): void;

    setFlyBehavior(newFlyBehavior: any): void{
        this.flyBehavior = newFlyBehavior;
    }
    setQuackBehavior(newQuackBehavior: any): void{
        this.quackBehavior = newQuackBehavior;
    }

    performFly(): void{
        this.flyBehavior?.fly();
    }
    performQuack(): void{
        this.quackBehavior?.quack();
    }
}

export default Duck;