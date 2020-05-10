import ElementEnums from '../enums/ElementEnums';
import ElementTypeEnums from '../enums/ElementTypeEnums';

class ElementService {
  constructor(element) {
    this.element = element;
  }

  get id() {
    return this.element.elementId;
  }

  get name() {
  		return this.element.event.name;
  }

  get type() {
    if (this.name === ElementEnums.ON_SITE_TRIGGER) {
      return ElementTypeEnums.STARTER;
    }

    return this.element.event.type;
  }
}
