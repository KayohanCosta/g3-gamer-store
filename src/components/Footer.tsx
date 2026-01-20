import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

const footerLinks = {
  institucional: [
    { label: 'Sobre Nós', href: '#' },
    { label: 'Política de Privacidade', href: '#' },
    { label: 'Termos de Uso', href: '#' },
    { label: 'Trabalhe Conosco', href: '#' },
  ],
  atendimento: [
    { label: 'Central de Ajuda', href: '#' },
    { label: 'Trocas e Devoluções', href: '#' },
    { label: 'Acompanhar Pedido', href: '#' },
    { label: 'Fale Conosco', href: '#' },
  ],
  categorias: [
    { label: 'PC Gamer', href: '#' },
    { label: 'Processadores', href: '#' },
    { label: 'Placas de Vídeo', href: '#' },
    { label: 'Periféricos', href: '#' },
  ],
};

const paymentMethods = [
  'Visa', 'Mastercard', 'Elo', 'Pix', 'Boleto'
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Logo & Contact */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <motion.a 
              href="#"
              className="inline-block mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="public/logotipo-horizontal.png" 
                alt="G3 Gamer Store" 
                className="h-16 w-auto"
              />
            </motion.a>
            
            <div className="space-y-3 text-sm">
              <a href="tel:+5585997229985" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                (85) 99722-9985
              </a>
              <p className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                R. Trezentos e Onze, 79 - Jangurussu, Fortaleza - CE, 60866-360
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Youtube, MessageCircle].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Institucional</h4>
            <ul className="space-y-2">
              {footerLinks.institucional.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Atendimento</h4>
            <ul className="space-y-2">
              {footerLinks.atendimento.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Categorias</h4>
            <ul className="space-y-2">
              {footerLinks.categorias.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Pagamento</h4>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="px-3 py-1.5 bg-muted rounded-md text-xs text-muted-foreground"
                >
                  {method}
                </span>
              ))}
            </div>
            
            <h4 className="font-display font-bold text-foreground mt-6 mb-4">Segurança</h4>
            <div className="flex gap-2">
              <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-md text-xs text-green-500">
                SSL Seguro
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 G3 Gamer Store. Todos os direitos reservados.</p>
            <p>CNPJ: 00.000.000/0001-00</p>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              Desenvolvido por{' '}
              <a 
                href="https://kayohancostadev.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                Kayohan Costa
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
