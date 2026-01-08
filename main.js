import { CATEGORY_COLOUR, BLOCK_CATEGORY } from "./blocks/constants.js";
import "./blocks/custom_blocks.js";

// Création de l'espace de travail Blockly avec un menu à catégories
const workspace = Blockly.inject('blocklyDiv', {
  toolbox: {
    "kind": "categoryToolbox", // Indique qu'on veut un menu avec catégories
    "contents": [
      {
        "kind": "category",
        "name": "Politiques - routage",
        "colour": CATEGORY_COLOUR.ROUTE,
        "contents": [
          { "kind": "block", "type": "route_main" },
          { "kind": "block", "type": "route_rule" },
          { "kind": "block", "type": "route_action" }
        ]
      },
      {
        "kind": "category",
        "name": "Politiques - opérations logiques",
        "colour": CATEGORY_COLOUR.POLICY_LOGIC,
        "contents": [
          { "kind": "block", "type": "policy-logic_and" },
          { "kind": "block", "type": "policy-logic_or" },
          { "kind": "block", "type": "policy-logic_not" },
          { "kind": "block", "type": "policy-logic_nor" }
        ]
      },
      {
        "kind": "category",
        "name": "Politiques - conditions",
        "colour": CATEGORY_COLOUR.POLICY_CONDITION,
        "contents": [
          { "kind": "block", "type": "policy_criteria_domain" },
          { "kind": "block", "type": "policy_criteria_email" },
          { "kind": "block", "type": "policy_criteria_user" },
          { "kind": "block", "type": "policy_criteria_http_method" },
          { "kind": "block", "type": "policy_criteria_http_path" },
          { "kind": "block", "type": "policy_criteria_authenticated_user" },
          { "kind": "block", "type": "policy_criteria_allow" },
          { "kind": "block", "type": "policy_criteria_reject" }
        ]
      }
    ]
  }
});

// Ajout de la barre de recherche
// On teste les 3 cachettes possibles du plugin
const SearchPlugin = window.BlocklySearch?.WorkspaceSearch || 
                     Blockly.WorkspaceSearch || 
                     window.WorkspaceSearch;

if (SearchPlugin) {
    const workspaceSearch = new SearchPlugin(workspace); 
    workspaceSearch.init();
    console.log("Recherche initialisée avec succès");
} else {
    // Petit hack : on liste ce qu'il y a dans l'objet global pour trouver le plugin
    console.log("Objets disponibles :", { BlocklySearch: window.BlocklySearch, BlocklyWS: Blockly.WorkspaceSearch });
    console.error("Le plugin de recherche n'a pas pu être trouvé.");
}


// Redimensionnement automatique si la fenêtre change
window.addEventListener('resize', function () {
  Blockly.svgResize(workspace);
}, false);

// Bouton pour générer le YAML (fonctionnalité à implémenter)
/* function generateYaml() {
  // On utilise notre générateur YAML personnalisé
  const code = yamlGenerator.workspaceToCode(workspace);
  document.getElementById('output').innerText = code;
} */