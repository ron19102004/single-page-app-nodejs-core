export default class AbsComponent {
    constructor() {
      if (new.target === AbsComponent) {
        throw new Error("Cannot instantiate an abstract class.");
      }
    }
    /**
     * @return {string}
     */
    render() {
      throw new Error("Abstract method must be implemented by subclass.");
    }
  }