import { Users } from "lucide-react";
import { useState, useEffect } from "react";

const INITIAL_SPOTS = 47;
const MIN_SPOTS = 12;
const STORAGE_KEY = "urgency_spots";

export const UrgencyBanner = () => {
  const [spots, setSpots] = useState(INITIAL_SPOTS);

  useEffect(() => {
    // Check localStorage for existing spots count
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed) && parsed >= MIN_SPOTS) {
        setSpots(parsed);
      }
    } else {
      localStorage.setItem(STORAGE_KEY, String(INITIAL_SPOTS));
    }

    // Simulate occasional spot decrease
    const interval = setInterval(() => {
      setSpots((prev) => {
        if (prev <= MIN_SPOTS) return prev;
        const shouldDecrease = Math.random() > 0.7;
        if (shouldDecrease) {
          const newSpots = prev - 1;
          localStorage.setItem(STORAGE_KEY, String(newSpots));
          return newSpots;
        }
        return prev;
      });
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/90 to-accent/90 backdrop-blur-sm py-2 px-4">
      <div className="container-narrow flex items-center justify-center gap-2 text-sm font-medium text-primary-foreground">
        <Users className="w-4 h-4 animate-pulse" />
        <span>
          🔥 <strong>Apenas {spots} vagas</strong> restantes com desconto especial
        </span>
      </div>
    </div>
  );
};

export const UrgencyBadge = () => {
  const [spots, setSpots] = useState(INITIAL_SPOTS);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed) && parsed >= MIN_SPOTS) {
        setSpots(parsed);
      }
    }

    // Sync with banner updates
    const handleStorage = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed)) setSpots(parsed);
      }
    };

    window.addEventListener("storage", handleStorage);
    const interval = setInterval(handleStorage, 1000);

    return () => {
      window.removeEventListener("storage", handleStorage);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 text-accent mb-6">
      <Users className="w-4 h-4" />
      <span className="text-sm font-semibold">
        Apenas <strong>{spots} vagas</strong> restantes
      </span>
    </div>
  );
};
