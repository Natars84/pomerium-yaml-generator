Blockly.defineBlocksWithJsonArray([
  {
    "type": "route_fromto",
    "message0": "%1 %2",
    "args0": [
        {
        "type": "field_dropdown",
        "name": "url_type",
        "options": [
            [
            "from",
            "from"
            ],
            [
            "to",
            "to"
            ]
        ]
        },
        {
        "type": "field_input",
        "name": "url_address",
        "text": "https://www.example.com"
        }
    ],
    "output": null,
    "colour": 120,
    "tooltip": ""
  },
  {
    "type": "route_policy",
    "message0": "Policy %1", // On ne garde qu'un seul emplacement
    "args0": [
        {
        "type": "input_statement",
        "name": "policy_content"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "Définit les règles de la politique",
    "helpUrl": ""
 },
 {
    "type": "route_rule",
    "message0": "Les requêtes faites sur l'URL  %1 sont redirigées vers l'URL  %2 %3 si elles respectent les conditions suivantes: %4 Paramètres optionnels: %5",
    "args0": [
        {
        "type": "field_input",
        "name": "route_url-from",
        "text": "https://www.example.com/"
        },
        {
        "type": "field_input",
        "name": "route_url-to",
        "text": "https://www.example.com/"
        },
        {
        "type": "input_dummy"
        },
        {
        "type": "input_statement",
        "name": "route-rule_policy",
        "check": "route_policy"
        },
        {
        "type": "input_statement",
        "name": "route-rule_option",
        "check": "route_option"
        }
    ],
    "previousStatement": "routeContent",
    "nextStatement": "routeContent",
    "colour": 120,
    "tooltip": "",
    "helpUrl": "http://www.example.com/"
    }
]);