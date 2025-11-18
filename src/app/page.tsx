import { Sparkles, Zap, CheckCircle, Users, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Inteligência Artificial para Marketing
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
            🚀 Marketing Turbo – Seu Marketing Pronto em 30 Segundos
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Posts, slogans, promoções, textos e até ideias de Reels criados automaticamente para o seu negócio.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
          >
            <Zap className="w-5 h-5 mr-2" />
            Criar meu marketing agora
          </Button>
        </div>
      </section>

      {/* O que é Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            O que é?
          </h2>
          
          <Card className="p-8 md:p-12 bg-white dark:bg-slate-800 shadow-xl">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
              O <span className="font-bold text-orange-600">Marketing Turbo IA</span> é uma inteligência artificial que cria todo o marketing do seu negócio em segundos.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
              Você só digita o nome da sua empresa e o tipo do seu negócio.
            </p>
            <p className="text-lg md:text-xl font-semibold text-orange-600 mb-8">
              O resto ela faz para você.
            </p>
            
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                Ideal para:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Hamburguerias",
                  "Barbearias",
                  "Salões",
                  "Lojas",
                  "Restaurantes",
                  "Pet shops",
                  "Clínicas",
                  "Qualquer negócio local"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* O que você recebe Section */}
      <section className="bg-gradient-to-r from-orange-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              O que você recebe
            </h2>
            <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
              A IA gera para você:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "📱", text: "10 posts prontos para Instagram" },
                { icon: "🎯", text: "5 promoções reais que aumentam vendas" },
                { icon: "🎨", text: "3 ideias de artes para o Canva" },
                { icon: "💬", text: "5 respostas automáticas" },
                { icon: "📲", text: "Texto profissional para WhatsApp" },
                { icon: "📅", text: "Plano de marketing semanal" },
                { icon: "🎬", text: "5 ideias de Reels com roteiro" },
                { icon: "#️⃣", text: "Hashtags ideais" },
                { icon: "✨", text: "Slogan personalizado" }
              ].map((item, index) => (
                <Card key={index} className="p-6 bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{item.icon}</span>
                    <p className="text-gray-700 dark:text-gray-200 font-medium">
                      {item.text}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                <Clock className="w-5 h-5" />
                Tudo em menos de 30 segundos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Para quem é
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Users, title: "Donos de negócios locais", desc: "Tenha marketing profissional sem contratar agência" },
              { icon: Sparkles, title: "Autônomos", desc: "Divulgue seu trabalho com conteúdo de qualidade" },
              { icon: TrendingUp, title: "Pessoas que querem melhorar vendas", desc: "Aumente seu faturamento com estratégias comprovadas" },
              { icon: Clock, title: "Quem não tem tempo para fazer marketing", desc: "Automatize e economize horas de trabalho" }
            ].map((item, index) => (
              <Card key={index} className="p-8 bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-300">
                <item.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preço Section */}
      <section className="bg-gradient-to-r from-orange-500 to-pink-600 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quanto custa?
            </h2>
            <p className="text-xl md:text-2xl mb-12">
              Escolha o plano ideal para você
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Plano Semanal */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="mb-4">
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    TESTE 7 DIAS
                  </span>
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  R$ 14,90
                </div>
                <div className="text-xl opacity-90 mb-6">
                  por 7 dias
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Acesso completo por 7 dias</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Todos os recursos incluídos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Ideal para testar</span>
                  </li>
                </ul>
                <Button 
                  size="lg" 
                  className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg py-6 rounded-full shadow-xl"
                >
                  Começar teste de 7 dias
                </Button>
              </div>

              {/* Plano Mensal */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border-2 border-white/30">
                <div className="mb-4">
                  <span className="bg-green-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </span>
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  R$ 29,90
                </div>
                <div className="text-xl opacity-90 mb-6">
                  por mês
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Acesso ilimitado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Todos os recursos incluídos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Melhor custo-benefício</span>
                  </li>
                </ul>
                <Button 
                  size="lg" 
                  className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg py-6 rounded-full shadow-xl"
                >
                  Assinar plano mensal
                </Button>
              </div>
            </div>
            
            <p className="text-lg opacity-90 mt-8">
              Cancele quando quiser. Sem compromisso.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            🚀 Comece agora e tenha seu marketing pronto em 30 segundos
          </h2>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
          >
            <Zap className="w-6 h-6 mr-2" />
            Criar meu marketing agora
          </Button>
          
          <p className="mt-6 text-gray-600 dark:text-gray-400">
            ✨ Sem cartão de crédito para testar
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 Marketing Turbo IA. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
