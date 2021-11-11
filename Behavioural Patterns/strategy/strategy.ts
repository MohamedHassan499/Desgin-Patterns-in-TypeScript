import DecoyDuck from './classes/Ducks/DecoyDuck';
import FlyNoWay from './classes/Flyable/FlyNoWay';
import FlyWithWings from './classes/Flyable/FlyWithWings';
import MuteQuack from './classes/Quackable/MuteQuack';

(function(){

    const decoyDuck = new DecoyDuck(new FlyWithWings(), new MuteQuack());
    decoyDuck.performFly(); // I can fly with two wings
    decoyDuck.setFlyBehavior(new FlyNoWay());
    decoyDuck.performFly(); // I cannot fly

})()