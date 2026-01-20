import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Component {
  id: string;
  name: string;
  specs: string;
  price: number;
  compatibility?: string;
}

interface BuildStep {
  name: string;
  icon: string;
  category: string;
  components: Component[];
}

const buildSteps: BuildStep[] = [
  {
    name: 'Processador',
    icon: '🔧',
    category: 'processor',
    components: [
      { id: '1', name: 'AMD Ryzen 7 7700', specs: '8-Core, 3.8GHz', price: 1899.99 },
      { id: '2', name: 'Intel Core i7-12700', specs: '12-Core, 2.1GHz', price: 2499.99 },
      { id: '3', name: 'AMD Ryzen 5 7600X', specs: '6-Core, 4.7GHz', price: 1299.99 },
    ]
  },
  {
    name: 'Cooler',
    icon: '❄️',
    category: 'cooler',
    components: [
      { id: '1', name: 'Cooler Master Hyper 212', specs: 'Air Cooler', price: 199.99 },
      { id: '2', name: 'Corsair H100i Elite', specs: 'Liquid Cooler 240mm', price: 599.99 },
      { id: '3', name: 'Noctua NH-D15', specs: 'Air Cooler Premium', price: 349.99 },
    ]
  },
  {
    name: 'Placa Mãe',
    icon: '🔌',
    category: 'motherboard',
    components: [
      { id: '1', name: 'ASUS ROG STRIX X870-E', specs: 'AM5, DDR5', price: 1899.99 },
      { id: '2', name: 'MSI MPG B850 EDGE', specs: 'AM5, DDR5', price: 1599.99 },
      { id: '3', name: 'Gigabyte B850M AORUS', specs: 'AM5, DDR5', price: 1299.99 },
    ]
  },
  {
    name: 'Memória RAM',
    icon: '💾',
    category: 'memory',
    components: [
      { id: '1', name: 'Corsair Vengeance RGB Pro', specs: '32GB DDR5 6000MHz', price: 899.99 },
      { id: '2', name: 'Kingston Fury Beast', specs: '32GB DDR5 5600MHz', price: 749.99 },
      { id: '3', name: 'G.Skill Trident Z5', specs: '32GB DDR5 6000MHz', price: 999.99 },
    ]
  },
  {
    name: 'Placa de Vídeo',
    icon: '🎮',
    category: 'gpu',
    components: [
      { id: '1', name: 'RTX 4090', specs: '24GB GDDR6X', price: 9999.99 },
      { id: '2', name: 'RTX 4080 Super', specs: '16GB GDDR6X', price: 6999.99 },
      { id: '3', name: 'RTX 4070 Ti', specs: '12GB GDDR6X', price: 4999.99 },
    ]
  },
  {
    name: 'SSD/HD',
    icon: '💿',
    category: 'storage',
    components: [
      { id: '1', name: 'Samsung 990 Pro', specs: 'NVMe 1TB PCIe 4.0', price: 999.99 },
      { id: '2', name: 'WD Black SN850X', specs: 'NVMe 1TB PCIe 4.0', price: 799.99 },
      { id: '3', name: 'Sabrent Rocket 4+', specs: 'NVMe 2TB PCIe 4.0', price: 1499.99 },
    ]
  },
  {
    name: 'Gabinete',
    icon: '📦',
    category: 'case',
    components: [
      { id: '1', name: 'Corsair 5000T RGB', specs: 'E-ATX, Tempered Glass', price: 1999.99 },
      { id: '2', name: 'NZXT H7 Flow', specs: 'ATX, Mesh Front', price: 1299.99 },
      { id: '3', name: 'Lian Li Lancool 303', specs: 'ATX, Mesh Design', price: 799.99 },
    ]
  },
  {
    name: 'Fonte',
    icon: '⚡',
    category: 'psu',
    components: [
      { id: '1', name: 'Corsair RM1200x (2023)', specs: '1200W, Gold', price: 1899.99 },
      { id: '2', name: 'EVGA SuperNOVA 1000 P6', specs: '1000W, Platinum', price: 1599.99 },
      { id: '3', name: 'MSI MPG A1000GF', specs: '1000W, Gold', price: 1299.99 },
    ]
  },
  {
    name: 'Periféricos',
    icon: '🖱️',
    category: 'peripherals',
    components: [
      { id: '1', name: 'Monitor ASUS ROG Swift', specs: '27" 4K 240Hz', price: 3999.99 },
      { id: '2', name: 'Logitech G Pro X Super Light', specs: 'Gaming Mouse', price: 599.99 },
      { id: '3', name: 'Corsair K95 Platinum XT', specs: 'Gaming Keyboard', price: 1299.99 },
    ]
  },
];

