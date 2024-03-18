import EventEmitter from "events";

class StateManager extends EventEmitter {
  private state: {
    componentes?: any[];
    sub_productos?: any[];
    iniciadores?: any[];
  };
  constructor() {
    super();
    this.state = {}; // Aquí puedes almacenar tu estado
  }

  updateState(newState: any) {
    this.state = { ...this.state, ...newState };
    this.emit("stateUpdated", this.state);
  }

  getState() {
    return this.state;
  }
}

export const StateManagerInstance = new StateManager();
