import { motion } from 'framer-motion';
import { Cpu, CircuitBoard, MemoryStick, Monitor, HardDrive, Zap, Armchair, Keyboard, Speaker, Fan } from 'lucide-react';

const categories = [
  { name: 'Processadores', icon: Cpu, color: 'from-blue-500 to-blue-600' },
  { name: 'Placa Mãe', icon: CircuitBoard, color: 'from-green-500 to-green-600' },
  { name: 'Memória RAM', icon: MemoryStick, color: 'from-purple-500 to-purple-600' },
  { name: 'Placa de Vídeo', icon: Monitor, color: 'from-red-500 to-red-600' },
  { name: 'Armazenamento', icon: HardDrive, color: 'from-orange-500 to-orange-600' },
  { name: 'Fontes', icon: Zap, color: 'from-yellow-500 to-yellow-600' },
  { name: 'Cadeiras Gamer', icon: Armchair, color: 'from-pink-500 to-pink-600' },
  { name: 'Periféricos', icon: Keyboard, color: 'from-cyan-500 to-cyan-600' },
  { name: 'Caixas de Som', icon: Speaker, color: 'from-indigo-500 to-indigo-600' },
  { name: 'Coolers', icon: Fan, color: 'from-teal-500 to-teal-600' },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.a
              key={category.name}
              href={`#${category.name.toLowerCase().replace(/\s/g, '-')}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
