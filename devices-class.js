class Device {
    constructor(name, power, brand) {
        this.name = name;
        this.power = power;
        this.brand = brand;
        this.isPlugin = false;
        console.log(`Created a new device. Name ${this.name}, power: ${this.power}, brand: ${this.brand}`);
    }

    plugin() {
        console.log(this.name + ' device plugged. Power is ' + this.power);
        this.isPlugin = true;
    }

    unplug() {
        console.log(this.name + ' device unplugged');
        this.isPlugin = false;
    }

    printDevice() {
        return `Name ${this.name}, power: ${this.power}, brand: ${this.brand}, plugged in: ${this.isPlugin}`;
    }
}

class Monitor extends Device {
    constructor(name, power, brand, size) {
        super(name, power, brand);
        this.size = size;
    }
    printDevice() {
        return `Name ${this.name}, power: ${this.power}, brand: ${this.brand}, size: ${this.size}. Plugged in: ${this.isPlugin}`;
    }
}

class PC extends Device {
    constructor(name, power, brand, cpu) {
        super(name, power, brand);
        this.cpu = cpu;
    }
}

const myPC = new PC('my PC', 1000, 'HP', 'Intel');
const myMonitor = new Monitor('my monitor', 200, 'LG', 36)

myMonitor.plugin()
console.log(myMonitor.printDevice())
myPC.plugin()
console.log(myPC.printDevice())

myMonitor.unplug()
console.log(myMonitor.printDevice())
