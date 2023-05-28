import { createContext, useContext, useState } from 'react';

// Membuat konteks QuantityContext
const QuantityContext = createContext();

// Komponen induk yang akan menyimpan state dan menyediakan akses ke state melalui konteks
export function QuantityProvider({ children }) {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Membungkus konteks di sekitar komponen-komponen anak
  return (
    <QuantityContext.Provider
      value={{
        quantity,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </QuantityContext.Provider>
  );
}

// Hook untuk mengakses nilai quantity dan fungsi untuk mengubahnya
export function useQuantity() {
  return useContext(QuantityContext);
}