export function BuildPCWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedComponents, setSelectedComponents] = useState<{ [key: string]: Component }>({});

  const step = buildSteps[currentStep];
  const isLastStep = currentStep === buildSteps.length - 1;

  const handleSelectComponent = (component: Component) => {
    setSelectedComponents({
      ...selectedComponents,
      [step.category]: component
    });
  };

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateTotal = () => {
    return Object.values(selectedComponents).reduce((sum, comp) => sum + comp.price, 0);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient-gold">Monte seu PC</span> Gamer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selecione os componentes ideais para sua máquina de forma intuitiva
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-card border border-border rounded-3xl p-8"
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {step.icon} {step.name}
                  </h3>
                  <span className="text-sm font-medium text-muted-foreground">
                    {currentStep + 1} de {buildSteps.length}
                  </span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary to-primary/60 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / buildSteps.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Components Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {step.components.map((component) => (
                  <motion.button
                    key={component.id}
                    onClick={() => handleSelectComponent(component)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-4 rounded-2xl text-left border-2 transition-all duration-300 group ${
                      selectedComponents[step.category]?.id === component.id
                        ? 'border-primary bg-primary/10'
                        : 'border-border bg-secondary/30 hover:border-primary/50'
                    }`}
                  >
                    {/* Selection Indicator */}
                    {selectedComponents[step.category]?.id === component.id && (
                      <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-background" />
                      </div>
                    )}

                    <h4 className="font-display font-bold text-foreground mb-1">
                      {component.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {component.specs}
                    </p>
                    <p className="text-lg font-bold text-primary">
                      R$ {component.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </motion.button>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                <Button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Anterior
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!selectedComponents[step.category] || isLastStep}
                  className="flex-1 flex items-center justify-center gap-2"
                >
                  {isLastStep ? 'Configuração Completa' : 'Próximo'}
                  {!isLastStep && <ChevronRight className="w-4 h-4" />}
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Summary Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-card border border-border rounded-3xl p-8 h-fit"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Sua Configuração
            </h3>

            <div className="space-y-4 mb-8">
              {buildSteps.map((buildStep, idx) => (
                <div
                  key={buildStep.category}
                  className={`p-3 rounded-lg transition-all ${
                    selectedComponents[buildStep.category]
                      ? 'bg-primary/10 border border-primary/30'
                      : 'bg-secondary/30 border border-border'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-lg">{buildStep.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-muted-foreground">
                        {buildStep.name}
                      </p>
                      {selectedComponents[buildStep.category] ? (
                        <>
                          <p className="text-sm font-semibold text-foreground truncate">
                            {selectedComponents[buildStep.category].name}
                          </p>
                          <p className="text-sm text-primary font-bold">
                            R$ {selectedComponents[buildStep.category].price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </p>
                        </>
                      ) : (
                        <p className="text-sm text-muted-foreground italic">Não selecionado</p>
                      )}
                    </div>
                    {selectedComponents[buildStep.category] && (
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="border-t border-border pt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Subtotal:</span>
                <span className="text-lg font-bold text-foreground">
                  R$ {calculateTotal().toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <Button className="w-full mt-4" size="lg">
                Adicionar ao Carrinho
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
