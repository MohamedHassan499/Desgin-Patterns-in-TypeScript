abstract class Duck{
    flyBehavior: FlyBehavior | null;
    quackBehavior: QuackBehavior | null;

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
        this.flyBehavior.fly();
    }
    performQuack(): void{
        this.quackBehavior.quack();
    }
}