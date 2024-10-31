import { Controller } from "@hotwired/stimulus";

import "bpmn-viewer";

export default class extends Controller {
  static targets = ["container"];

  static values = { xml: String };

  #viewer;

  connect() {
    this.#viewer = new BpmnJS({
      container: this.containerTarget,
    });

    this.#viewer.importXML(this.xmlValue);
  }

  disconnect() {
    this.#viewer.clear();
  }
}
