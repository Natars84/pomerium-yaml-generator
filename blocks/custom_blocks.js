import { CATEGORY_COLOUR, BLOCK_CATEGORY } from "./constants.js";

Blockly.defineBlocksWithJsonArray([
    {
        "type": "route_rule",
        "message0": "Les requêtes faites sur l'URL %1",
        "args0": [
            {
                "type": "field_input",
                "name": "route_url-from",
                "text": "https://www.example.com/"
            }
        ],
        "message1": "sont redirigées vers l'URL %1",
        "args1": [
            {
                "type": "field_input",
                "name": "route_url-to",
                "text": "https://www.example.com/"
            }
        ],
        "message2": "si elles respectent les conditions: %1",
        "args2": [
            {
                "type": "input_statement",
                "name": "route-rule_policy",
                "check": BLOCK_CATEGORY.ROUTE_POLICY
            }
        ],
        "message3": "avec les options: %1",
        "args3": [
            {
                "type": "input_statement",
                "name": "route-rule_option",
                "check": BLOCK_CATEGORY.ROUTE_OPTIONS
            }
        ],
        "previousStatement": BLOCK_CATEGORY.ROUTE_CONTENT,
        "nextStatement": BLOCK_CATEGORY.ROUTE_CONTENT,
        "colour": CATEGORY_COLOUR.ROUTE,
        "tooltip": "Définit une règle de routage avec conditions et options.",
        "helpUrl": ""
    },
    {
        "type": "route_action",
        "tooltip": "",
        "helpUrl": "",
        "message0": "La requête est %1 si: %2 %3",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "NAME",
                "options": [
                    [
                        "autorisée",
                        "allow"
                    ],
                    [
                        "bloquée",
                        "deny"
                    ]
                ]
            },
            {
                "type": "input_dummy",
                "name": "route-policy_action"
            },
            {
                "type": "input_statement",
                "name": "route-policy_condition",
                "check": BLOCK_CATEGORY.POLICY_CONDITION
            }
        ],
        "previousStatement": BLOCK_CATEGORY.ROUTE_POLICY,
        "nextStatement": BLOCK_CATEGORY.ROUTE_POLICY,
        "colour": CATEGORY_COLOUR.ROUTE
    },
    {
        "type": "policy-logic_and",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Et %1",
        "args0": [
            {
                "type": "input_statement",
                "name": "policy-and_element",
                "check": BLOCK_CATEGORY.POLICY_CONDITION
            }
        ],
        "previousStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "nextStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "colour": CATEGORY_COLOUR.POLICY_CONDITION
    },
    {
        "type": "policy-logic_or",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Ou %1",
        "args0": [
            {
                "type": "input_statement",
                "name": "policy-or_element",
                "check": BLOCK_CATEGORY.POLICY_CONDITION
            }
        ],
        "previousStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "nextStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "colour": CATEGORY_COLOUR.POLICY_CONDITION
    },
    {
        "type": "policy-logic_not",
        "tooltip": "",
        "helpUrl": "",
        "message0": "N'est pas %1",
        "args0": [
            {
                "type": "input_statement",
                "name": "policy-not_element",
                "check": BLOCK_CATEGORY.POLICY_CONDITION
            }
        ],
        "previousStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "nextStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "colour": CATEGORY_COLOUR.POLICY_CONDITION
    },
    {
        "type": "policy-logic_nor",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Aucun de %1",
        "args0": [
            {
                "type": "inp-logicut_statement",
                "name": "policy-not_element",
                "check": BLOCK_CATEGORY.POLICY_CONDITION
            }
        ],
        "previousStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "nextStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "colour": CATEGORY_COLOUR.POLICY_CONDITION
    },
    {
        "type": "policy_criteria_domain",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Le nom de domaine du mail est %1 %2",
        "args0": [
            {
                "type": "field_input",
                "name": "domain",
                "text": "default"
            },
            {
                "type": "input_dummy",
                "name": "dummy"
            }
        ],
        "previousStatement": "fixme-policy_condition",
        "nextStatement": "fixme-policy_condition",
        "colour": 225
    },
    {
        "type": "policy_criteria_email",
        "tooltip": "",
        "helpUrl": "",
        "message0": "L'adresse email est %1 %2",
        "args0": [
            {
                "type": "field_input",
                "name": "email",
                "text": "default"
            },
            {
                "type": "input_dummy",
                "name": "dummy"
            }
        ],
        "previousStatement": "fixme-policy_condition",
        "nextStatement": "fixme-policy_condition",
        "colour": 225
    },
    {
        "type": "policy_criteria_user",
        "tooltip": "",
        "helpUrl": "",
        "message0": "L'ID de l'utilisateur est %1 %2",
        "args0": [
            {
                "type": "field_input",
                "name": "user",
                "text": "default"
            },
            {
                "type": "input_dummy",
                "name": "dummy"
            }
        ],
        "previousStatement": "fixme-policy_condition",
        "nextStatement": "fixme-policy_condition",
        "colour": 225
    },
    {
        "type": "policy_criteria_http_method",
        "tooltip": "",
        "helpUrl": "",
        "message0": "La méthode HTTP est %1 %2",
        "args0": [
            {
                "type": "field_input",
                "name": "http_method",
                "text": "default"
            },
            {
                "type": "input_dummy",
                "name": "dummy"
            }
        ],
        "previousStatement": "fixme-policy_condition",
        "nextStatement": "fixme-policy_condition",
        "colour": 225
    },
    {
        "type": "policy_criteria_http_path",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Le chemin HTTP est %1 %2",
        "args0": [
            {
                "type": "field_input",
                "name": "http_path",
                "text": "default"
            },
            {
                "type": "input_dummy",
                "name": "dummy"
            }
        ],
        "previousStatement": "fixme-policy_condition",
        "nextStatement": "fixme-policy_condition",
        "colour": 225
    },
    {
  "type": "policy_criteria_authenticated_user",
  "tooltip": "",
  "helpUrl": "",
  "message0": "L'utilisateur %1 authentifié %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "authentification_status",
      "options": [
        [
          "s'est",
          "true"
        ],
        [
          "ne s'est pas",
          "false"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "dummy"
    }
  ],
  "previousStatement": "fixme-policy_condition",
  "nextStatement": "fixme-policy_condition",
  "colour": 225
},
{
  "type": "policy_criteria_allow",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Toujours autoriser. %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": "dummy"
    }
  ],
  "previousStatement": "fixme-policy_condition",
  "nextStatement": "fixme-policy_condition",
  "colour": 225
},
{
  "type": "policy_criteria_reject",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Toujours refuser. %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": "dummy"
    }
  ],
  "previousStatement": "fixme-policy_condition",
  "nextStatement": "fixme-policy_condition",
  "colour": 225
}
]);