const colourPalette = {
    ROUTE_BLOCKS: 120,
    POLICY_BLOCKS: 345
};

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
        "colour": colourPalette.ROUTE_BLOCKS,
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
        "colour": colourPalette.POLICY_BLOCKS
    }
]);