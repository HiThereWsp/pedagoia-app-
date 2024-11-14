"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot, Send } from 'lucide-react';
import { getChatCompletion } from '@/lib/api';

const situations = [
  "Comment gérer une classe de CM1-CM2 pour l'histoire de la Révolution ?",
  "Préparer une réunion parents-profs pour un CE2 en difficulté en lecture",
  "Créer une progression maths CP sur 3 semaines (nombres jusqu'à 100)",
  "Que faire avec les élèves rapides en grammaire ?",
  "Planifier une séquence sciences CE2 sur le cycle de l'eau"
];

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Bonjour ! Je suis Liya. Je peux vous aider sur de nombreuses situations comme :",
      showSituations: true
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setInputValue('');
    setIsTyping(true);

    try {
      const apiMessages = messages
        .filter(msg => !msg.showSituations)
        .map(msg => ({
          role: msg.type === 'user' ? 'user' : 'assistant',
          content: msg.content
        }));

      apiMessages.push({ role: 'user', content: userMessage });

      const response = await getChatCompletion(apiMessages);
      
      setMessages(prev => [...prev, {
        type: 'bot',
        content: response || "Je suis désolée, je n'ai pas pu traiter votre demande. Pourriez-vous reformuler ?"
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: "Désolée, une erreur s'est produite. Veuillez réessayer."
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSituationClick = (situation: string) => {
    setInputValue(situation);
    handleSend();
  };

  return (
    <div className="flex flex-col h-screen max-h-screen bg-gray-50">
      <ScrollArea className="flex-1 p-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                <Avatar className="h-8 w-8">
                  <AvatarFallback className={message.type === 'user' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}>
                    {message.type === 'user' ? 'U' : <Bot className="h-4 w-4" />}
                  </AvatarFallback>
                </Avatar>
                <Card className={`p-4 ${message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-white'}`}>
                  <p>{message.content}</p>
                  {message.showSituations && (
                    <div className="mt-4 space-y-2">
                      {situations.map((situation, idx) => (
                        <Button
                          key={idx}
                          variant="outline"
                          className="w-full justify-start text-left h-auto py-2 px-3 hover:bg-gray-100"
                          onClick={() => handleSituationClick(situation)}
                        >
                          {situation}
                        </Button>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-green-100 text-green-600">
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <Card className="p-4 bg-white">
                  <p>En train d'écrire...</p>
                </Card>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t bg-white">
        <div className="max-w-3xl mx-auto flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Posez votre question..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2E8B57] focus:border-transparent"
          />
          <Button
            onClick={handleSend}
            className="bg-[#2E8B57] hover:bg-[#2E8B57]/90"
            disabled={isTyping || !inputValue.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}