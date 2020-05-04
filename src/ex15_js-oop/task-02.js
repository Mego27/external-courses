let apartment = {
    rooms: [],
    searchDevice: function(name) {
        for(let i = 0; i < apartment.rooms.length; i++) {
            for(let j = 0; j < apartment.rooms[i].devices.length; j++) {
                if(apartment.rooms[i].devices[j].name === name) {
                    return `${name} находится там: ${apartment.rooms[i].name}`;
                }
            }
        }
        return "Не найдено";
    }
};

class Device {
    constructor(name, power, isOn) {
        this.name = name;
        this.power = power;
        this.isOn = isOn;
    }
}
class LightFixtures extends Device {
    constructor(name, power, isOn, lightFlow) {
        super(name, power, isOn);
        this.lightFlow = lightFlow;
    }
}
class Television extends Device {
    constructor(name, power, isOn, diagonal) {
        super(name, power, isOn);
        this.diagonal = diagonal;
    }
}
class ChargingDevice extends Device {
    constructor(name, power, isOn, type) {
        super(name, power, isOn);
        this.type = type;
    }
}

class Room {
    constructor(name, devices) {
        this.name = name;
        this.devices = devices;
    }
    computeAllPower() {
    let power = 0;
    this.devices.forEach(element => {
        if(element.isOn){
            power += element.power;
        }
    });
    return power;
  }
}
const lamp1 = new LightFixtures("Люстра в зале", 0.5, true, 700);
const lamp2 = new LightFixtures("Люстра на кухне", 0.5, true, 600);
const lamp3 = new LightFixtures("Люстра в спальне", 0.5, true, 500);
const lamp4 = new LightFixtures("Настольная лампа", 0.5, true, 300);
const lamp5 = new LightFixtures("Лампа у кровати", 0.5, false, 250);
const tvKitchen = new Television("Телевизор на кухне", 2, true, 30);
const tvBedroom = new Television("Телевизор в спальне", 1.5, false, 24);
const tvHall = new Television("Телевизор в зале", 4, true, 45);
const chargingDevice1 = new ChargingDevice("Зарядка для ноутбука мамы",
2, false, "Ноутбук");
const chargingDevice2 = new ChargingDevice("Зарядка для ноутбука папы",
1.5, true, "Ноутбук");
const chargingDevice3 = new ChargingDevice("Зарядка для телефона мамы",
2, true, "Телефон");
const chargingDevice4 = new ChargingDevice("Зарядка для телефона папы",
2, false, "Телефон");
const chargingDevice5 = new ChargingDevice("Зарядка для моего телефона",
2, false, "Телефон");
const kitchen = new Room("Кухня", [lamp2, tvKitchen, chargingDevice3]);
apartment.rooms.push(kitchen);
const hall = new Room("Зал", [lamp1, lamp4, tvHall,
chargingDevice2, chargingDevice4]);
apartment.rooms.push(hall);
const bedroom = new Room("Спальня",
[lamp3, lamp5, tvBedroom, chargingDevice5, chargingDevice1, chargingDevice2]);
apartment.rooms.push(bedroom);
console.log(hall.computeAllPower());
console.log(apartment.searchDevice("Телевизор на кухне"));