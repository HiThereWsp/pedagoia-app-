import OpenAI from 'openai';

const getOpenAIClient = () => {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  
  if (!apiKey) {
    throw new Error('OpenAI API key is not configured');
  }

  return new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true
  });
};

export async function getChatCompletion(messages: any[]) {
  try {
    const openai = getOpenAIClient();
    
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Tu es Liya, une assistante pédagogique virtuelle experte en éducation. 
          Tu aides les enseignants à préparer leurs cours, gérer leur classe et optimiser leur temps.
          Sois concise, pratique et propose des solutions concrètes.
          Si une demande correspond à un outil spécifique de Pédagoya, suggère son utilisation.
          
          Outils disponibles :
          - Générateur de séquences : pour créer des séquences pédagogiques
          - Créateur de progressions : pour planifier sur le long terme
          - Générateur d'exercices : pour créer des activités différenciées
          - Assistant réunion : pour préparer les réunions parents-profs`
        },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    if (error instanceof Error && error.message.includes('API key')) {
      return "Je suis désolée, le service n'est pas disponible pour le moment. L'équipe technique a été notifiée.";
    }
    throw error;
  }
}