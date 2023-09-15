import React, { useState } from "react";
import "../App.css";

interface CustomListGroupProps {
  items: string[]; // 'items' parametresinin dizeden oluşan bir dizi olduğunu belirtiyoruz.
  onItemClick: (item: string) => void; // 'onItemClick' parametresinin bir işlev olduğunu ve bir dize aldığını belirtiyoruz.
}

// CustomListGroup bileşeni
function ListGroup({ items }: CustomListGroupProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  // Öğeye tıklandığında çalışacak işlev
  const handleItemClick = (item: string) => {
    // Parameter 'item' implicitly has an 'any' type.ts(7006)
    setSelectedItem(item);
  };

  // Resmi ekrana getirmek için kullanılan işlev
  const renderImage = () => {
    if (selectedItem) {
      // Öğenin adıyla aynı isimde bir resim dosyası varsa göster
      return <img src={`/${selectedItem}.png`} alt={`${selectedItem} Resim`} />;
    }
    return null; // Öğe seçilmediyse resim gösterme
  };

  return (
    <div>
      <h1>Liste!</h1>
      {items.length === 0 ? <p>Nothing Found</p> : null}
      {items.length === 0 && <p>Nothing Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item}
            className="list-group-item"
            onClick={() => handleItemClick(item)}
            >{item}
          </li>
        ))}
      </ul>
      <div>{renderImage()}</div>
    </div>
  );
}
export default ListGroup;

