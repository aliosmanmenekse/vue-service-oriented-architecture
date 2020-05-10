import ElementService from '../services/ElementService.js';
import ElementCoordinateService from '../services/ElementCoordinateService.js';

class ElementFactory {
  /**
   * @param {object} element
   */
  createElement(element) {
    return new ElementService(element);
  }

  /**
   * @param {object} element
   */
  createElementCoordinate(element) {
    return new ElementCoordinateService(this.createElement(element));
  }
}
