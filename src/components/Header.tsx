import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, User, Phone, Mail, Menu, X, ChevronDown, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Todos os Produtos', href: '#produtos' },
  { label: 'Kit Upgrade', href: '#upgrade' },
  { label: 'Monte Seu PC', href: '/monte-seu-pc' },
];

const categories = [
  'Processadores',
  'Placa Mãe',
  'Memória',
  'Placa de Vídeo',
  'Armazenamento SSD',
  'Fontes Real',
  'Cadeiras Gamers',
  'Periféricos',
  'Caixa de Som',
  'Coolers',
  'Fans',
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateVisibleCategories = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerWidth = container.offsetWidth;
      let accumulatedWidth = 0;
      let count = 0;

      // Cada categoria tem aproximadamente 150px (incluindo padding e gap)
      // Deixamos espaço para o botão "Mais" (~60px)
      const estimatedCategoryWidth = 150;
      const moreButtonWidth = 60;
      const availableWidth = containerWidth - moreButtonWidth;
      const estimatedVisibleCount = Math.floor(availableWidth / estimatedCategoryWidth);

      setVisibleCount(Math.max(1, estimatedVisibleCount));
    };

    calculateVisibleCategories();
    const timer = setTimeout(calculateVisibleCategories, 100);
    window.addEventListener('resize', calculateVisibleCategories);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateVisibleCategories);
    };
  }, []);

  return (
    <header className="w-full bg-background">
      {/* Top Bar */}
      <div className="bg-foreground/5 border-b border-border">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+5585997229985" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(85) 99722-9985</span>
            </a>
            <a href="mailto:karlinhosmonteiro.km@hotmail.com" className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" />
              <span>karlinhosmonteiro.km@hotmail.com</span>
            </a>
          </div>
          <p className="text-muted-foreground">
            Entrega <span className="text-primary font-semibold">rápida</span> em Fortaleza
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <motion.a 
              href="/"
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img 
                src="/logotipo-horizontal.png" 
                alt="G3 Gamer Store" 
                className="h-16 md:h-20 w-auto"
              />
            </motion.a>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="O que você procura?"
                  className="w-full pl-4 pr-24 py-6 bg-muted border-border focus:border-primary rounded-lg"
                />
                <Button 
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-orange hover:opacity-90 text-primary-foreground font-semibold"
                >
                  Pesquisar
                </Button>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="hidden md:flex text-muted-foreground hover:text-foreground">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </Button>
              <span className="hidden md:inline text-foreground font-semibold">R$ 0,00</span>
              
              {/* Mobile Menu Button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Categories Bar - Desktop */}
        <div className="hidden lg:block bg-muted border-t border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-1 py-2" ref={containerRef}>
              {categories.slice(0, visibleCount).map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replace(/\s/g, '-')}`}
                  className="px-4 py-2 text-sm font-medium text-foreground/90 hover:text-primary hover:bg-foreground/5 rounded-md transition-colors whitespace-nowrap flex items-center gap-1"
                >
                  {category}
                  <ChevronDown className="w-3 h-3" />
                </a>
              ))}
              
              {/* Mais Button - se houver categorias ocultas */}
              {categories.length > visibleCount && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="px-4 py-2 text-sm font-medium text-foreground/90 hover:text-primary hover:bg-foreground/5 rounded-md"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                      <span className="ml-1">Mais</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="max-h-[400px] overflow-y-auto">
                    {categories.slice(visibleCount).map((category) => (
                      <DropdownMenuItem key={category} asChild>
                        <a
                          href={`#${category.toLowerCase().replace(/\s/g, '-')}`}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          {category}
                          <ChevronDown className="w-3 h-3" />
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Input
                  type="text"
                  placeholder="O que você procura?"
                  className="w-full pl-4 pr-12 py-3 bg-muted border-border"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Mobile Categories */}
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm font-semibold text-muted-foreground mb-3">Categorias</p>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <a
                      key={category}
                      href={`#${category.toLowerCase().replace(/\s/g, '-')}`}
                      className="px-3 py-2 text-sm text-foreground bg-muted hover:bg-muted/80 rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
