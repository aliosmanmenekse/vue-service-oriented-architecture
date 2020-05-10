import ElementEnums from '../enums/ElementEnums';

class ElementConditionsService {
  constructor(elementService) {
    this.element = elementService;
  }

  /**
	 * @return {boolean}
	 */
  isWait() {
    return this.element.name === ElementEnums.WAIT;
  }

  /**
	 * @return {boolean}
	 */
  isSms() {
    return this.element.name === ElementEnums.SMS;
  }
}
