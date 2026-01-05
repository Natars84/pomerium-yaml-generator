import { CATEGORY_COLOUR, BLOCK_CATEGORY } from "./blocks/constants.js";
import "./blocks/custom_blocks.js";

/* const workspace = Blockly.inject('blocklyDiv', {
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
}); */

const workspace = Blockly.inject('blocklyDiv', {
  toolbox: {
    "kind": "categoryToolbox", // Indique qu'on veut un menu avec catégories
    "contents": [
      {
        "kind": "category",
        "name": "Routes",
        "colour": CATEGORY_COLOUR.ROUTE, // Vert
        "contents": [
          { "kind": "block", "type": "route_rule" }
        ]
      },
      {
        "kind": "category",
        "name": "Conditions",
        "colour": CATEGORY_COLOUR.POLICY_CONDITION, // Bleu
        "contents": [
          { "kind": "block", "type": "route_action" },
          { "kind": "block", "type": "policy_and" },
          { "kind": "block", "type": "policy_or" },
          { "kind": "block", "type": "policy_not" }
        ]
      }
    ]
  }
});
/* function generateYaml() {
  // On utilise notre générateur YAML personnalisé
  const code = yamlGenerator.workspaceToCode(workspace);
  document.getElementById('output').innerText = code;
} */