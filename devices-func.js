function Device(name, power, brand) {
    this.name = name;
    this.power = power ? power : 0;
    this.brand = brand ? brand : 'Noname';
    this.isPlugin = false;
    console.log(`Created a new device. Name ${this.name}, power: ${this.power}, brand: ${this.brand}`);
}

Device.prototype.plugin = function() {
    console.log(this.name + ' device plugged. Power is ' + this.power);
    this.isPlugin = true;
}

Device.prototype.unplug = function() {
    console.log(this.name + ' device unplugged');
    this.isPlugin = false;
}

// Monitor
function Monitor(name, power, brand, size) {
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.size = size;
}
Monitor.prototype = new Device();

// PC
function PC(name, power, brand, cpu) {
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.cpu = cpu;
}
PC.prototype = new Device();

const myMonitor = new Monitor('my monitor', 150, 'LG', 36);
const myPC = new PC('my PC', 800, 'HP', 'Intel');

myMonitor.plugin();
myPC.plugin();

myPC.unplug();