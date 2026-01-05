import { CATEGORY_COLOUR } from "./constants.js"; 

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
                "check": "route_policy"
            }
        ],
        "message3": "avec les options: %1",
        "args3": [
            {
                "type": "input_statement",
                "name": "route-rule_option",
                "check": "route_option"
            }
        ],
        "previousStatement": "routeContent",
        "nextStatement": "routeContent",
        "colour": CATEGORY_COLOUR.ROUTE,
        "tooltip": "Définit une règle de routage avec conditions et options.",
        "helpUrl": ""
    },
    {
        "type": "route_policy",
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
                "check": "policy_condition"
            }
        ],
        "previousStatement": "route_policy",
        "nextStatement": "route_policy",
        "colour": CATEGORY_COLOUR.ROUTE
    },
    {
        "type": "policy_and",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Et %1",
        "args0": [
            {
                "type": "input_statement",
                "name": "policy-and_element",
                "check": "policy_condition"
            }
        ],
        "previousStatement": "policy_condition",
        "nextStatement": "policy_condition",
        "colour": CATEGORY_COLOUR.POLICY_LOGICAL_OPERATOR
    },
    {
        "type": "policy_or",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Ou %1",
        "args0": [
            {
                "type": "input_statement",
                "name": "policy-or_element",
                "check": "policy_condition"
            }
        ],
        "previousStatement": "policy_condition",
        "nextStatement": "policy_condition",
        "colour": CATEGORY_COLOUR.POLICY_LOGICAL_OPERATOR
    },
    {
        "type": "policy_not",
        "tooltip": "",
        "helpUrl": "",
        "message0": "N'est pas %1",
        "args0": [
            {
                "type": "input_statement",
                "name": "policy-not_element",
                "check": "policy_condition"
            }
        ],
        "previousStatement": "policy_condition",
        "nextStatement": "policy_condition",
        "colour": CATEGORY_COLOUR.POLICY_LOGICAL_OPERATOR
    }
]);