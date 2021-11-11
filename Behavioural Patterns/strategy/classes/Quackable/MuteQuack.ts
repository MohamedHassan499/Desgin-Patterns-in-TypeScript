import QuackBehavior from './QuackBehavior';

class MuteQuack implements QuackBehavior{
    quack(): void{
        console.log('I cannot quack :(');
    }
}

export default MuteQuack;