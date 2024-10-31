# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"

pin "bpmn-modeler", to: "https://cdn.jsdelivr.net/npm/bpmn-js@17.11.1/dist/bpmn-modeler.production.min.js"
pin "bpmn-viewer", to: "https://cdn.jsdelivr.net/npm/bpmn-js@17.11.1/dist/bpmn-viewer.production.min.js"
