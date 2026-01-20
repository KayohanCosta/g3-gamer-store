import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
            <Gift className="w-4 h-4" />
            Ofertas Exclusivas
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Receba as Melhores <span className="text-gradient-gold">Ofertas</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Cadastre-se e seja o primeiro a saber sobre promoções, lançamentos e novidades do mundo gamer!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 py-6 px-5 bg-card border-border focus:border-primary"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-orange hover:opacity-90 text-primary-foreground font-bold px-8 py-6 gap-2"
            >
              <Send className="w-5 h-5" />
              Cadastrar
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            Ao se cadastrar, você concorda com nossa Política de Privacidade.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
