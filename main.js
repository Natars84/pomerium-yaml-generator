const workspace = Blockly.inject('blocklyDiv', {
  toolbox: {
    "kind": "flyoutToolbox",
    "contents": [
      { "kind": "block", "type": "route_rule" },
      { "kind": "block", "type": "route_action" },
      { "kind": "block", "type": "policy_and" },
      { "kind": "block", "type": "policy_or" },
      { "kind": "block", "type": "policy_not" }
    ]
  }
});

/* function generateYaml() {
  // On utilise notre générateur YAML personnalisé
  const code = yamlGenerator.workspaceToCode(workspace);
  document.getElementById('output').innerText = code;
} */