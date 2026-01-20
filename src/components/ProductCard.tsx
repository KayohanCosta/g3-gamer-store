import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  tag?: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-gradient-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
    >
      {/* Tag */}
      {product.tag && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-gradient-orange text-primary-foreground text-xs font-bold rounded-full">
            {product.tag}
          </span>
        </div>
      )}

      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-2 py-1 bg-destructive text-destructive-foreground text-xs font-bold rounded-md">
            -{discount}%
          </span>
        </div>
      )}

      {/* Wishlist Button */}
      <button className="absolute top-14 right-4 z-10 w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground">
        <Heart className="w-4 h-4" />
      </button>

      {/* Image Container */}
      <div className="relative aspect-square bg-muted/50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="font-display text-lg font-bold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="mb-4">
          {product.originalPrice && (
            <p className="text-sm text-muted-foreground line-through">
              R$ {product.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </p>
          )}
          <p className="font-display text-2xl font-bold text-primary">
            R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
          <p className="text-xs text-muted-foreground">
            ou 12x de R$ {(product.price / 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
        </div>

        {/* Action Button */}
        <Button className="w-full bg-gradient-orange hover:opacity-90 text-primary-foreground font-semibold gap-2 transition-all hover:scale-[1.02]">
          <ShoppingCart className="w-4 h-4" />
          Comprar
        </Button>
      </div>
    </motion.div>
  );
}
