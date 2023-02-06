class SuperMath {
    constructor() {
        this.obj = {
            x: 2,
            y: 2,
            znak: "+"
        }
    }

    input() {
        let newObj = {};

        newObj.x = prompt('type a number');
        newObj.y = prompt('type another one');
        newObj.znak = prompt('type an operator +, -, *, /');

        return newObj;
    }

    check(obj = this.obj) {
        let check = confirm(`Would you like ${obj.x} ${obj.znak} ${obj.y}`);
        let resalt;

        if (check) {
                switch (obj.znak) {
                case "+":
                    resalt = Number(obj.x) + Number(obj.y);
                    break;
                case "-":
                    resalt = Number(obj.x) - Number(obj.y);
                    break;
                case "*":
                    resalt = Number(obj.x) * Number(obj.y);
                    break;
                case "/":
                    resalt = Number(obj.x) / Number(obj.y);
                    break;
                default:
                    resalt = "Something went wrong";
            }
            return alert(resalt);
        } else {
            let newObj = this.input();
            this.check(newObj);
        }
    }
}
export default SuperMath;