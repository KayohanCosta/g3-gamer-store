import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import processadorImg from '../assets/PROCESSADOR.png';
import placaMaeImg from '../assets/PLACAMAE.jpg';
import memoriaImg from '../assets/MEMEORIARAM.jpg';
import placaVideoImg from '../assets/PLACADEVIDEO.jpg';
import armazenamentoImg from '../assets/ARMAZENAMENTO.jpg';
import fonteImg from '../assets/FONTEREAL.jpg';
import cadeiraImg from '../assets/CADEIRAGAMER.jpg';
import perifericosImg from '../assets/perifericos.jpg';
import caixaSomImg from '../assets/CAIXADESOM.jpg';
import coolerBoxImg from '../assets/COOLERBOX.jpg';
import fansImg from '../assets/FANS.jpg';

const categories = [
  { name: 'Processadores', image: processadorImg },
  { name: 'Placa Mãe', image: placaMaeImg },
  { name: 'Memória', image: memoriaImg },
  { name: 'Placa de Vídeo', image: placaVideoImg },
  { name: 'Armazenamento SSD', image: armazenamentoImg },
  { name: 'Fontes Real', image: fonteImg },
  { name: 'Cadeiras Gamers', image: cadeiraImg },
  { name: 'Periféricos', image: perifericosImg },
  { name: 'Caixa de som', image: caixaSomImg },
  { name: 'Coolers', image: coolerBoxImg },
  { name: 'Fans', image: fansImg },
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
