import { motion } from 'framer-motion';

const highlights = [
  'Entregamos para toda Fortaleza e regiões',
  'Parcele compras até 12x sem juros',
  'Entrega rápida em Fortaleza',
];

export function HighlightBar() {
  return (
    <section className="bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 backdrop-blur-sm border-y border-primary/20 overflow-hidden">
      <div className="py-2.5">
        <motion.div
          className="flex gap-16 items-center"
          animate={{
            x: [0, -1200],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...highlights, ...highlights, ...highlights, ...highlights].map((highlight, index) => (
            <div
              key={`highlight-${index}`}
              className="flex-shrink-0 px-5 py-1.5 bg-primary/15 hover:bg-primary/25 transition-all duration-300 rounded-full border border-primary/40 hover:border-primary/80 shadow-lg hover:shadow-primary/20"
            >
              <span className="text-sm md:text-base text-foreground font-semibold whitespace-nowrap">
                {highlight}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
