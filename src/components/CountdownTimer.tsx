import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          return { days: 3, hours: 12, minutes: 45, seconds: 30 };
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { value: timeLeft.days, label: 'Dias' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Minutos' },
    { value: timeLeft.seconds, label: 'Segundos' },
  ];

  return (
    <div className="flex items-center gap-2 md:gap-4">
      {timeBlocks.map((block, index) => (
        <div key={block.label} className="flex items-center gap-2 md:gap-4">
          <motion.div
            key={`${block.label}-${block.value}`}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            className="flex flex-col items-center"
          >
            <div className="bg-card border border-border rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[50px] md:min-w-[70px] text-center">
              <span className="font-display text-xl md:text-3xl font-bold text-primary">
                {String(block.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-xs md:text-sm text-muted-foreground mt-1">
              {block.label}
            </span>
          </motion.div>
          {index < timeBlocks.length - 1 && (
            <span className="font-display text-2xl text-primary font-bold -mt-6">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
