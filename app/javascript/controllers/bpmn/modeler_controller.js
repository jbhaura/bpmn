import { Controller } from "@hotwired/stimulus";

import "bpmn-modeler";

export default class extends Controller {
  static targets = ["container", "xmlOutput"];

  static values = { xml: String };

  #newDiagramXML = `
  <?xml version="1.0" encoding="UTF-8"?>
  <bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn">
    <bpmn2:process id="Process_1" isExecutable="false">
      <bpmn2:startEvent id="StartEvent_1"/>
    </bpmn2:process>
    <bpmndi:BPMNDiagram id="BPMNDiagram_1">
      <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1" />
    </bpmndi:BPMNDiagram>
  </bpmn2:definitions>
  `;

  #modeler;

  connect() {
    this.#modeler = new BpmnJS({
      container: this.containerTarget,
    });

    if (this.xmlValue.trim() !== "") {
      this.#modeler.importXML(this.xmlValue);
    } else {
      this.#modeler.importXML(this.#newDiagramXML);
    }

    this.#modeler.on("commandStack.changed", this.#handleChange.bind(this));
  }

  async #handleChange() {
    const { xml } = await this.#modeler.saveXML();
    this.xmlOutputTarget.value = xml;
  }
}
