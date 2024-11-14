import { GeneratedContent } from './types';

export const generateExportContent = (content: GeneratedContent, format: 'txt' | 'doc') => {
  if (format === 'txt') {
    return `Liste de vocabulaire - ${content.metadata.theme}\n` +
      `Niveau: ${content.metadata.level}\n\n` +
      content.words.map((item, index) => (
        `${index + 1}. ${item.word.toUpperCase()}\n` +
        `Définition: ${item.definition}\n` +
        `Type: ${item.type}\n` +
        `Exemple: ${item.exemple}\n` +
        (item.synonymes ? `Synonymes: ${item.synonymes.join(', ')}\n` : '') +
        '\n'
      )).join('\n');
  }
  
  return `<!DOCTYPE html><html><head><meta charset="UTF-8">
    <style>
      body { font-family: Arial; padding: 20px; }
      .word { margin-bottom: 20px; padding: 15px; background: #f5f5f5; }
      .word-title { font-size: 18px; font-weight: bold; color: #333; }
      .definition { margin: 10px 0; }
      .type { color: #666; }
      .exemple { font-style: italic; }
    </style></head><body>
    <h1>Liste de vocabulaire - ${content.metadata.theme}</h1>
    ${content.words.map((item, index) => `
      <div class="word">
        <div class="word-title">${index + 1}. ${item.word}</div>
        <div class="definition">${item.definition}</div>
        <div class="type">${item.type}</div>
        <div class="exemple">${item.exemple}</div>
        ${item.synonymes ? `<div>Synonymes: ${item.synonymes.join(', ')}</div>` : ''}
      </div>
    `).join('')}
    </body></html>`;
};