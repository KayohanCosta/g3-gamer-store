import { motion } from 'framer-motion';
import { Truck, Shield, CreditCard, Headphones } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Entrega Rápida',
    description: 'Entrega expressa para Fortaleza e região',
  },
  {
    icon: Shield,
    title: 'Garantia Estendida',
    description: 'Até 3 anos de garantia em produtos selecionados',
  },
  {
    icon: CreditCard,
    title: 'Parcelamento',
    description: 'Em até 12x sem juros no cartão',
  },
  {
    icon: Headphones,
    title: 'Suporte Técnico',
    description: 'Atendimento especializado para gamers',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="font-display text-sm md:text-base font-bold text-foreground mb-1">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
