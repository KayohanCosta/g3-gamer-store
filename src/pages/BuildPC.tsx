import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { ChevronLeft, ChevronRight, Check, Search, Cpu, Zap, CircuitBoard, MemoryStick, Monitor, HardDrive, Box, Power, Headphones, ShoppingCart, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface Component {
  id: string;
  name: string;
  specs: string;
  price: number;
  brand?: string;
  compatibility?: string;
  image: string;
}

interface BuildStep {
  name: string;
  icon: LucideIcon;
  category: string;
  components: Component[];
}

const buildSteps: BuildStep[] = [
  {
    name: 'Processador',
    icon: Cpu,
    category: 'processor',
    components: [
      { id: '1', name: 'AMD Ryzen 7 7700', specs: '8-Core, 3.8GHz', price: 1899.99, brand: 'AMD', image: 'https://storage.googleapis.com/stateless-www-silvanopolis-t/2023/11/c3cd91c1-ryzen-7-7700x.webp' },
      { id: '2', name: 'Intel Core i7-12700', specs: '12-Core, 2.1GHz', price: 2499.99, brand: 'Intel', image: 'https://m.media-amazon.com/images/I/51fDJd+jURL._AC_UF894,1000_QL80_.jpg' },
      { id: '3', name: 'AMD Ryzen 5 7600X', specs: '6-Core, 4.7GHz', price: 1299.99, brand: 'AMD', image: 'https://storage.googleapis.com/stateless-www-silvanopolis-t/2023/11/c3cd91c1-ryzen-7-7700x.webp' },
      { id: '4', name: 'Intel Core Ultra 9 285', specs: '24-Core, 2.5GHz', price: 3499.99, brand: 'Intel', image: 'https://m.media-amazon.com/images/I/51fDJd+jURL._AC_UF894,1000_QL80_.jpg' },
    ]
  },
  {
    name: 'Cooler',
    icon: Zap,
    category: 'cooler',
    components: [
      { id: '1', name: 'Cooler Master Hyper 212', specs: 'Air Cooler', price: 199.99, brand: 'Cooler Master', image: 'https://www.coolermaster.com/catalog/coolers/cpu-air-coolers/hyper-212-black-edition/img/hyper-212-black-01.png' },
      { id: '2', name: 'Corsair H100i Elite', specs: 'Liquid Cooler 240mm', price: 599.99, brand: 'Corsair', image: 'https://cwsmgmt.corsair.com/responsive/img/2022/cooling/H100iELITECAPELLIX/screenshots/H100i_ELITE_CAPELLIX_01.png' },
      { id: '3', name: 'Noctua NH-D15', specs: 'Air Cooler Premium', price: 349.99, brand: 'Noctua', image: 'https://noctua.at/media/catalog/product/cache/2c6c79c6f7e919a761a0f8cb4a3f6b8e/n/h/nh_d15_chromax_black_1_4.png' },
      { id: '4', name: 'Corsair H150i Elite Capellix', specs: 'Liquid Cooler 360mm', price: 799.99, brand: 'Corsair', image: 'https://cwsmgmt.corsair.com/responsive/img/2021/cooling/H150iELITECAPELLIX/screenshots/H150i_ELITE_CAPELLIX_01.png' },
    ]
  },
  {
    name: 'Placa Mãe',
    icon: CircuitBoard,
    category: 'motherboard',
    components: [
      { id: '1', name: 'ASUS ROG STRIX X870-E', specs: 'AM5, DDR5', price: 1899.99, brand: 'ASUS', image: 'https://dlcdnwebimgs.asus.com/gain/71F3B195-1E72-4AB3-BDCE-7CDCD3F45E09/w800' },
      { id: '2', name: 'MSI MPG B850 EDGE', specs: 'AM5, DDR5', price: 1599.99, brand: 'MSI', image: 'https://storage-asset.msi.com/global/picture/image/feature/mb/AMD/B650/B650_EDGE/kv.png' },
      { id: '3', name: 'Gigabyte B850M AORUS', specs: 'AM5, DDR5, Micro-ATX', price: 1299.99, brand: 'Gigabyte', image: 'https://static.gigabyte.com/StaticFile/Image/Global/b01c7d0d5c3d066a8cfe3a1913d8cd4d/Product/31936/png/500' },
      { id: '4', name: 'ASUS TUF Z890-Plus WiFi', specs: 'LGA1851, DDR5', price: 1499.99, brand: 'ASUS', image: 'https://dlcdnwebimgs.asus.com/gain/2A4F22F8-0D3B-4E5D-9A2A-0C8E8C6C8F0D/w800' },
    ]
  },
  {
    name: 'Memória RAM',
    icon: MemoryStick,
    category: 'memory',
    components: [
      { id: '1', name: 'Corsair Vengeance RGB Pro', specs: '32GB DDR5 6000MHz', price: 899.99, brand: 'Corsair', image: 'https://assets.corsair.com/image/upload/f_auto,q_auto/content/CMH32GX5M2B6000C36_VENG_RGB_DDR5_BK_01.png' },
      { id: '2', name: 'Kingston Fury Beast', specs: '32GB DDR5 5600MHz', price: 749.99, brand: 'Kingston', image: 'https://media.kingston.com/kingston/product/ktc-product-memory-fury-beast-ddr5-rgb-2-dimm-zm-lg.png' },
      { id: '3', name: 'G.Skill Trident Z5', specs: '32GB DDR5 6000MHz', price: 999.99, brand: 'G.Skill', image: 'https://www.gskill.com/_upload/images/1629280524.png' },
      { id: '4', name: 'Corsair Dominator Titanium', specs: '64GB DDR5 6400MHz', price: 1899.99, brand: 'Corsair', image: 'https://assets.corsair.com/image/upload/f_auto,q_auto/content/CMP64GX5M2B6400C32_DOMINATOR_TITANIUM_BLK_01.png' },
    ]
  },
  {
    name: 'Placa de Vídeo',
    icon: Monitor,
    category: 'gpu',
    components: [
      { id: '1', name: 'RTX 4090', specs: '24GB GDDR6X', price: 9999.99, brand: 'NVIDIA', image: 'https://dlcdnwebimgs.asus.com/gain/EC78E09E-6A7F-449A-8C23-4963A2813798/w717/h525' },
      { id: '2', name: 'RTX 4080 Super', specs: '16GB GDDR6X', price: 6999.99, brand: 'NVIDIA', image: 'https://dlcdnwebimgs.asus.com/gain/A4E1E7C0-2D3A-4F0F-9E5C-7CDED3F45E09/w717/h525' },
      { id: '3', name: 'RTX 4070 Ti', specs: '12GB GDDR6X', price: 4999.99, brand: 'NVIDIA', image: 'https://dlcdnwebimgs.asus.com/gain/BD89E12D-3C4D-4A0F-8E5C-1BCDE2F34E08/w717/h525' },
      { id: '4', name: 'RTX 4070', specs: '12GB GDDR6', price: 3999.99, brand: 'NVIDIA', image: 'https://dlcdnwebimgs.asus.com/gain/FC67D09E-2B6F-438A-7C52-3962B1723D97/w717/h525' },
    ]
  },
  {
    name: 'SSD/HD',
    icon: HardDrive,
    category: 'storage',
    components: [
      { id: '1', name: 'Samsung 990 Pro', specs: 'NVMe 1TB PCIe 4.0', price: 999.99, brand: 'Samsung', image: 'https://images.samsung.com/is/image/samsung/p6pim/br/mz-v9p1t0b-am/gallery/br-990-pro-w-heatsink-mz-v9p1t0b-am-537344723?$730_584_PNG$' },
      { id: '2', name: 'WD Black SN850X', specs: 'NVMe 1TB PCIe 4.0', price: 799.99, brand: 'WD', image: 'https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-black-sn850x-nvme-ssd/gallery/wd-black-sn850x-nvme-ssd-angle.png.thumb.1280.1280.png' },
      { id: '3', name: 'Sabrent Rocket 4+', specs: 'NVMe 2TB PCIe 4.0', price: 1499.99, brand: 'Sabrent', image: 'https://sabrent.com/wp-content/uploads/2020/07/SB-RKTQ-2TB-1.png' },
      { id: '4', name: 'Samsung 870 EVO', specs: 'SSD SATA 1TB', price: 499.99, brand: 'Samsung', image: 'https://images.samsung.com/is/image/samsung/p6pim/br/mz-77e1t0b-am/gallery/br-870-evo-sata-3-2-5-ssd-mz-77e1t0b-am-368345470?$730_584_PNG$' },
    ]
  },
  {
    name: 'Gabinete',
    icon: Box,
    category: 'case',
    components: [
      { id: '1', name: 'Corsair 5000T RGB', specs: 'E-ATX, Tempered Glass', price: 1999.99, brand: 'Corsair', image: 'https://cwsmgmt.corsair.com/responsive/img/2023/case/5000T_RGB/BLACK/screenshots/5000T_BLACK_01.png' },
      { id: '2', name: 'NZXT H7 Flow', specs: 'ATX, Mesh Front', price: 1299.99, brand: 'NZXT', image: 'https://nzxt.com/assets/cms/34299/1663266473-h7-flow-black-hero.png?auto=format&fit=crop&h=1000&w=1000' },
      { id: '3', name: 'Lian Li Lancool 303', specs: 'ATX, Mesh Design', price: 799.99, brand: 'Lian Li', image: 'https://lian-li.com/wp-content/uploads/2023/01/216-1.png' },
      { id: '4', name: 'Corsair iCUE 4000 Air RGB', specs: 'ATX, Airflow', price: 999.99, brand: 'Corsair', image: 'https://cwsmgmt.corsair.com/responsive/img/2021/case/4000X/BLACK/screenshots/4000X_BLACK_01.png' },
    ]
  },
  {
    name: 'Fonte',
    icon: Power,
    category: 'psu',
    components: [
      { id: '1', name: 'Corsair RM1200x (2023)', specs: '1200W, Gold', price: 1899.99, brand: 'Corsair', image: 'https://assets.corsair.com/image/upload/f_auto,q_auto/content/CP-9020252-NA_RM1200x_01.png' },
      { id: '2', name: 'EVGA SuperNOVA 1000 P6', specs: '1000W, Platinum', price: 1599.99, brand: 'EVGA', image: 'https://www.evga.com/products/images/gallery/220-G6-1000-X1_XL_1.jpg' },
      { id: '3', name: 'MSI MPG A1000GF', specs: '1000W, Gold', price: 1299.99, brand: 'MSI', image: 'https://storage-asset.msi.com/global/picture/image/feature/mb/POWER/A1000G_PCIE5/kv.png' },
      { id: '4', name: 'Corsair HXi Series 850W', specs: '850W, Platinum', price: 1099.99, brand: 'Corsair', image: 'https://assets.corsair.com/image/upload/f_auto,q_auto/content/CP-9020138-NA_HX850_01.png' },
    ]
  },
  {
    name: 'Periféricos',
    icon: Headphones,
    category: 'peripherals',
    components: [
      { id: '1', name: 'Monitor ASUS ROG Swift', specs: '27" 4K 240Hz', price: 3999.99, brand: 'ASUS', image: 'https://dlcdnwebimgs.asus.com/gain/9C0F7C8D-0B7C-4E5D-8A2A-0C8E7B6C7F0D/w717/h525' },
      { id: '2', name: 'Logitech G Pro X Super Light', specs: 'Gaming Mouse', price: 599.99, brand: 'Logitech', image: 'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight/gallery/pro-x-superlight-gallery-1-black.png?v=1' },
      { id: '3', name: 'Corsair K95 Platinum XT', specs: 'Gaming Keyboard Mecânico', price: 1299.99, brand: 'Corsair', image: 'https://assets.corsair.com/image/upload/f_auto,q_auto/content/CH-9127414-NA_K95_PLATINUM_XT_01.png' },
      { id: '4', name: 'SteelSeries Arctis Pro Wireless', specs: 'Headset sem fio', price: 1199.99, brand: 'SteelSeries', image: 'https://media.steelseriescdn.com/thumbs/catalog/items/61473/3a3c015bff1d496bb4c44e5a88bce6ea.png.500x400_q100_crop-fit_optimize.png' },
    ]
  },
];

export default function BuildPC() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedComponents, setSelectedComponents] = useState<{ [key: string]: Component }>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [brandFilter, setBrandFilter] = useState('Todos');
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const summaryRef = useRef<HTMLDivElement | null>(null);

  const step = buildSteps[currentStep];
  const isLastStep = currentStep === buildSteps.length - 1;

  const availableBrands = Array.from(
    new Set(step.components.map((c) => c.brand || 'Outros'))
  );

  const filteredComponents = step.components.filter((comp) => {
    const matchesSearch =
      comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comp.specs.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand =
      brandFilter === 'Todos' || (comp.brand || 'Outros') === brandFilter;
    return matchesSearch && matchesBrand;
  });

  const handleSelectComponent = (component: Component) => {
    setSelectedComponents({
      ...selectedComponents,
      [step.category]: component
    });
  };

  const handleNext = () => {
    if (currentStep < buildSteps.length - 1) {
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

  const handleAddToCart = () => {
    console.log('Configuração adicionada ao carrinho:', selectedComponents);
    setIsCartModalOpen(true);
  };

  const scrollToSummary = () => {
    summaryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const total = calculateTotal();
  const pixPrice = total * 0.85;
  const installmentValue = total / 12;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Warning Banner */}
        <div className="bg-red-600 text-white py-3 px-4 text-center font-bold text-sm md:text-base">
          ATENÇÃO! QUALQUER CONFIGURAÇÃO PERSONALIZADA NESTA FERRAMENTA NÃO SERÁ ENVIADA MONTADA!
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Steps Navigation - Centered */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex justify-center items-center gap-4 md:gap-2 pb-8 overflow-x-auto flex-wrap">
              {buildSteps.map((stepItem, idx) => (
                <div key={stepItem.category} className="flex items-center gap-4 md:gap-2">
                  <motion.button
                    onClick={() => {
                      if (idx <= currentStep) setCurrentStep(idx);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex flex-col items-center gap-2 pb-1"
                  >
                    <stepItem.icon
                      className={`w-9 h-9 transition-all ${
                        currentStep === idx
                          ? 'text-[#f5c400] drop-shadow-[0_0_6px_rgba(245,196,0,0.35)] scale-110'
                          : 'text-muted-foreground/70'
                      }`}
                    />
                    <span
                      className={`text-sm font-semibold whitespace-nowrap transition-colors ${
                        currentStep === idx ? 'text-[#f5c400]' : 'text-muted-foreground'
                      }`}
                    >
                      {stepItem.name}
                    </span>
                    <div
                      className={`h-[3px] w-16 rounded-full transition-all ${
                        currentStep === idx ? 'bg-gradient-to-r from-[#f5c400] to-[#f3a500]' : 'bg-transparent'
                      }`}
                    />
                  </motion.button>

                  {/* connector */}
                  {idx < buildSteps.length - 1 && (
                    <div
                      className={`hidden sm:block h-[2px] w-10 md:w-12 rounded-full transition-colors ${
                        idx < currentStep ? 'bg-[#f5c400]' : 'bg-muted-foreground/40'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Main Content - Centered */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)_300px]">
              {/* Left Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="sticky top-8"
                >
                  {/* Current Category */}
                  <div className="mb-6 text-center lg:text-left">
                    <h2 className="font-display text-xl font-bold text-foreground flex items-center justify-center lg:justify-start gap-2">
                      <step.icon className="w-7 h-7 text-primary" /> {step.name}
                    </h2>
                  </div>

                  {/* Summary */}
                  <div className="bg-gradient-card border border-border rounded-2xl p-4 space-y-3 text-center">
                    {selectedComponents[step.category] ? (
                      <>
                        <p className="text-xs text-muted-foreground uppercase">Selecionado:</p>
                        <p className="font-bold text-foreground text-sm">
                          {selectedComponents[step.category].name}
                        </p>
                        <p className="text-lg font-bold text-primary">
                          R$ {selectedComponents[step.category].price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                      </>
                    ) : (
                      <p className="text-muted-foreground italic text-sm">
                        Seleccione um {step.name.toLowerCase()}
                      </p>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-1">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Filters and Search */}
                  <div className="mt-6 mb-6 space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {[ 'Todos', ...availableBrands ].map((brand) => (
                        <button
                          key={brand}
                          onClick={() => setBrandFilter(brand)}
                          className={`px-4 py-2 rounded-md text-sm font-semibold border transition-colors ${
                            brandFilter === brand
                              ? 'border-primary text-primary bg-primary/10'
                              : 'border-border text-muted-foreground hover:border-primary/40'
                          }`}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-center">
                      <div className="relative w-full max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          placeholder="Buscar..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredComponents.length > 0 ? (
                      filteredComponents.map((component, idx) => (
                        <motion.button
                          key={component.id}
                          onClick={() => handleSelectComponent(component)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className={`relative rounded-lg overflow-hidden border-2 transition-all group ${
                            selectedComponents[step.category]?.id === component.id
                              ? 'border-primary shadow-lg shadow-primary/30'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          {/* Product Image */}
                          <div className="aspect-square bg-secondary/30 overflow-hidden">
                            <img 
                              src={component.image} 
                              alt={component.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Content Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <h3 className="font-bold text-white text-xs line-clamp-2 mb-1">
                              {component.name}
                            </h3>
                            <p className="text-xs text-gray-200 mb-2">
                              {component.specs}
                            </p>
                            <p className="text-sm font-bold text-primary">
                              R$ {component.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </p>
                          </div>

                          {/* Selection Badge */}
                          {selectedComponents[step.category]?.id === component.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                            >
                              <Check className="w-4 h-4 text-background" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))
                    ) : (
                      <div className="col-span-full py-12 text-center">
                        <p className="text-muted-foreground">Nenhum produto encontrado</p>
                      </div>
                    )}
                  </div>

                  {/* Navigation Buttons - Centered */}
                  <div className="flex gap-4 mt-8 justify-center">
                    <Button
                      onClick={handlePrevious}
                      disabled={currentStep === 0}
                      variant="outline"
                      size="lg"
                      className="flex items-center gap-2"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Anterior
                    </Button>
                    <Button
                      onClick={handleNext}
                      disabled={!selectedComponents[step.category] || isLastStep}
                      size="lg"
                      className="flex items-center justify-center gap-2"
                    >
                      {isLastStep ? '✓ Revisão Final' : 'Próximo'}
                      {!isLastStep && <ChevronRight className="w-5 h-5" />}
                    </Button>
                  </div>
                </motion.div>
              </div>

              {/* Right Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className="sticky top-8"
                >
                  <div className="bg-gradient-card border border-border rounded-2xl p-5 space-y-4 shadow-lg">
                    <div className="space-y-1 text-center">
                      <p className="text-xs font-semibold uppercase text-emerald-400">à vista</p>
                      <p className="text-3xl font-extrabold text-emerald-400">
                        R$ {pixPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                      <p className="text-xs text-muted-foreground">no PIX com 15% de desconto</p>
                    </div>

                    <div className="h-px w-full bg-border" />

                    <div className="space-y-1 text-center">
                      <p className="text-sm font-extrabold text-red-500">
                        R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        em até 12x de R$ {installmentValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros no cartão
                      </p>
                    </div>

                    <Button
                      className="w-full justify-center"
                      size="lg"
                      onClick={scrollToSummary}
                      disabled={total === 0}
                    >
                      Ver configuração selecionada
                    </Button>

                    {total === 0 && (
                      <p className="text-xs text-muted-foreground text-center">
                        Selecione peças para ver os valores e formas de pagamento.
                      </p>
                    )}
                  </div>
        <Button
          className="w-full justify-center mt-4"
          size="lg"
          onClick={handleNext}
          disabled={!selectedComponents[step.category] || isLastStep}
        >
          {isLastStep ? '✓ Revisão Final' : 'Próximo'}
          {!isLastStep && <ChevronRight className="w-5 h-5" />}
        </Button>
      </motion.div>
    </div>
  </div>
</div>

          {/* Full Width Summary */}
          <motion.div
            ref={summaryRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 bg-gradient-card border border-border rounded-2xl p-6"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Sua Configuração Completa
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {buildSteps.map((buildStep) => (
                <div
                  key={buildStep.category}
                  className={`p-4 rounded-lg border transition-all ${
                    selectedComponents[buildStep.category]
                      ? 'bg-primary/10 border-primary/30'
                      : 'bg-secondary/30 border-border'
                  }`}
                >
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-1">
                    {buildStep.name}
                  </p>
                  {selectedComponents[buildStep.category] ? (
                    <>
                      <p className="font-bold text-foreground text-sm mb-1">
                        {selectedComponents[buildStep.category].name}
                      </p>
                      <p className="text-primary font-bold">
                        R$ {selectedComponents[buildStep.category].price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    </>
                  ) : (
                    <p className="text-muted-foreground text-sm">Não selecionado</p>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border space-y-4">
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Total da Configuração:</p>
                <p className="text-3xl font-bold text-gradient-gold">
                  R$ {calculateTotal().toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
              <Button 
                onClick={handleAddToCart}
                disabled={Object.keys(selectedComponents).length === 0}
                size="lg"
                className="w-full px-8"
              >
                Adicionar ao Carrinho
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />

      {/* Cart Modal */}
      <Dialog open={isCartModalOpen} onOpenChange={setIsCartModalOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-secondary/30 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/60 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-primary">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <ShoppingCart className="w-6 h-6 text-primary" />
              Configuração Adicionada ao Carrinho!
            </DialogTitle>
            <DialogDescription>
              Sua configuração personalizada foi adicionada com sucesso.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            {/* Selected Components List */}
            <div className="space-y-3">
              {buildSteps.map((buildStep) => {
                const component = selectedComponents[buildStep.category];
                if (!component) return null;
                
                return (
                  <div
                    key={buildStep.category}
                    className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border"
                  >
                    <buildStep.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground uppercase">{buildStep.name}</p>
                      <p className="font-semibold text-sm">{component.name}</p>
                      <p className="text-xs text-muted-foreground">{component.specs}</p>
                    </div>
                    <p className="font-bold text-primary flex-shrink-0">
                      R$ {component.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Pricing Summary */}
            <div className="border-t border-border pt-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Subtotal:</span>
                <span className="font-bold text-lg">R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
                <div>
                  <p className="text-xs text-emerald-400 font-semibold uppercase">Preço no PIX (15% OFF)</p>
                  <p className="text-2xl font-extrabold text-emerald-400">R$ {pixPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                </div>
              </div>
              <div className="text-center text-sm text-muted-foreground">
                ou em até <span className="font-semibold text-foreground">12x de R$ {installmentValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span> sem juros
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setIsCartModalOpen(false)}
              >
                Continuar Comprando
              </Button>
              <Button
                className="flex-1"
                onClick={() => {
                  setIsCartModalOpen(false);
                  // Navigate to cart - implement when cart page exists
                  console.log('Navigate to cart');
                }}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Ir para o Carrinho
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
