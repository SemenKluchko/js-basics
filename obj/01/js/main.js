;let auto = {
    name: "Audi",
    model: "Q7",
    release: 2018,
    speed: 156,
    getInfo() {
      confirm(`Some info about auto: ${this.name} ${this.model} released: ${this.release} speed: ${this.speed} km/h`);
    },
    getTime(distance) {
      let result = distance / auto.speed;

      result = Math.trunc(result) + (((result - (Math.trunc(result))) * 60) / 100) 

      for (let i = 1; i <= result; i++) {
        if (i % 5 == 0) {
            result++;
        }
    }
    result = result.toFixed(2).split(".");

    return confirm(`${result} - hour(s) and minute(s) will you need to overcome distance`);
    }
};

auto.getInfo();

const getTimeOfDistance = parseInt(
  prompt("Type distance in km"),
);

auto.getTime(getTimeOfDistance);
