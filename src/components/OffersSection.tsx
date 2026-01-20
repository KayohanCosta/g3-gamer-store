import { motion } from 'framer-motion';
import { CountdownTimer } from './CountdownTimer';
import { ProductCard } from './ProductCard';
import pcGamer1 from '@/assets/pc-gamer-1.jpg';
import kitUpgrade from '@/assets/kit-upgrade.jpg';
import perifericos from '@/assets/perifericos.jpg';
import heroImg from '@/assets/hero-gaming-pc.jpg';

const featuredProducts = [
  {
    id: '1',
    name: 'PC Gamer G3 Starter',
    description: 'Ryzen 5 5600G | 16GB RAM | SSD 512GB',
    price: 2499.99,
    originalPrice: 3199.99,
    image: pcGamer1,
    tag: 'Mais Vendido',
  },
  {
    id: '2',
    name: 'PC Gamer G3 Pro',
    description: 'Intel i5 12400F | RTX 3060 | 16GB | SSD 1TB',
    price: 4899.99,
    originalPrice: 5999.99,
    image: kitUpgrade,
    tag: 'Destaque',
  },
  {
    id: '3',
    name: 'PC Gamer G3 Ultra',
    description: 'Ryzen 7 5800X | RTX 4070 | 32GB | SSD 2TB',
    price: 8999.99,
    originalPrice: 10999.99,
    image: heroImg,
    tag: 'Top Gamer',
  },
  {
    id: '4',
    name: 'Kit Periféricos Pro',
    description: 'Teclado Mecânico + Mouse RGB + Headset 7.1',
    price: 899.99,
    originalPrice: 1299.99,
    image: perifericos,
    tag: 'Combo',
  },
];

export function OffersSection() {
  return (
    <section id="ofertas" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold mb-4">
              PROMOÇÃO
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
              Ofertas da <span className="text-gradient-gold">Semana</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Aproveite, é por tempo limitado!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start md:items-end"
          >
            <p className="text-muted-foreground mb-2">Termina em:</p>
            <CountdownTimer />
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
