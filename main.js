const workspace = Blockly.inject('blocklyDiv', {
  toolbox: {
    "kind": "flyoutToolbox",
    "contents": [
      { "kind": "block", "type": "route_fromto" },
      { "kind": "block", "type": "route_policy" },
      { "kind": "block", "type": "route_rule" }
    ]
  }
});

function generateYaml() {
  // On utilise notre générateur YAML personnalisé
  const code = yamlGenerator.workspaceToCode(workspace);
  document.getElementById('output').innerText = code;
}