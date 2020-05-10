import ElementFactory from '../factories/ElementFactory';

class ElementInterrelationsService {
  constructor(elementService, elementList) {
    this.element = elementService;
    this.elementList = elementList;
  }

  /**
	 * @param {object} element
	 * @return {boolean}
	 */
  isFirstConditionElement(element) {
    const firstConditionElementId = Object.keys(this.elementList)
      .find((key) => this.isCondition(this.elementList[key]));

    return this.getElementId(element) === Number(firstConditionElementId);
  }

  /**
	 * @param {object} element
	 * @return {array}
	 */
  childElementList() {
    const childElement = [];

    for (const elementIndex in this.elementList) {
      if (this.elementList[elementIndex].parentId === this.element.elementId) {
        childElement.push(this.elementList[elementIndex]);
      }
    }

    return childElement;
  }
}
