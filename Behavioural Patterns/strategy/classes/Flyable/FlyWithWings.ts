import FlyBehavior from './FlyBehavior';

class FlyWithWings implements FlyBehavior{
    fly(): void{
        console.log('I can fly with two wings');
    }
}

export default FlyWithWings;