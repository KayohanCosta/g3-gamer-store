import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
  { name: 'Processadores', image: '/src/assets/PROCESSADOR.png' },
  { name: 'Placa Mãe', image: '/src/assets/PLACAMAE.jpg' },
  { name: 'Memória', image: '/src/assets/MEMEORIARAM.jpg' },
  { name: 'Placa de Vídeo', image: '/src/assets/PLACADEVIDEO.jpg' },
  { name: 'Armazenamento SSD', image: '/src/assets/ARMAZENAMENTO.jpg' },
  { name: 'Fontes Real', image: '/src/assets/FONTEREAL.jpg' },
  { name: 'Cadeiras Gamers', image: '/src/assets/CADEIRAGAMER.jpg' },
  { name: 'Periféricos', image: '/src/assets/perifericos.jpg' },
  { name: 'Caixa de som', image: '/src/assets/CAIXADESOM.jpg' },
  { name: 'Coolers', image: '/src/assets/COOLERBOX.jpg' },
  { name: 'Fans', image: '/src/assets/FANS.jpg' },
];

export function CategoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Navegue por <span className="text-gradient-gold">Categorias</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Encontre os melhores componentes e periféricos para sua setup gamer
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.a
              key={category.name}
              href={`#${category.name.toLowerCase().replace(/\s/g, '-')}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative h-64 rounded-2xl overflow-hidden"
            >
              {/* Background Image */}
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {category.name}
                </h3>
                <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  Ver produtos
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
