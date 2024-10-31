import { Controller } from "@hotwired/stimulus";

import BpmnViewer from "bpmn-js/lib/Viewer";

export default class extends Controller {
  static targets = ["container"];

  static values = { xml: String };

  #viewer;

  connect() {
    this.#viewer = new BpmnViewer({
      container: this.containerTarget,
    });

    this.#viewer.importXML(this.xmlValue);
  }

  disconnect() {
    this.#viewer.clear();
  }
}
