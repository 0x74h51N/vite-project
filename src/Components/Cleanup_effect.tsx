import React, { useState, useEffect } from "react";

function DataFetchingExample() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // Component mount durumunu takip etmek için bir flag ekliyoruz.

    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data");
        const result = await response.json();

        // Veri çekme işlemi tamamlandığında, component hala mount ise setState yapalım.
        if (isMounted) {
          setData(result);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Veri çekme hatası:", error);

        // Veri çekme hatası durumunda, component hala mount ise setState yapalım.
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData(); // API'den veri çekme işlemi

    // Cleanup işlemi: Component unmount edildiğinde veya bağımlılık değiştiğinde çalışır.
    return () => {
      isMounted = false; // Component unmount olduğunda flag'i false yapalım.

      // Eğer gerekliyse, açıkta kalan kaynakları temizle.
      // Örneğin, kullanılan herhangi bir abonelik veya timer'ı kapat.
      // Abonelikleri kapatmak için: subscription.unsubscribe();
      // Timer'ı kapatmak için: clearInterval(timerId);
    };
  }, []); // Boş bağımlılık dizisi, sadece component mount olduğunda çalışır.

  if (isLoading) {
    return <p>Veri yükleniyor...</p>;
  }

  if (!data) {
    return <p>Veri alınamadı.</p>;
  }

  return (
    <div>
      <h1>API Verisi</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataFetchingExample;
