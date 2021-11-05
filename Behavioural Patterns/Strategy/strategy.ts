(function(){

    const decoyDuck = new DecoyDuck();
    decoyDuck.setFlyBehavior(new FlyNoWay());
    decoyDuck.performFly();

})()