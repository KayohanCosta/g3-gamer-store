import { motion } from 'framer-motion';

const brands = [
  'GIGABYTE',
  'AMD',
  'INTEL',
  'LOGITECH',
  'DELL',
  'ASUS',
  'AORUS',
];

export function BrandsSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/30 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Marcas que Você Encontra na{' '}
            <span className="text-gradient-gold">G3</span>
          </h2>
          <p className="text-muted-foreground">
            Trabalhamos com as melhores marcas do mercado
          </p>
        </div>

        {/* Carrossel Infinito */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-12 items-center"
            animate={{
              x: [0, -1680],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={`brand-${index}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-card border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <span className="text-xl md:text-2xl font-bold text-foreground/80 whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
