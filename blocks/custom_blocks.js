import { CATEGORY_COLOUR, BLOCK_CATEGORY } from "./constants.js";
import { STRING_MATCHERS } from "./matchers.js";

Blockly.defineBlocksWithJsonArray([
    //* --- ENTETE DE ROUTES --- */
    {
        "type": "route_main",
        "message0": "Appliquer les règles de routage suivantes:",
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "policies",
                "check": BLOCK_CATEGORY.ROUTE_CONTENT
            }
        ],
        "previousStatement": BLOCK_CATEGORY.CONFIG_GENERALE,
        "colour": CATEGORY_COLOUR.ROUTE,
    },
    {
        "type": "route_rule",
        "message0": "Les requêtes faites sur l'URL %1",
        "args0": [
            {
                "type": "field_input",
                "name": "from",
                "text": "https://www.example.com/"
            }
        ],
        "message1": "sont redirigées vers l'URL %1",
        "args1": [
            {
                "type": "field_input",
                "name": "to",
                "text": "https://www.example.com/"
            }
        ],
        "message2": "Appliquer les règles suivantes: %1",
        "args2": [
            {
                "type": "input_statement",
                "name": "policies",
                "check": BLOCK_CATEGORY.ROUTE_POLICY
            }
        ],
        "message3": "Appliquer les options suivantes: %1",
        "args3": [
            {
                "type": "input_statement",
                "name": "options",
                "check": BLOCK_CATEGORY.ROUTE_OPTIONS
            }
        ],
        "previousStatement": BLOCK_CATEGORY.ROUTE_CONTENT,
        "nextStatement": BLOCK_CATEGORY.ROUTE_CONTENT,
        "colour": CATEGORY_COLOUR.ROUTE,
        "tooltip": "Définit une règle de routage avec conditions et options."
    },
    {
        "type": "route_action",
        "message0": "La requête est %1 si:",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "action",
                "options": [
                    ["autorisée", "allow"],
                    ["bloquée", "deny"]
                ]
            }
        ],
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "conditions",
                "check": BLOCK_CATEGORY.POLICY_CONDITION
            }
        ],
        "previousStatement": BLOCK_CATEGORY.ROUTE_POLICY,
        "nextStatement": BLOCK_CATEGORY.ROUTE_POLICY,
        "colour": CATEGORY_COLOUR.ROUTE,
        "tooltip": "La condition bloquante est prioritaire sur la condition autorisante."
    },
    /* --- OPERATEURS LOGIQUES --- */
    {
        "type": "policy-logic_and",
        "message0": "Et %1",
        "args0": [
            {
                "type": "input_statement",
                "name": "elements",
                "check": BLOCK_CATEGORY.POLICY_CONDITION
            }
        ],
        "previousStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "nextStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "colour": CATEGORY_COLOUR.POLICY_LOGIC
    },
    {
        "type": "policy-logic_or",
        "message0": "Ou %1",
        "args0": [
            {
                "type": "input_statement",
                "name": "elements",
                "check": BLOCK_CATEGORY.POLICY_CONDITION
            }
        ],
        "previousStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "nextStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "colour": CATEGORY_COLOUR.POLICY_LOGIC
    },
    {
        "type": "policy-logic_not",
        "message0": "N'est pas %1",
        "args0": [
            {
                "type": "input_statement",
                "name": "elements",
                "check": BLOCK_CATEGORY.POLICY_CONDITION
            }
        ],
        "previousStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "nextStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "colour": CATEGORY_COLOUR.POLICY_LOGIC
    },
    {
        "type": "policy-logic_nor",
        "message0": "Aucun de %1",
        "args0": [
            {
                "type": "input_statement",
                "name": "elements",
                "check": BLOCK_CATEGORY.POLICY_CONDITION
            }
        ],
        "previousStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "nextStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "colour": CATEGORY_COLOUR.POLICY_LOGIC
    },
    /* --- CRITERES --- */
    {
        "type": "policy_criteria_domain",
        "message0": "Le domaine est %1",
        "args0": [
            { "type": "field_input", "name": "domain", "text": "example.com" }
        ],
        "previousStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "nextStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "colour": CATEGORY_COLOUR.POLICY_CONDITION
    },
    {
        "type": "policy_criteria_email",
        "message0": "L'email est %1",
        "args0": [
            { "type": "field_input", "name": "email", "text": "user@example.com" }
        ],
        "previousStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "nextStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "colour": CATEGORY_COLOUR.POLICY_CONDITION
    },
    {
        "type": "policy_criteria_user",
        "message0": "L'ID utilisateur est %1",
        "args0": [
            { "type": "field_input", "name": "user", "text": "user_id" }
        ],
        "previousStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "nextStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "colour": CATEGORY_COLOUR.POLICY_CONDITION
    },
    {
        "type": "policy_criteria_http_method",
        "message0": "La méthode HTTP est %1",
        "args0": [
            { "type": "field_input", "name": "method", "text": "GET" }
        ],
        "previousStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "nextStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "colour": CATEGORY_COLOUR.POLICY_CONDITION
    },
    {
        "type": "policy_criteria_http_path",
        "message0": "Le chemin HTTP est %1",
        "args0": [
            { "type": "field_input", "name": "path", "text": "/api/v1" }
        ],
        "previousStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "nextStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "colour": CATEGORY_COLOUR.POLICY_CONDITION
    },
    {
        "type": "policy_criteria_authenticated_user",
        "message0": "L'utilisateur %1 authentifié",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "status",
                "options": [
                    ["est", "true"],
                    ["n'est pas", "false"]
                ]
            }
        ],
        "previousStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "nextStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "colour": CATEGORY_COLOUR.POLICY_CONDITION
    },
    {
        "type": "policy_criteria_allow",
        "message0": "Toujours autoriser",
        "previousStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "nextStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "colour": CATEGORY_COLOUR.POLICY_CONDITION
    },
    {
        "type": "policy_criteria_reject",
        "message0": "Toujours refuser",
        "previousStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "nextStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "colour": CATEGORY_COLOUR.POLICY_CONDITION
    },
    {
        "type": "policy_criteria_client_certificate",
        "message0": "Certificat TLS Client :",
        // Ligne Empreinte (Directe, pas de matcher selon la doc)
        "message1": "%1 Empreinte (SHA256) est %2",
        "args1": [
            { "type": "field_checkbox", "name": "HAS_FINGERPRINT", "checked": false },
            { "type": "field_input", "name": "FINGERPRINT_VALUE", "text": "" }
        ],
        // Ligne DNS (SAN) + String Matcher
        "message2": "%1 Nom DNS (SAN) %2 %3",
        "args2": [
            { "type": "field_checkbox", "name": "HAS_DNS", "checked": false },
            { "type": "field_dropdown", "name": "DNS_MATCHER", "options": STRING_MATCHERS },
            { "type": "field_input", "name": "DNS_VALUE", "text": "" }
        ],
        // Ligne Email + String Matcher
        "message3": "%1 Email associé %2 %3",
        "args3": [
            { "type": "field_checkbox", "name": "HAS_EMAIL", "checked": false },
            { "type": "field_dropdown", "name": "EMAIL_MATCHER", "options": STRING_MATCHERS },
            { "type": "field_input", "name": "EMAIL_VALUE", "text": "" }
        ],
        // Ligne URI + String Matcher
        "message4": "%1 URI (SAN) %2 %3",
        "args4": [
            { "type": "field_checkbox", "name": "HAS_URI", "checked": false },
            { "type": "field_dropdown", "name": "URI_MATCHER", "options": STRING_MATCHERS },
            { "type": "field_input", "name": "URI_VALUE", "text": "" }
        ],
        // Ligne Hash SPKI (Directe)
        "message5": "%1 Hash SPKI (SHA256) est %2",
        "args5": [
            { "type": "field_checkbox", "name": "HAS_SPKI", "checked": false },
            { "type": "field_input", "name": "SPKI_VALUE", "text": "" }
        ],
        "previousStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "nextStatement": BLOCK_CATEGORY.POLICY_CONDITION,
        "colour": CATEGORY_COLOUR.POLICY_CONDITION,
        "tooltip": "Vérifie les propriétés du certificat TLS du client (Fingerprint, SAN, SPKI)."
    }
]);