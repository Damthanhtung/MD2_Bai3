  enum Speed {
    SLOW = 1,
    MEDIUM,
    FAST
}
  class Fan {
    private _speed: Speed = Speed.SLOW;
    private _on = false;
    private _color = "blue";
    private _radius = 5;

    constructor(speed: Speed, on: boolean, color: string, radius: number) {
          this._speed = speed;
          this._on = on;
          this._color = color;
          this._radius = radius;
      }

      getSpeed(): Speed {
          return this._speed;
      }

      getOn(): boolean {
          return this._on;
      }

      getColor(): string {
          return this._color;
      }

      getRadius(): number {
          return this._radius;
      }

      setSpeed(value: Speed) {
          this._speed = value;
      }

      setOn(value: boolean) {
          this._on = value;
      }

      setColor(value: string) {
          this._color = value;
      }

      setRadius(value: number) {
          this._radius = value;
      }
      toString () {
          return `Trang thai quat: ${this._on}, Toc do quat: ${this._speed}, Mau quat: ${this._color}, Ban kinh quat: ${this._radius}`
      }
  }
  let fan = new Fan(Speed.FAST, true,'yellow', 10)
  console.log(fan.toString())



