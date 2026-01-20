import { motion } from 'framer-motion';
import { ArrowRight, Gamepad2, Monitor, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import pcGamerImg from '@/assets/pc-gamer-1.jpg';
import kitUpgradeImg from '@/assets/kit-upgrade.jpg';
import perifericosImg from '@/assets/perifericos.jpg';

const categoryCards = [
  {
    title: 'PC Gamer',
    description: 'Streamer, Jogos e Muito mais',
    icon: Monitor,
    href: '#pc-gamer',
    image: pcGamerImg,
  },
  {
    title: 'Kit Upgrades',
    description: 'Faça seu upgrade e turbine sua máquina!',
    icon: Gamepad2,
    href: '#kit-upgrade',
    image: kitUpgradeImg,
  },
  {
    title: 'Ofertas da Semana',
    description: 'Stream, create, and compete',
    icon: Headphones,
    href: '#ofertas',
    image: perifericosImg,
  },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6"
            >
              Monte seu PC dos Sonhos
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              Construa Seu{' '}
              <span className="text-gradient-gold">PC Gamer</span>{' '}
              Ideal
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Monte o PC dos Seus Sonhos e Eleve sua Experiência de Jogo ao Próximo Nível!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="/monte-seu-pc">
                  Montar PC
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl">
                Ver Ofertas
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Promo Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative glass-card rounded-3xl p-8 md:p-12 neon-border overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <p className="text-primary font-display text-xl mb-2">ATÉ</p>
                  <p className="font-display text-6xl md:text-8xl font-bold text-gradient-gold mb-2">50%</p>
                  <p className="font-display text-2xl md:text-3xl text-foreground mb-4">DE DESCONTO</p>
                </motion.div>
                
                <div className="h-1 w-24 bg-gradient-orange mx-auto rounded-full mb-6" />
                
                <p className="font-display text-3xl md:text-4xl text-primary animate-pulse-glow">
                  PROMOÇÃO
                </p>
                <p className="font-display text-lg text-muted-foreground mt-2">
                  DE OFERTAS
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Category Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 pb-12 -mt-4"
        >
          {categoryCards.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.href}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 aspect-[4/3]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              {/* Background Image */}
              <img 
                src={card.image} 
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {card.description}
                </p>
                <span className="inline-flex items-center text-primary font-semibold group-hover:underline">
                  Comprar
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
