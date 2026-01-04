// 1. Création de l'objet générateur
const yamlGenerator = new Blockly.Generator('YAML');
yamlGenerator.INDENT = '  ';

// 2. Logique pour le bloc 'block_server'
yamlGenerator.forBlocks['block_server'] = function(block, generator) {
  const name = block.getFieldValue('NAME');
  const port = block.getFieldValue('PORT');
  
  // Construction de la chaîne YAML
  const code = `server:\n  name: "${name}"\n  port: ${port}\n`;
  return code;
};